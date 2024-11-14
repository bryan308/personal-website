"use client"

import { motion } from "motion/react"
import { Trophy, Flame, Gamepad } from "lucide-react"
import { useEffect, useState } from "react"

import { Card, CardContent } from "@/components/ui/card"

const StatCard = ({ title, value, icon, delay }) => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const timer = setTimeout(() => {
			if (count < value) {
				setCount(Math.min(count + Math.ceil(value / 100), value))
			}
		}, 20)

		return () => clearTimeout(timer)
	}, [count, value])

	return (
		<motion.div
			initial={{ opacity: 0, y: -40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ amount: 0.8 }}
			transition={{
				delay: delay,
				duration: 0.8,
				ease: "easeInOut",
				repeat: 0,
				reapetType: "loop",
			}}
		>
			<Card className="border-primary">
				<CardContent className="p-6">
					<p className="text-3xl font-bold text-center">{count.toLocaleString()}</p>
					<div className="flex items-center justify-center mt-2">
						<div className="mr-3">{icon}</div>
						<h3 className="text-lg font-semibold">{title}</h3>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	)
}

export default function GameStats() {
	const stats = [
		{ title: "Total Games", value: 9941, icon: <Gamepad className="h-6 w-6 text-primary" /> },
		{ title: "MVP's", value: 1584, icon: <Trophy className="h-6 w-6 text-yellow-400" /> },
		{ title: "Winstreak", value: 15, icon: <Flame className="h-6 w-6 text-red-500" /> },
	]

	return (
		<div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
			<motion.h2
				className="text-center mb-12"
				initial={{ opacity: 0, y: -40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Statistics of My Game
			</motion.h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{stats.map((stat, index) => (
					<StatCard
						key={index}
						title={stat.title}
						value={stat.value}
						icon={stat.icon}
						delay={index * 0.2}
					/>
				))}
			</div>
		</div>
	)
}
