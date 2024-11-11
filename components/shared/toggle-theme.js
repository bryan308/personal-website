"use client"

import { useEffect, useState } from "react"
import { LoaderIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"

export function ModeToggle() {
	const { setTheme, theme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return <LoaderIcon className="text-muted-foreground w-12 h-12 md:w-5 md:h-5 animate-spin" />
	}

	const isLight = theme === "light"

	return (
		<Button
			variant="link"
			size="icon"
			className="text-foreground"
			onClick={() => setTheme(isLight ? "dark" : "light")}
		>
			<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
