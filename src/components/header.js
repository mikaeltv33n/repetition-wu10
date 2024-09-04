import Link from "next/link";
import Login from "@/actions/login";

export default function Header() {
	return (
		<header className="bg-green-900 text-white py-4 px-8 flex justify-between">
			<Link href="/" className="text-2xl">Leah's Hundeinternat</Link>
			<form action={Login}>
				<div className="flex flex-col">
					<label>
						Email
						<input type="email" name="email" className="text-black" />
					</label>
				</div>
				<div className="flex flex-col">
					<label>
						Adgangskode
						<input type="password" name="password" className="text-black" />
					</label>
				</div>
				<button className="bg-blue-500 py-2 px-4">Log ind</button>
				<p>Har du ikke en konto? <Link href="/register" className="text-blue-500 underline">Opret en gratis konto!</Link></p>
			</form>
		</header>
	)
}