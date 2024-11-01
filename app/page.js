// import { BackgroundGradientAnimation } from "@/components/shared/background-gradient"
import Image from "next/image"

export default function Home() {
	return (
		// <BackgroundGradientAnimation interactive="false">
		<div class="absolute container h-screen mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
			<div className="text-center lg:text-left">
				<h1 class="scroll-m-20 text-4xl font-bold tracking-tight lg:text-8xl uppercase">
					Welcome People
				</h1>
				<p className="text-lg">Feel free to explore my creation through out my journey</p>
			</div>
			<div class="flex flex-col items-center">
				<Image
					className="size-52 lg:size-80 rounded-full"
					src="/images/shadcn.jpg"
					alt="me"
					width={384}
					height={384}
				/>
			</div>
		</div>
		// </BackgroundGradientAnimation>
	)
}
