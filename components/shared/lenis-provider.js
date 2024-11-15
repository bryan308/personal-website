"use client"

import { ReactLenis } from "lenis/react"
import { useEffect, useRef } from "react"

const LenisProvider = ({ children }) => {
	const lenisRef = useRef()

	useEffect(() => {
		function update(time) {
			lenisRef.current?.lenis?.raf(time)
			requestAnimationFrame(update)
		}

		requestAnimationFrame(update)

		return () => cancelAnimationFrame(update)
	}, [])

	return (
		<ReactLenis
			options={{ autoRaf: false }}
			ref={lenisRef}
		>
			{children}
		</ReactLenis>
	)
}

export default LenisProvider
