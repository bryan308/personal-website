import React from "react"

import Section from "@/components/shared/section"
import GradientMockup from "@/components/shared/about/gradient-mockup"
import { Highlights } from "@/components/shared/skills/highlights"
import HeroCard from "@/components/shared/skills/hero-card"
import LabCard from "@/components/shared/skills/lab-card"
import GameStats from "@/components/shared/skills/stats"
import Subheader from "@/components/shared/skills/subheader"

function SkillsPage() {
	const labCards = [
		{
			title: "Laboratory 1",
			description:
				"I created a student directory table to display information about students using HTML tables and applied basic styling using CSS.",
			image: "/images/laboratories/lab1.png",
		},
		{
			title: "Laboratory 2",
			description:
				"I created a form that collects personal information from the user and stores it in a database using HTML and CSS.",
			image: "/images/laboratories/lab2.png",
		},
		{
			title: "Laboratory 3",
			description:
				"I developed an audio player with controls and designed it using CSS. I ensured that the audio player is playable in any browser and responsive on smartphones.",
			image: "/images/laboratories/lab3.png",
		},
		{
			title: "Laboratory 4",
			description:
				"I developed a video player with controls and designed it using CSS. I ensured that the video player is playable in any browser and responsive on smartphones.",
			image: "/images/laboratories/lab4.png",
		},
		{
			title: "Laboratory 5",
			description:
				"The last laboratory for the first semester midterm, this is used to calculate the area of a circle by entering the radius provided by the user.",
			image: "/images/laboratories/lab5.png",
		},
	]

	const heroCards = [
		{ heroName: "Hanabi", image: "/images/heroes/hanabi.jpg" },
		{ heroName: "Cyclops", image: "/images/heroes/cyclops.jpg" },
		{ heroName: "Bruno", image: "/images/heroes/bruno.jpg" },
		{ heroName: "Gusion", image: "/images/heroes/gusion.jpg" },
		{ heroName: "Guinevere", image: "/images/heroes/guinevere.jpg" },
		{ heroName: "Chou", image: "/images/heroes/chou.jpg" },
	]

	return (
		<Section className="relative">
			<h1 className="mb-4 text-center">Skills</h1>
			<div>
				<Subheader className="text-center">My works from ITWST02</Subheader>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 place-items-center mt-8">
					{labCards.map((lab, index) => (
						<LabCard
							key={index}
							title={lab.title}
							description={lab.description}
							image={lab.image}
						/>
					))}
				</div>
			</div>
			<GradientMockup
				className="my-40"
				src="/images/noisy-grad2.jpg"
			/>
			<div className="my-40">
				<GameStats />
			</div>
			<div className="my-20 md:my-40">
				<Subheader className="text-center">My Favorite Heroes</Subheader>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 mt-12">
					{heroCards.map((hero, index) => (
						<HeroCard
							key={index}
							heroName={hero.heroName}
							image={hero.image}
						/>
					))}
				</div>
			</div>
			<div className="pt-20 md:pt-40 pb-40 md:pb-20">
				<Subheader className="text-center">Highlights</Subheader>
				<Highlights />
			</div>
		</Section>
	)
}

export default SkillsPage

export const metadata = {
	title: "Skills",
	description:
		"Explore my skills and projects, including laboratory works, favorite heroes, and highlights.",
}