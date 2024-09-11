"use client"

import { useState } from "react"
import { z } from "zod"

const schema = z.string().email({ message: "Ugyldig email" })

export default function Newsletter() {
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
        <section className="text-black flex flex-row bg-blue-200 h-52 px-36">
            <div className="flex flex-col justify-start pt-4 pr-8">
                <h4 className="text-start text-blue-600 text-4xl mb-6">
                    Tilmeld vores nyhedsbrev
                </h4>
                <p className="text-start text-black font-semibold">
                    Få inspiration og nyheder om dyrevelfærd og vores arbejde, direkte i din indbakke
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                method="post"
                className="w-96 mx-auto text-center mt-14 pb-5 flex flex-col justify-center"
            >
                <div className="flex space-x-4">
                    <div className="flex flex-col">
                        <label className="text-start mb-2">
                            
                            <input placeholder="Email" type="email" name="email" className="mt-1 pl-2 w-56 rounded-sm text-black " />
                        </label>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-start mb-2">
                            <input placeholder="Navn" type="text"  name="name" className="mt-1 pl-2 w-56 rounded-sm text-black " />
                        </label>
                        <div className="flex justify-end ">
                            <button
                                type="submit"
                                className=" py-3 px-3 text-sm bg-blue-800 rounded-md text-white w-20 mt-2"
                                disabled={loading}
                            >
                                Tilmeld{loading && <Spinner />}
                            </button>
                        </div>
                    </div>
                </div>
                <span className="text-red-400 mt-2">{errorMessage}</span>
            </form>
        </section>


    )
}