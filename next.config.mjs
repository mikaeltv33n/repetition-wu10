/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.marthastewart.com",
				port: "",
				pathname: "/**"
			},{
				protocol: "https",
				hostname: "www.raisedrightpets.com",
				port: "",
				pathname: "/**"
			}
		]
	}
};

export default nextConfig;
