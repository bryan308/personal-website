"use client"

import { cn } from "@/lib/utils"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

import { Menu, X } from "lucide-react"
import logo from "@/public/images/logo.png"

import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "./toggle-theme"
import { Button } from "../ui/button"

export default function FloatingNav() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const menuRef = useRef(null)

	const toggleMobileMenu = () => {
		if (isMobileMenuOpen) {
			closeMobileMenu()
		} else {
			setIsMobileMenuOpen(true)
		}
	}

	const closeMobileMenu = () => {
		if (menuRef.current) {
			menuRef.current.style.animation = "slideUp 0.3s ease-out forwards"
			setTimeout(() => {
				setIsMobileMenuOpen(false)
			}, 300)
		}
	}
	useEffect(() => {
		if (isMobileMenuOpen && menuRef.current) {
			menuRef.current.style.animation = "slideDown 0.3s ease-out forwards"
		}
	}, [isMobileMenuOpen, menuRef])

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/skills", label: "Skills" },
		{ href: "/about", label: "About" },
		{ href: "/contact", label: "Contact" },
	]

	return (
		<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-xl transition-opacity duration-300">
			<div
				className={cn(
					"backdrop-saturate-[30] backdrop-blur-[24px]",
					"bg-white/80 dark:bg-[#0a0a0a]/80",
					"rounded-full shadow border border-foreground/20"
				)}
			>
				<div className="container mx-auto px-3 py-2">
					<div className="flex items-center justify-between">
						<Button
							className="text-2xl font-bold rounded-full size-8 p-0"
							variant="link"
							onClick={closeMobileMenu}
							asChild
						>
							<Link href="/">
								<Image
									// className="mx-2"
									src={logo}
									alt="logo"
									width={32}
									height={32}
									priority
									quality={100}
								/>
							</Link>
						</Button>
						<div className="hidden sm:flex items-center gap-4">
							{navLinks.map((link) => (
								<NavLink
									key={link.href}
									href={link.href}
								>
									{link.label}
								</NavLink>
							))}
						</div>
						<div className="hidden sm:block">
							<ModeToggle />
						</div>
						<button
							className="sm:hidden text-foreground p-2"
							onClick={toggleMobileMenu}
							aria-label="Toggle mobile menu"
							aria-expanded={isMobileMenuOpen}
						>
							{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div
					ref={menuRef}
					className="w-full sm:hidden mt-4 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-saturate-[30] backdrop-blur-[24px] rounded-3xl shadow border border-foreground/20 overflow-hidden"
				>
					<div className="flex flex-col items-center text-center space-y-4 p-4 text-xl">
						{navLinks.map((link) => (
							<NavLink
								key={link.href}
								href={link.href}
								className="w-full"
								onClick={closeMobileMenu}
							>
								{link.label}
							</NavLink>
						))}
						<ModeToggle />
					</div>
				</div>
			)}
		</nav>
	)
}

function NavLink({ href, children, onClick, className }) {
	const pathname = usePathname()

	function currentPath() {
		let style = "text-foreground"

		if (pathname === href) {
			style = "text-primary"
		}

		return style
	}

	return (
		<Link
			href={href}
			className={cn("hover:text-primary/90 transition-colors lowercase", currentPath(), className)}
			onClick={onClick}
		>
			{children}
		</Link>
	)
}
