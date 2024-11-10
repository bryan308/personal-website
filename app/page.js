import Image from "next/image"

export default function Home() {
	return (
		<>
			<div className="relative flex items-center justify-center h-screen">
				<div className="absolute flex items-center justify-center w-full h-full overflow-hidden">
					<div className="absolute w-[120%] h-[800px] -bottom-60 -z-10 rounded-[200px] blur-[122px] bg-gradient-to-t from-[#021d62] to-[#18db71]" />
					<div className="absolute w-full max-w-4xl h-[400px] -bottom-[42rem] -z-10 rounded-3xl blur-[122px] bg-[#0f6b7e]" />
				</div>
				<div
					className="absolute inset-0 -z-10 opacity-25"
					style={{
						backgroundImage: "url('/images/noise.webp')",
						backgroundRepeat: "repeat",
					}}
				/>
				<div className="flex flex-col-reverse items-center justify-center md:justify-evenly gap-8 h-full mx-6 my-28 md:mx-auto lg:flex-row max-w-7xl rounded-tl-3xl rounded-tr-3xl bg-cover bg-center">
					<div className="p-4 text-center lg:text-left md:p-0">
						<h1 className="text-5xl font-semibold uppercase tracking-tight scroll-m-20 lg:text-7xl">
							Welcome People
						</h1>
						<p className="mt-4 text-lg max-w-xl">
							You are invited you to explore my talents and abilities, which I continually enhance
							throughout my journey. Each experience has contributed to my growth, allowing me to
							develop a diverse skill set and a unique perspective.
						</p>
					</div>
					<div className="flex flex-col items-center">
						<Image
							className="size-52 lg:size-60 rounded-xl"
							src="/images/me.jpg"
							alt="me"
							width={384}
							height={384}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
