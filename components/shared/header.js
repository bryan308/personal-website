import Link from "next/link"
import React from "react"
import { ModeToggle } from "./toggle-theme"

export const Header = () => {
	return (
		<>
			<div className="fixed top-0 w-full">
				<header className="container mx-auto flex items-center justify-between gap-4 p-4 text-sm font-medium text-foreground">
					<div>
						<Link href="/">
							<span className="sr-only">Home</span>
							<div className="size-6" />
							{/* <HomeIcon /> */}
						</Link>
					</div>
					<div className="items-center gap-4 text-xl hidden lg:flex">
						<Link href="/">Home</Link>
						<Link href="/works">Works</Link>
						<Link href="/contact">Contact</Link>
						<Link href="/about">About</Link>
						<ModeToggle />
					</div>
				</header>
			</div>
		</>
	)
}
