import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"

function AboutPage() {
	return (
		<div className="min-h-screen p-4 md:p-12 mt-16">
			<h1 className="uppercase text-center">About Me</h1>
			<div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-12">
				<div className="mt-4 lg:mt-0">
					<h2 className="uppercase font-bold text-center lg:text-left">
						How are you interested in me?
					</h2>
					<p>I’m currently a college student pursuing I.T.</p>
					<p>
						I’m a tech guy, but not that good at programming but I am doing my best. Naturally, I
						love to experience new things and learn them.
					</p>
					<p>I have other skills like singing, and primarily I am good at it.</p>
				</div>
				<div className="flex items-center justify-center h-full w-2/4">
					<Image
						src="/images/me.jpg"
						alt="me"
						width={384}
						height={384}
						className="size-60 rounded-xl"
					/>
				</div>
			</div>
			<div className="mt-12">
				<h2 className="uppercase font-bold text-center lg:text-left">Information</h2>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
					<GridItem className="md:border-r border-b ">Location</GridItem>
					<GridItem className="border-b">Abilities</GridItem>
					<GridItem className="md:border-r lg:border-r-0 lg:border-l border-b">
						Contact Number
					</GridItem>
					<GridItem className="border-b lg:border-b-0 lg:border-r">Email</GridItem>
					<GridItem className="border-b md:border-b-0 md:border-r lg:border-r-0">
						Strengths and Weaknesses
					</GridItem>
					<GridItem className="lg:border-l">Strengths and Weaknesses</GridItem>
				</div>
			</div>
			<div className="mt-12 p-12 border-t-2">
				<h1 className="text-8xl text-center">Thank You for Visiting</h1>
			</div>
		</div>
	)
}

export default AboutPage

export const metadata = {
	title: "About Page",
	description: "How are you interested in me?",
}

const GridItem = ({ className, children }) => {
	return (
		<div
			className={cn(
				"h-[200px] w-auto flex items-center justify-center border-foreground",
				className
			)}
		>
			{children}
		</div>
	)
}
