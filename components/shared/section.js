import { cn } from "@/lib/utils"
import React from "react"

const Section = ({ children, className, ...props }) => {
	return (
		<section
			aria-label="section"
			className={cn("max-w-5xl mx-auto min-h-screen px-6 md:px-0 pt-24", className)}
			{...props}
		>
			{children}
		</section>
	)
}

export default Section
