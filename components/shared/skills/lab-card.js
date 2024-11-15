import Image from "next/image"
import { cn } from "@/lib/utils"

const LabCard = ({ title, image = "/images/sample.png", description, className, ...props }) => {
	return (
		<div
			className={cn(
				"flex flex-col justify-between items-start max-w-sm h-full rounded-xl overflow-hidden",
				className
			)}
			{...props}
		>
			<div>
				<Image
					src={image}
					alt={title}
					width={1800}
					height={1016}
				/>
			</div>
			<div className="py-4">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default LabCard
