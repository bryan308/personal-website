"use client"

import Lenis from "lenis"
import { cn } from "@/lib/utils"
import { useRef, useEffect } from "react"

const Section = ({ children, className, ...props }) => {
	const container = useRef(null)

	useEffect(() => {
		const lenis = new Lenis()

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	})

	return (
		<section
			ref={container}
			aria-label="section"
			className={cn("max-w-5xl mx-auto min-h-screen px-6 lg:px-0 pt-24", className)}
			{...props}
		>
			{children}
		</section>
	)
}

export default Section
