import { Bricolage_Grotesque, Montserrat } from "next/font/google"

import "./globals.css"

import Providers from "@/components/shared/theme-provider"
import FloatingNav from "@/components/shared/nav"
import { cn } from "@/lib/utils"
// import LenisProvider from "@/components/shared/lenis-provider"

// for page titles and headers
const header = Bricolage_Grotesque({
	variable: "--header",
	// weight: ["400", "700"],
	subsets: ["latin"],
})

// default font for body text
const montserrat = Montserrat({
	variable: "--font-montserrat",
	weight: ["400", "700"],
	subsets: ["latin"],
})

export const metadata = {
	title: "Rainiel Sevilla",
	description: "Rainiel Sevilla's Portfolio",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={cn("relative antialiased", montserrat.className, header.variable)}>
				{/* <LenisProvider> */}
					<Providers>
						<div
							className="absolute top-0 inset-0 -z-10 opacity-5"
							style={{
								backgroundImage: "url('/images/noise.png')",
								backgroundRepeat: "repeat",
							}}
						/>
						<FloatingNav />
						{children}
					</Providers>
				{/* </LenisProvider> */}
			</body>
		</html>
	)
}
