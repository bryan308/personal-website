import { cn } from "@/lib/utils"
import React from "react"

const Section = ({ children, className, ...props }) => {
	return (
		<section
			aria-label="section"
			className={cn("max-w-5xl mx-auto min-h-screen p-4 md:p-12 mt-16", className)}
			{...props}
		>
			{children}
		</section>
	)
}

export default Section
