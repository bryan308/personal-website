import { cn } from "@/lib/utils"

const GridItem = ({ className, children }) => {
	return (
		<div
			className={cn(
				"h-[200px] w-auto flex items-center justify-center flex-col border-primary/30 text-center p-4",
				className
			)}
		>
			{children}
		</div>
	)
}

export default GridItem
