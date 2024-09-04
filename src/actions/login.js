"use server"

import { cookies } from "next/headers"

export default async function Login(formData) {
	//console.log(formData.get("password"))

	const form = {
		email: formData.get("email"),
		password: formData.get("password")
	}

	try {
		const response = await fetch("http://localhost:4000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(form)
		})

		if (response.status === 200) {
			const data = await response.json()
			cookies().set("lh_at", data.accessToken, { maxAge: 60 * 60 })
			cookies().set("lh_uid", data.user.id, { maxAge: 60 * 60 })
		} else {
			console.log("øv")
		}
	} catch (error) {
		
	}
}
