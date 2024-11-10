import { Bricolage_Grotesque, Cinzel_Decorative, Montserrat } from "next/font/google"

import "./globals.css"

import Providers from "@/components/shared/theme-provider"
import FloatingNav from "@/components/shared/nav"
import { cn } from "@/lib/utils"

// for page titles and headers
const cinzelDecorative = Cinzel_Decorative({
	variable: "--font-cinzel-decorative",
	weight: ["400", "700", "900"],
	subsets: ["latin"],
})

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
			<body
				className={cn(
					"antialiased",
					montserrat.className,
					cinzelDecorative.variable,
					header.variable
				)}
			>
				<Providers>
					<FloatingNav />
					{children}
				</Providers>
			</body>
		</html>
	)
}
