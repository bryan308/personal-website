"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "motion/react"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { ToastProvider } from "@/components/ui/toast"

export default function Form() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		email: "",
		message: "",
	})
	const [errors, setErrors] = useState({})
	const { toast } = useToast()

	const handleChange = (e) => {
		const { id, value } = e.target
		setFormData((prev) => ({ ...prev, [id]: value }))
		setErrors((prev) => ({ ...prev, [id]: "" }))
	}

	const validateForm = () => {
		let newErrors = {}
		if (!formData.fname.trim()) newErrors.fname = "First name is required"
		if (!formData.lname.trim()) newErrors.lname = "Last name is required"
		if (!formData.email.trim()) newErrors.email = "Email is required"
		else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (validateForm()) {
			setIsSubmitting(true)
			setTimeout(() => {
				setIsSubmitting(false)
				toast({
					title: "Form submitted successfully!",
					description: "We'll get back to you soon.",
				})
				setFormData({ fname: "", lname: "", email: "", message: "" })
			}, 2000)
		}
	}

	return (
		<ToastProvider>
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
						<form
							onSubmit={handleSubmit}
							className="grid gap-4"
						>
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
									value={formData.fname}
									onChange={handleChange}
									required
								/>
								{errors.fname && <p className="text-red-500 text-sm">{errors.fname}</p>}
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
									value={formData.lname}
									onChange={handleChange}
									required
								/>
								{errors.lname && <p className="text-red-500 text-sm">{errors.lname}</p>}
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
									type="email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
								{errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
									value={formData.message}
									onChange={handleChange}
								/>
							</div>
							<Button
								type="submit"
								className="w-full"
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Submitting
									</>
								) : (
									"Submit"
								)}
							</Button>
						</form>
					</CardContent>
				</Card>
			</motion.div>
			<Toaster />
		</ToastProvider>
	)
}
