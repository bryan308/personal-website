"use client"

import { motion } from "motion/react"
import Image from "next/image"

const HeroCard = ({ heroName = "Hero", image, delay }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: "5%" }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ amount: 0.2, once: false }}
			transition={{
				delay: delay,
				duration: 0.5,
				ease: "easeInOut",
				repeat: 0,
				repeatType: "loop",
			}}
		>
			<div>
				<Image
					className="max-h-96 w-auto block mx-auto rounded-xl outline-4 outline outline-primary/20"
					src={image}
					alt={heroName}
					width={736}
					height={1308}
					quality={100}
				/>
			</div>
			<h4 className="text-center mt-4">{heroName}</h4>
		</motion.div>
	)
}

export default HeroCard
