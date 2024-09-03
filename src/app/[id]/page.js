import Image from "next/image"
import { metadata } from "@/app/layout"

export default async function AnimalDetails({ params }) {
	const response = await fetch(`http://localhost:3001/animals/${params.id}`)
	const data = await response.json()

	metadata.title = `${data.name} | Leah's Hundeinternat`

	return (
		<article>
			<h2 className="text-2xl">{data.name}</h2>
			<p className="text-xl">{data.breed}</p>
			<Image src={data.images[0].url} alt={data.images[0].alt} width="200" height="200" />
			<p>{data.name} er en {data.age} år gammel {data.breed} med {data.color} pels.</p>
		</article>
	)
}
