"use client"

import { motion } from "motion/react"
import Image from "next/image"

export default function Home() {
	return (
		<>
			<div className="relative flex items-center justify-center h-screen overflow-hidden">
				<div className="-z-10 absolute top-28 flex items-center justify-center w-full h-full overflow-hidden rounded-tl-[20rem] rounded-tr-[20rem] blur-3xl">
					<div className="absolute w-[120%] h-[800px] -bottom-60 -z-10 rounded-[200px] blur-[122px] bg-gradient-to-t from-[#021d62] to-[#18db71]" />
					<div className="absolute w-full max-w-4xl h-[400px] -bottom-[42rem] -z-10 rounded-3xl blur-[122px] bg-[#0f6b7e]" />
				</div>
				<div className="z-10 flex flex-col-reverse items-center justify-center md:justify-evenly gap-8 h-full mx-6 my-28 md:mx-auto lg:flex-row max-w-7xl">
					<div className="p-4 text-center lg:text-left md:p-0">
						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.25, delay: 0.2 }}
							className="text-5xl font-bold uppercase tracking-tight scroll-m-20 lg:text-7xl"
						>
							Welcome People
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.25, delay: 0.4 }}
							className="mt-4 text-lg max-w-xl"
						>
							You are invited you to explore my talents and abilities, which I continually enhance
							throughout my journey. Each experience has contributed to my growth, allowing me to
							develop a diverse skill set and a unique perspective.
						</motion.p>
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.25, delay: 0.6 }}
						className="flex flex-col items-center"
					>
						<Image
							className="size-52 lg:size-60 rounded-full"
							src="/images/me.jpg"
							alt="picture of me"
							width={384}
							height={384}
							priority
						/>
					</motion.div>
				</div>
			</div>
		</>
	)
}
