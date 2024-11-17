"use client"

import { Textarea } from "@/components/ui/textarea"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "motion/react"

export default function Form() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ amount: 0.5, once: false }}
			transition={{
				delay: 0.25,
				duration: 0.8,
				ease: "easeInOut",
				repeat: 0,
				repeatType: "loop",
			}}
		>
			<Card className="mt-12 mx-auto max-w-md bg-transparent border-none shadow-none">
				<CardContent className="pt-6">
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label
								htmlFor="fname"
								className="font-header"
							>
								First Name
							</Label>
							<Input
								id="fname"
								type="text"
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label
								htmlFor="lname"
								className="font-header"
							>
								Last Name
							</Label>
							<Input
								id="lname"
								type="text"
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label
								htmlFor="email"
								className="font-header"
							>
								Email
							</Label>
							<Input
								id="email"
								type="text"
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label
								htmlFor="message"
								className="font-header"
							>
								Feedback or Message
							</Label>
							<Textarea
								id="message"
								rows={6}
							/>
						</div>
						<Button
							type="submit"
							className="w-full"
						>
							Submit
						</Button>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	)
}
