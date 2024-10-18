import localFont from "next/font/local"
import "./globals.css"
import { Header } from "@/components/shared/header"
import Providers from "@/components/shared/theme-provider"

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

export const metadata = {
	title: "Rainiel Sevilla",
	description: "Rainiel Sevilla's Portfolio",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	)
}
