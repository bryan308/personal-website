"use client"

import { Profile } from "@/components/shared/about/profile"
import { motion } from "motion/react"
import Image from "next/image"

export default function Home() {
	return (
		<>
			<div className="relative flex items-center justify-center h-screen overflow-hidden">
				<div className="-z-10 absolute top-28 flex items-center justify-center w-full h-full overflow-hidden rounded-tl-[20rem] rounded-tr-[20rem] blur-3xl">
					<motion.div
						initial={{ opacity: 0, bottom: "-30rem" }}
						animate={{ opacity: 1, bottom: "-15rem" }}
						transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
						className="absolute w-[120%] h-[800px] -z-20 rounded-[200px] blur-[122px] bg-gradient-to-t from-[#021d62] to-[#18db71]"
					/>
					<motion.div
						initial={{ opacity: 0, bottom: "-30rem" }}
						animate={{ opacity: 1, bottom: "-15rem" }}
						transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
						className="absolute w-full max-w-4xl h-[400px] -z-10 rounded-3xl blur-[122px] bg-[#128ba3]"
					/>
				</div>
				<div className="z-10 flex flex-col-reverse items-center justify-center md:justify-evenly gap-8 h-full mx-6 my-28 md:mx-auto lg:flex-row max-w-7xl">
					<div className="p-4 text-center lg:text-left md:p-0">
						<motion.h1
							initial={{ opacity: 0, y: "20%", filter: "blur(12px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
							transition={{ ease: "easeInOut", duration: 0.8, delay: 0.2 }}
							className="text-5xl font-bold uppercase tracking-tight scroll-m-20 lg:text-7xl"
						>
							Welcome People
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: "20%", filter: "blur(12px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
							transition={{ ease: "easeInOut", duration: 0.8, delay: 0.4 }}
							className="mt-4 text-lg max-w-xl"
						>
							I continually enhance my talents and abilities through diverse experiences, developing
							a unique perspective and skill set.
						</motion.p>
					</div>
					<motion.div
						initial={{ opacity: 0, y: "10%", filter: "blur(10px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
						transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
						className="flex flex-col items-center"
					>
						<Image
							className="size-52 lg:size-60 rounded-full outline-4 outline outline-primary/20"
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
