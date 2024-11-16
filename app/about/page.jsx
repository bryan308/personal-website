import React from "react"

import Image from "next/image"
import GradientMockup from "@/components/shared/about/gradient-mockup"
import GridItem from "@/components/shared/about/grid-item"
import Section from "@/components/shared/section"
import { Lamp } from "@/components/shared/about/lamp"
import Header from "@/components/ui/page-header"
import Subheader from "@/components/ui/subheader"

function AboutPage() {
	const gridItems = [
		{ title: "Location", content: "Santa Rosa N. E.", className: "md:border-r border-b" },
		{ title: "Email", content: "rainielsevilla27@gmail.com", className: "border-b" },
		{
			title: "Contact",
			content: "09169733670",
			className: "md:border-r lg:border-r-0 lg:border-l border-b",
		},
		{
			title: "Strength",
			content: "Have a wide patience",
			className: "border-b lg:border-b-0 lg:border-r",
		},
		{
			title: "Abilities",
			content: "Multitask, Communicate Well, Can blend to a group",
			className: "border-b md:border-b-0 md:border-r lg:border-r-0",
		},
		{ title: "Weakness", content: "Can distract easily", className: "lg:border-l" },
	]

	return (
		<>
			<Section>
				<Header>About Me</Header>
				<div className="flex flex-col-reverse lg:flex-row gap-8 mt-12">
					<div className="mt-4 lg:mt-0">
						<Subheader delay={0.25} className="font-semibold text-center lg:text-left mb-4">
							How are you interested in me?
						</Subheader>
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
						{gridItems.map((item, index) => (
							<GridItem
								key={index}
								className={item.className}
							>
								<h4>{item.title}</h4>
								<p>{item.content}</p>
							</GridItem>
						))}
					</div>
				</div>
			</Section>
			<Lamp />
		</>
	)
}

export default AboutPage

export const metadata = {
	title: "About Me",
	description: "How are you interested in me?",
}
