import Link from "next/link";
export default function Header() {
	return (
		<header className="bg-white space-x-40 text-black py-4 px-8 flex justify-evenly items-center border-b ">
			<div className="flex items-center space-x-4">
				<img className="h-8 w-6" src="/logo.png" alt="Logo" />
				<Link href="/" className="text-2xl">Foreningen for Dyrevelfærd</Link>
			</div>
			<nav className="flex space-x-6">
				<Link href="/"className="text-gray-500 hover:text-black" >Hjem</Link>
				<Link href="" className="text-gray-500 hover:text-black" >Om os</Link>
				<Link href="" className="text-gray-500 hover:text-black" >Bliv frivillig</Link>
				<Link href="" className="text-gray-500 hover:text-black" >Dyr i nød?</Link>
				<Link href="" className="text-gray-500 hover:text-black" >Adopter et dyr</Link>


			</nav>
		</header>
	)
}