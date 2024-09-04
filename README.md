# Leah's Hundeinternat Dokumentation
Brian Emilius

## Tech-stack

Min tech-stack består af NextJS og et REST API.
Derudover har jeg også brugt Tailwind eller Bootstrap, eller SASS, eller styled components.

Fordi blah blah blah.

## Kode-eksempel

```javascript
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
```

FORKLARING HER

