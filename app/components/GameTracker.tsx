export default function GameTracker() {	
	const trackers = {
		player1: {
			hero: {
				expeditions: [
					{ value: 0, d:"b", color: 'green' },
					{ value: 0, d:"b", color: 'sky' },
					{ value: 0, d:"b", color: 'amber' },
				]
			},
			companion: {
				expeditions: [
					{ value: 0, d:"b", color: 'green' },
					{ value: 0, d:"b", color: 'sky' },
					{ value: 0, d:"b", color: 'amber' },
				]
			}
		},
		player2: {
			hero: {
				expeditions: [
					{ value: 0, d:"t", color: 'green' },
					{ value: 0, d:"t", color: 'sky' },
					{ value: 0, d:"t", color: 'amber' },
				]
			},
			companion: {
				expeditions: [
					{ value: 0, d:"t", color: 'green' },
					{ value: 0, d:"t", color: 'sky' },
					{ value: 0, d:"t", color: 'amber' },
				]
			}
		}	
	}

	
	return (
		<section className="min-h-full w-full flex flex-col border border-sky-900 flex-auto ">
			<div className="top-controls max-h-20 p-2 flex-auto flex justify-center border-b border-sky-900">
				<button type="button" className="bg-gradient-to-br from-sky-950 to-sky-800 font-bold capitalize border border-sky-300 rounded px-3 py-2">Reset Game</button>
			</div>
			<div className="trackers flex-auto flex flex-col">
				<div className="player-1 flex-auto flex flex-col">
					<div className="player-name p-2 flex justify-center">
						<h2 className="text-2xl font-bold">Player 1</h2>
					</div>
					<div className="expeditions flex-auto  px-2 flex gap-1">
						<div className="expedition-left flex justify-around w-full gap-1">
							<div className="tracker bg-gradient-to-b from-green-600 to-green-400 w-full flex flex-col justify-center items-center p-1">
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center">-</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center mb-2">+</span>
								<span className="font-bold text-4xl mt-4">20</span>
							</div>
							<div className="tracker bg-gradient-to-b from-sky-700 to-sky-500 w-full flex flex-col justify-center items-center p-1">
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center">-</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center mb-2">+</span>
								<span className="font-bold text-4xl mt-4">20</span>
							</div>
							<div className="tracker bg-gradient-to-b from-amber-900 to-amber-700 w-full flex flex-col justify-center items-center p-1">
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center">-</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center mb-2">+</span>
								<span className="font-bold text-4xl mt-4">20</span>
							</div>
						</div>
						<div className="spacer w-10 bg-white/45">

						</div>
						<div className="expedition-right flex justify-around w-full gap-1">
							<div className="tracker bg-gradient-to-b from-green-600 to-green-400 w-full flex flex-col justify-center items-center p-1">
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center">-</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center mb-2">+</span>
								<span className="font-bold text-4xl mt-4">20</span>
							</div>
							<div className="tracker bg-gradient-to-b from-sky-700 to-sky-500 w-full flex flex-col justify-center items-center p-1">
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center">-</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center mb-2">+</span>
								<span className="font-bold text-4xl mt-4">20</span>
							</div>
							<div className="tracker bg-gradient-to-b from-amber-900 to-amber-700 w-full flex flex-col justify-center items-center p-1">
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center">-</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center mb-2">+</span>
								<span className="font-bold text-4xl mt-4">20</span>
							</div>
						</div>
						
					</div>
				</div>
				<div className="titles flex justify-between bg-white/45 text-sky-600 py-2 px-4">
					<h2 className="text-xl text-center font-bold"> Hero </h2>
					<h2 className="text-xl text-center font-bold"> Companion </h2>
				</div>
				<div className="player-2 flex-auto flex flex-col">
					<div className="expeditions flex-auto px-2 flex gap-1">
						<div className="expedition-left flex justify-around w-full gap-1">
							<div className="tracker bg-gradient-to-t from-green-600 to-green-400 w-full flex flex-col justify-center items-center p-1">
								<span className="font-bold text-4xl mb-4">20</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center mb-2">+</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center">-</span>
							</div>
							<div className="tracker bg-gradient-to-t from-sky-700 to-sky-500 w-full flex flex-col justify-center items-center p-1">
								<span className="font-bold text-4xl mb-4">20</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center mb-2">+</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center">-</span>
							</div>
							<div className="tracker bg-gradient-to-t from-amber-900 to-amber-700 w-full flex flex-col justify-center items-center p-1">
								<span className="font-bold text-4xl mb-4">20</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center mb-2">+</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center">-</span>
							</div>
						</div>
						<div className="spacer w-10 bg-white/45">

						</div>
						<div className="expedition-right flex justify-around w-full gap-1">
							<div className="tracker bg-gradient-to-t from-green-600 to-green-400 w-full flex flex-col justify-center items-center p-1">
								<span className="font-bold text-4xl mb-4">20</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center mb-2">+</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center">-</span>
							</div>
							<div className="tracker bg-gradient-to-t from-sky-700 to-sky-500 w-full flex flex-col justify-center items-center p-1">
								<span className="font-bold text-4xl mb-4">20</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center mb-2">+</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center">-</span>
							</div>
							<div className="tracker bg-gradient-to-t from-amber-900 to-amber-700 w-full flex flex-col justify-center items-center p-1">
								<span className="font-bold text-4xl mb-4">20</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center mb-2">+</span>
								<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center">-</span>
							</div>
						</div>
						
					</div>
					<div className="player-name p-2 flex justify-center">
						<h2 className="text-2xl font-bold">Player 2</h2>
					</div>
				</div>
			</div>
		</section>
	)
}