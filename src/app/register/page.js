"use client"
import Spinner from "@/components/spinner"
import { useState } from "react"
import { toast } from "react-toastify"
import { z } from "zod"

const schema = z.object({
	name: z.string().min(1, { message: "Navn er påkrævet" }).max(25, { message: "Dit navn må max være 25 tegn" }),
	email: z.string().min(1, { message: "Email er påkrævet" }).email({ message: "Ugyldig email" }),
	password: z.string().min(1, { message: "Adgangskode er påkrævet" }).max(50, { message: "Adgangskoden er for lang (max 50 tegn)" }),
	repeatpassword: z.string().min(1, { message: "Adgangskode er påkrævet" }).max(50, { message: "Adgangskoden er for lang (max 50 tegn)" })
}).superRefine(function ({ password, repeatpassword }, ctx) {
	if (password !== repeatpassword) {
		ctx.addIssue({
			code: "custom",
			message: "Adgangskoden er ikke ens",
			path: ["repeatpassword"]
		})
	}
})

export default function Register() {
	const [loading, setLoading] = useState(false)

	async function handleSubmit(event) {
		event.preventDefault()

		setLoading(true)

		const form = {
			name: event.target.name.value,
			email: event.target.email.value,
			password: event.target.password.value,
			repeatpassword: event.target.repeatpassword.value
		}

		const validation = schema.safeParse(form)

		if (!validation.success) {
			const errors = validation.error.flatten().fieldErrors

			for (let key in errors) {
				toast.error(errors[key].toString())
			}
			setLoading(false)
			return
		}

		try {
			const response = await fetch("http://localhost:4000/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: form.name,
					email: form.email,
					password: form.password
				})
			})

			if (response.status === 201) {
				toast.success("Din konto er nu oprettet")
			} else {
				toast.error("Kontoen kunne ikke blive oprettet")
			}
		} catch (error) {
			console.log(error)
			toast.error("Noget gik galt. Prøv igen senere")
		} finally {
			setLoading(false)
		}

	}

	return (
		<section className="p-8">
			<h1 className="text-2xl font-bold">Registrer en gratis konto</h1>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col">
					<label className="flex flex-col">
						Navn
						<input type="text" name="name"
							required
							className="text-black border border-black rounded-sm" />
					</label>
				</div>
				<div className="flex flex-col">
					<label className="flex flex-col">
						Email
						<input type="email" name="email"
							required
							className="text-black border border-black rounded-sm" />
					</label>
				</div>
				<div className="flex flex-col">
					<label className="flex flex-col">
						Adgangskode
						<input type="password" name="password"
							required
							className="text-black border border-black rounded-sm" />
					</label>
				</div>
				<div className="flex flex-col">
					<label className="flex flex-col">
						Gentag adgangskode
						<input type="password" name="repeatpassword"
							required
							className="text-black border border-black rounded-sm" />
					</label>
				</div>
				<button
					type="submit"
					className="bg-blue-500 py-2 px-8 rounded-sm text-white font-bold"
					disabled={loading}
				>
					Opret konto {loading && <Spinner />}
				</button>
			</form>
		</section>
	)
}
