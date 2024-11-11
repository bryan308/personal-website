import React from "react"

function ContactPage() {
	return (
		<>
			<h1 className="text-center mt-20">Contact Me</h1>
			<div className="flex justify-center">
				<table className="border border-black border-opacity-5 w-1/2 ">
					<thead>
						<tr className="border-b border-black">
							<th className="font-bold p-5">PLATFORM</th>
							<th className="font-bold p-2">UserName</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-black">
							<td className="font-bold p-2 text-center border-r border-black ">Facebook</td>
							<td className="p-2 text-center border-l">Rainiel Sevilla</td>
						</tr>
						<tr className="border-b border-black">
							<td className="font-bold p-2 text-center border-r border-black">Instagram</td>
							<td className="p-2 text-center">Rainiel Sevilla</td>
						</tr>
						<tr className="border-b border-black">
							<td className="font-bold p-2 text-center border-r border-black ">Telegram</td>
							<td className="p-2 text-center ">Kazama</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default ContactPage
