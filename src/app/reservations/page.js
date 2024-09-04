import { cookies } from "next/headers"

export default async function Reservations() {

	// downey@mail.dk
	// theIronMan

	const accessToken = cookies().get("lh_at").value
	const id = cookies().get("lh_uid").value

	const response = await fetch(`http://localhost:4000/reservations?userId=${id}`, {
		headers: {
			"Authorization": "Bearer " + accessToken
		}
	})

	const data = await response.json()

	return (
		<section>
			<h1 className="text-2xl">Reservationer</h1>
			{data.map(item => (
				<article>
					<p>{item.date}</p>
					<p>{item.table}</p>
				</article>
			))}
		</section>
	)
}