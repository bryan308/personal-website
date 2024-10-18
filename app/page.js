export default function Home() {
	return (
		<div class="container h-screen mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
			<div className="text-center lg:text-left">
				<h1 class="scroll-m-20 text-4xl font-bold tracking-tight lg:text-7xl uppercase">
					Welcome People
				</h1>
				<p className="text-lg">Feel free to explore my creation through out my journey</p>
			</div>
			<div class="flex flex-col items-center">
				<div className="size-52 lg:size-80 rounded-full" />
			</div>
		</div>
	)
}
