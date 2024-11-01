import localFont from "next/font/local"
import { Cinzel_Decorative } from "next/font/google"

import "./globals.css"

import Providers from "@/components/shared/theme-provider"
import FloatingNav from "@/components/shared/nav"

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
})

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
})

const cinzelDecorative = Cinzel_Decorative({
	variable: "--font-cinzel-decorative",
	weight: ["400", "700", "900"],
})

export const metadata = {
	title: "Rainiel Sevilla",
	description: "Rainiel Sevilla's Portfolio",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${cinzelDecorative.variable} antialiased`}
			>
				<Providers>
					<FloatingNav />
					{children}
				</Providers>
			</body>
		</html>
	)
}
