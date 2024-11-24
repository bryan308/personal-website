import React from "react"

import Section from "@/components/shared/section"
import Subheader from "@/components/ui/subheader"
import Header from "@/components/ui/page-header"
import GradientMockup from "@/components/ui/gradient-mockup"
import Form from "@/components/shared/contact/form"
import SocialButtons from "@/components/shared/contact/social-buttons"

function ContactPage() {
	return (
		<Section>
			<div className="mb-20 md:mb-40">
				<Header>Contact Me</Header>
				<Form />
			</div>
			<GradientMockup src="/images/noisy-grad3.jpg" />
			<div className="my-20 md:my-40">
				<Subheader className="text-center">You can also visit my social media</Subheader>
				<SocialButtons />
			</div>
		</Section>
	)
}

export default ContactPage

export const metadata = {
	title: "Contact Me",
	description: "How are you interested in me?",
}
