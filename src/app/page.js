import Link from "next/link"
import { metadata } from "./layout"

export default async function Home() {
  const response = await fetch("http://localhost:3001/animals")
  const data = await response.json()

  metadata.title = "Leah's Hundeinternat"

  return (
    <>
      <h1>hej verden</h1>
      {data.map(item => (
        <p key={item.id}>
          <Link href={`/${item.id}`}>{item.name}</Link>
        </p>
      ))}
    </>
  )
}
