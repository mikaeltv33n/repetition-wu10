import Link from "next/link"
import { metadata } from "./layout"

export default async function Home() {
  const response = await fetch("http://localhost:3001/animals")
  const data = await response.json()

  metadata.title = "Foreningen for Dyrevelfærd"

  return (
    <>
      {data.map(item => (
        <p key={item.id}>
          <Link href={`/${item.id}`}>{item.name}</Link>
        </p>
      ))}
    </>
  )
}
