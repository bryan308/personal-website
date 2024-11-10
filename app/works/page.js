import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"

function WorksPage() {
	return (
		<div className="relative min-h-screen p-4 md:p-12 mt-16">
			<h1 className="mb-4">WORKS</h1>
			<div>
				<h2>My works from ITWST02</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mt-8">
					<Card
						title="Laboratory 1"
						description="I create a student directory table to display information about students using HTML tables and apply basic styling using CSS"
						image="/lab1.png"
					/>
					<Card
						title="Laboratory 2"
						description="Developed a responsive web page with interactive elements using JavaScript and CSS."
						image="/lab2.png"
					/>
					<Card
						title="Laboratory 3"
						description="Developed a responsive web page with interactive elements using JavaScript and CSS."
						image="/lab3.png"
					/>
					<Card
						title="Laboratory 4"
						description="Developed a responsive web page with interactive elements using JavaScript and CSS."
						image="/lab4.png"
					/>
					<Card
						title="Laboratory 5"
						description="Developed a responsive web page with interactive elements using JavaScript and CSS."
						image="/lab5.png"
					/>
				</div>
			</div>
		</div>
	)
}

export default WorksPage

const Card = ({ title, image = "/images/sample.png", description, className, ...props }) => {
	return (
		<div
			className={cn("flex flex-col justify-start items-start p-4 max-w-lg h-full", className)}
			{...props}
		>
			<div className="mb-4">
				<Image
					src={image}
					alt={title}
					width={1800}
					height={1016}
					className="rounded-lg"
				/>
			</div>
			<h4>{title}</h4>
			<p className="mt-4">{description}</p>
		</div>
	)
}
