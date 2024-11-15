"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"

import Link from "next/link"
import { ModeToggle } from "./toggle-theme"
import Image from "next/image"
import { cn } from "@/lib/utils"

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
					"backdrop-saturate-0 backdrop-blur",
					"bg-gradient-to-t from-primary/65 via-primary/45 to-primary/45",
					"rounded-xl shadow border border-foreground/20"
				)}
			>
				<div className="container mx-auto px-2 py-2">
					<div className="flex items-center justify-between">
						<Link
							href="/"
							className="text-2xl font-bold text-foreground"
						>
							<Image
								className="mx-2 grayscale brightness-0 dark:brightness-100 dark:grayscale-0"
								// className="mx-2 grayscale invert dark:invert-0"
								src="/images/logo.png"
								alt="logo"
								width={32}
								height={32}
								priority
								quality={100}
							/>
						</Link>
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
					className="w-fit ml-auto sm:hidden mt-2 bg-gradient-to-t from-primary/65 via-primary/45 to-primary/45 backdrop-blur-md rounded-xl shadow border border-foreground/20 overflow-hidden"
				>
					<div className="flex flex-col items-start space-y-2 pr-12 p-4 text-lg">
						{navLinks.map((link) => (
							<NavLink
								key={link.href}
								href={link.href}
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

function NavLink({ href, children, onClick }) {
	return (
		<Link
			href={href}
			className="text-foreground hover:text-foreground/90 transition-colors lowercase"
			onClick={onClick}
		>
			{children}
		</Link>
	)
}
