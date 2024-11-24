import React from "react"

import GradientMockup from "@/components/ui/gradient-mockup"
import GridItem from "@/components/shared/about/grid-item"
import Section from "@/components/shared/section"
import { Lamp } from "@/components/shared/about/lamp"
import Header from "@/components/ui/page-header"
import Subheader from "@/components/ui/subheader"
import { Paragraph } from "@/components/shared/about/paragraph"
import { Profile } from "@/components/shared/about/profile"

function AboutPage() {
	const gridItems = [
		{ title: "Location", content: "Santa Rosa Nueva Ecija", className: "md:border-r border-b" },
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
			content: "Multitask, Communicate well, can blend to a group",
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
						<Subheader
							delay={0.25}
							className="font-semibold text-center lg:text-left mb-4"
						>
							How are you interested in me?
						</Subheader>
						<Paragraph delay={0.25}>
							I’m currently a college student pursuing I.T. I’m a tech guy, but not that good at
							programming but I am doing my best.
						</Paragraph>
						<Paragraph
							className="mt-4"
							delay={0.5}
						>
							Naturally, I love to experience new things and learn them. I have other talent like
							singing, and primarily I am good at it.
						</Paragraph>
					</div>
					<Profile />
				</div>
				<GradientMockup delay={1} src="/images/noisy-grad1.jpg" />
				<div className="mt-12">
					<Subheader className="font-semibold text-center">Information</Subheader>
					<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
						{gridItems.map((item, index) => (
							<GridItem
								key={index}
								title={item.title}
								desc={item.content}
								delay={index * 0.25}
								className={item.className}
							/>
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
