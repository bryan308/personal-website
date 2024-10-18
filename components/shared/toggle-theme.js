"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
	const { setTheme, theme } = useTheme()
	const isLight = theme === "light"

	return (
		<Button
			variant="link"
			size="icon"
			onClick={() => setTheme(isLight ? "dark" : "light")}
		>
			{isLight ? (
				<SunIcon className="text-cyan-200 md:text-foreground size-12 md:size-5 transition-transform" />
			) : (
				<MoonIcon className="text-cyan-200 md:text-foreground size-12 md:size-5 transition-transform" />
			)}
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
