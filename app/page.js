import InitialHome from "@/components/InitialHome";
import Image from "next/image";

export default async function page() {
  const res = await fetch("http://localhost:8080/api/classes");
  const data = await res.json();

  return (
    // <ul>
    //   {data.map((pro) => (
    //     <li key={pro.id}>
    //       <p>
    //         id:{pro.id} name: {pro.name}
    //       </p>
    //     </li>
    //   ))}
    // </ul>
    <InitialHome />
  );
}
