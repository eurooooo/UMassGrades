'use client'

import { useState, useEffect, useRef } from 'react'
import { Search } from "lucide-react"
import { Input } from "./ui/input"
import Link from 'next/link'
import debounce from 'lodash/debounce'

// Updated mock data structure
const mockData = {
  classes: [
    { id: 1, name: "Associate Degree in Arts 101", description: "Introduction to liberal arts concepts and practices." },
    { id: 2, name: "Computer Science 202", description: "Advanced programming techniques and data structures." },
    // Add more classes...
  ],
  professors: [
    { id: 1, name: "Kelvin Ratke" },
    { id: 2, name: "Francesco Pfeffer" },
    // Add more professors...
  ],
  departments: [
    { id: 1, name: "Computer Science", class_id: 2 },
    { id: 2, name: "Liberal Arts", class_id: 1 },
    // Add more departments...
  ]
}

export default function SearchWithDropdown({ isHome = false }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState({ classes: [], professors: [], departments: [] })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const debouncedSearch = debounce((query) => {
    if (query.trim() === "") {
      setSearchResults({ classes: [], professors: [], departments: [] })
      return
    }

    const filteredClasses = mockData.classes.filter(c => 
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
    )
    const filteredProfessors = mockData.professors.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase())
    )
    const filteredDepartments = mockData.departments.filter(d => 
      d.name.toLowerCase().includes(query.toLowerCase())
    )

    setSearchResults({ 
      classes: filteredClasses, 
      professors: filteredProfessors, 
      departments: filteredDepartments 
    })
  }, 300)

  useEffect(() => {
    debouncedSearch(searchQuery)
    return () => debouncedSearch.cancel()
  }, [searchQuery])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setIsDropdownOpen(true)
  }

  const renderSearchResults = () => {
    const { classes, professors, departments } = searchResults
    const hasResults = classes.length > 0 || professors.length > 0 || departments.length > 0

    if (!hasResults) {
      return (
        <div className="p-4 text-sm text-gray-500">
          No results found
        </div>
      )
    }

    return (
      <>
        {renderSection("Classes", classes, (c) => (
          <Link 
            key={c.id} 
            href={`/class/${c.id}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
          >
            <div>{c.name}</div>
            <div className="text-xs text-gray-500">{c.description}</div>
          </Link>
        ))}
        {renderSection("Professors", professors, (p) => (
          <Link 
            key={p.id} 
            href={`/professor/${p.id}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
          >
            {p.name}
          </Link>
        ))}
        {renderSection("Departments", departments, (d) => (
          <Link 
            key={d.id} 
            href={`/department/${d.id}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
          >
            {d.name}
          </Link>
        ))}
      </>
    )
  }

  const renderSection = (title, items, renderItem) => {
    if (items.length === 0) return null
    return (
      <div className="p-2 border-t first:border-t-0">
        <h3 className="mb-2 text-sm font-semibold text-gray-500">{title}</h3>
        {items.map(renderItem)}
      </div>
    )
  }

  return (
    <div className={`relative ${isHome ? "max-w-2xl mx-auto" : ""}`} ref={dropdownRef}>
      <Search className="absolute w-4 h-4 text-gray-400 left-3 top-3" />
      <Input
        className="h-10 pl-10"
        placeholder="Search by Class, Instructor, or Department"
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={() => setIsDropdownOpen(true)}
        aria-label="Search by Class, Instructor, or Department"
      />
      {isDropdownOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-96 overflow-y-auto">
          {renderSearchResults()}
        </div>
      )}
    </div>
  )
}
