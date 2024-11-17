import { Bricolage_Grotesque, Montserrat } from "next/font/google"

import "./globals.css"

import Providers from "@/components/shared/theme-provider"
import FloatingNav from "@/components/shared/nav"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/ui/footer"

// for page titles and headers
const header = Bricolage_Grotesque({
	variable: "--header",
	subsets: ["latin"],
})

// default font for body text
const montserrat = Montserrat({
	variable: "--font-montserrat",
	weight: ["400", "700"],
	subsets: ["latin"],
})

export const metadata = {
	title: {
		template: "%s | Rainiel Sevilla",
		default: "Rainiel Sevilla",
	},
	description:
		"I continually enhance my talents and abilities through diverse experiences, developing a unique perspective and skill set.",
	openGraph: {
		title: "Rainiel Sevilla",
		description:
			"I continually enhance my talents and abilities through diverse experiences, developing a unique perspective and skill set.",
		url: "https://rainiel-sevilla.vercel.app",
		siteName: "Rainiel Sevilla",
		images: [
			{
				url: "https://rainiel-sevilla.vercel.app/og.png",
				width: 1600,
				height: 800,
				alt: "Rainiel Sevilla",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Rainiel Sevilla",
		description:
			"I continually enhance my talents and abilities through diverse experiences, developing a unique perspective and skill set.",
		images: ["https://rainiel-sevilla.vercel.app/og.png"],
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={cn("relative antialiased", montserrat.className, header.variable)}>
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
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
