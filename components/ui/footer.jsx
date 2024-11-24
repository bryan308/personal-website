import React from "react"
import Link from "next/link"

export const Footer = () => {
	return (
		<footer className="p-12">
			<p className="text-center">
				©{new Date().getFullYear()} <span className="font-header">Rainiel Sevilla</span>. All rights
				reserved.
			</p>
			<p className="text-center text-sm">
				Developed by{" "}
				<Link
					href="https://www.facebook.com/share/1W7pWKEmmg/"
					className="text-primary hover:text-primary/90"
					target="_blank"
					rel="noopener noreferrer"
				>
					Rainiel Sevilla
				</Link>{" "}
				and{" "}
				<Link
					href="https://cedricc.vercel.app"
					className="text-primary hover:text-primary/90"
					target="_blank"
					rel="noopener noreferrer"
				>
					Cedric Angulo
				</Link>
			</p>
		</footer>
	)
}
