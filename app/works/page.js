import React from "react"
import { cn } from "@/lib/utils"

import Image from "next/image"
import Section from "@/components/shared/section"
import GradientMockup from "@/components/ui/gradient-mockup"

function WorksPage() {
	return (
		<Section className="relative">
			<h1 className="mb-4 text-center">Works</h1>
			<div>
				<h2 className="text-center">My works from ITWST02</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center mt-8">
					<Card
						title="Laboratory 1"
						description="I create a student directory table to display information about students using HTML tables and apply basic styling using CSS"
						image="/images/laboratories/lab1.png"
					/>
					<Card
						title="Laboratory 2"
						description="Developed a responsive web page with interactive elements using JavaScript and CSS."
						image="/images/laboratories/lab2.png"
					/>
					<Card
						title="Laboratory 3"
						description="Developed a responsive web page with interactive elements using JavaScript and CSS."
						image="/images/laboratories/lab3.png"
					/>
					<Card
						title="Laboratory 4"
						description="Developed a responsive web page with interactive elements using JavaScript and CSS."
						image="/images/laboratories/lab4.png"
					/>
					<Card
						title="Laboratory 5"
						description="Developed a responsive web page with interactive elements using JavaScript and CSS."
						image="/images/laboratories/lab5.png"
					/>
				</div>
			</div>
			<GradientMockup src="/images/noisy-grad2.jpg" />
		</Section>
	)
}

export default WorksPage

const Card = ({ title, image = "/images/sample.png", description, className, ...props }) => {
	return (
		<div
			className={cn(
				"flex flex-col justify-start items-start max-w-lg h-full rounded-xl overflow-hidden",
				className
			)}
			{...props}
		>
			<div>
				<Image
					src={image}
					alt={title}
					width={1800}
					height={1016}
					// className="rounded-lg"
				/>
			</div>
			<div className="p-4">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	)
}
