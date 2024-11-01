import Image from "next/image"

export default function Home() {
	return (
		<div class="relative container h-screen mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
			<div className="absolute -top-[40rem] left-1/2 transform -translate-x-1/2 h-[824px] w-[860px] bg-[rgba(57,233,242,0.6)] rounded-full blur-[120px] flex-none z-10" />
			<div className="absolute -top-[40rem] left-1/2 transform -translate-x-1/2 h-[1224px] w-[1160px] bg-[rgba(57,242,66,0.4)] rounded-full blur-[120px] flex-none -z-10" />
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
	)
}
