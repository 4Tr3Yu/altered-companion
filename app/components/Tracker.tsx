export default function Tracker() {
	return (
		<div className="tracker bg-gradient-to-b from-green-600 to-green-400 w-full flex flex-col justify-center items-center p-1">
			<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center">-</span>
			<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center mb-2">+</span>
			<span className="font-bold text-4xl mt-4">20</span>
		</div>
	)
}