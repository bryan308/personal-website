import GradientMockup from "@/components/ui/gradient-mockup"
import Section from "@/components/shared/section"
import { Lamp } from "@/components/shared/skills/lamp"
import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"

function AboutPage() {
	return (
		<>
			<Section>
				<h1 className="text-center">About Me</h1>
				<div className="flex flex-col-reverse lg:flex-row gap-8 mt-12">
					<div className="mt-4 lg:mt-0">
						<h2 className="font-semibold text-center lg:text-left mb-4">
							How are you interested in me?
						</h2>
						<p className="max-w-prose">
							I’m currently a college student pursuing I.T. I’m a tech guy, but not that good at
							programming but I am doing my best.
						</p>
						<p className="max-w-prose mt-4">
							Naturally, I love to experience new things and learn them. I have other skills like
							singing, and primarily I am good at it.
						</p>
					</div>
					<div className="flex items-center justify-center h-full">
						<Image
							src="/images/me.jpg"
							alt="me"
							width={384}
							height={384}
							className="size-52 lg:size-60 rounded-xl shadow-lg"
						/>
					</div>
				</div>
				<GradientMockup src="/images/noisy-grad1.jpg" />
				<div className="mt-12">
					<h2 className="font-semibold text-center">Information</h2>
					<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
						<GridItem className="md:border-r border-b ">
							<h4>Location</h4>
							<p>Santa Rosa N. E.</p>
						</GridItem>
						<GridItem className="border-b">
							<h4>Email</h4>
							<p>rainielsevilla27@gmail.com</p>
						</GridItem>
						<GridItem className="md:border-r lg:border-r-0 lg:border-l border-b">
							<h4>Contact</h4>
							<p>09169733670</p>
						</GridItem>
						<GridItem className="border-b lg:border-b-0 lg:border-r">
							<h4>Strength</h4>
							<p>Have a wide patience</p>
						</GridItem>
						<GridItem className="border-b md:border-b-0 md:border-r lg:border-r-0">
							<h4>Abilities</h4>
							<p>Multitask, Communicate Well, Can blend to a group</p>
						</GridItem>
						<GridItem className="lg:border-l">
							<h4>Weakness</h4>
							{/* <p>Can distract easily</p> */}
							<p>Lambing & Kiss</p>
						</GridItem>
					</div>
				</div>
			</Section>
			<Lamp />
			{/* <div className="mt-12">
			</div> */}
		</>
	)
}

export default AboutPage

export const metadata = {
	title: "About Me",
	description: "How are you interested in me?",
}

const GridItem = ({ className, children }) => {
	return (
		<div
			className={cn(
				"h-[200px] w-auto flex items-center justify-center flex-col border-primary/30 text-center p-4",
				className
			)}
		>
			{children}
		</div>
	)
}
