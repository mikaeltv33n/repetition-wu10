"use client"

import { useState } from "react"
import { z } from "zod"
import Spinner from "./spinner"

const schema = z.string().email({ message: "Ugyldig email" })

export default function Footer() {
	const [errorMessage, setErrorMessage] = useState("")
	const [loading, setLoading] = useState(false)

	async function handleSubmit(event) {
		event.preventDefault()

		setLoading(true)

		const validation = schema.safeParse(event.target.email.value)

		if (!validation.success) {
			setErrorMessage(validation.error.flatten().formErrors.toString())
			setLoading(false)
			return
		} else {
			setErrorMessage("")
		}

		try {
			const response = await fetch("http://localhost:3001/subscribers", {
				method: "POST",
				body: JSON.stringify({
					email: event.target.email.value,
					createdAt: new Date().toTimeString() /* dato for hvornår bruger tilmelder sig(trykker på tilmeld) */
				})
			})
		} catch (error) {
			console.log("error", error)
			setErrorMessage("Noget gik galt. Prøv igen senere.")
		} finally {
			setLoading(false)
		}
	}

	return (
		<footer className="text-white bg-black/85 py-8 ">
			<form
				onSubmit={handleSubmit}
				method="post"
				className="w-[400px] mx-auto text-center pb-5"
			>
				<div className="flex flex-col">
					<label className="">
						Email
						<input type="email" name="email" className="ml-2 rounded-sm text-black" />
					</label>
					<span className="text-red-400">{errorMessage}</span>
				</div>
				<button
					type="submit"
					className="mt-2 py-1 px-2 text-xs bg-white rounded-sm text-black"
					disabled={loading}
				>
					Tilmeld Nyhedsbrev {loading && <Spinner />}
				</button>
			</form>
			<p className="text-center"> &copy; My Company 2024</p>
		</footer>
	)
}
