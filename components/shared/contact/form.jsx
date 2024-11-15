import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Form() {
	return (
		<Card className="mt-12 mx-auto max-w-md bg-background border-none">
			{/* <CardHeader>
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>Enter your email below to login to your account</CardDescription>
			</CardHeader> */}
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
							placeholder="Enter you message here"
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
	)
}
