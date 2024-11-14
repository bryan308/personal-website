import Image from "next/image"

const HeroCard = ({ heroName = "Hero", image }) => {
	return (
		<div>
			<div>
				<Image
					className="max-h-96 w-auto block mx-auto rounded-xl outline-4 outline outline-primary/20"
					src={image}
					alt={heroName}
					width={736}
					height={1308}
					quality={100}
				/>
			</div>
			<h4 className="text-center mt-4">{heroName}</h4>
		</div>
	)
}

export default HeroCard
