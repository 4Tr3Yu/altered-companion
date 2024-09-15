import Tracker from './Tracker'
export default function GameTracker() {	
	const trackers = {
		player1: {
			hero: {
				expeditions: [
					{ id:"p1thf", value: 0, d:"b", color: 'green' },
					{ id:"p1thi", value: 0, d:"b", color: 'sky' },
					{ id:"p1thm", value: 0, d:"b", color: 'amber' },
				]
			},
			companion: {
				expeditions: [
					{ id:"p1tcf", value: 0, d:"b", color: 'green' },
					{ id:"p1tci", value: 0, d:"b", color: 'sky' },
					{ id:"p1tcm", value: 0, d:"b", color: 'amber' },
				]
			}
		},
		player2: {
			hero: {
				expeditions: [
					{ id:"p2thf", value: 0, d:"t", color: 'green' },
					{ id:"p2thi", value: 0, d:"t", color: 'sky' },
					{ id:"p2thm", value: 0, d:"t", color: 'amber' },
				]
			},
			companion: {
				expeditions: [
					{ id:"p2tcf", value: 0, d:"t", color: 'green' },
					{ id:"p2tci", value: 0, d:"t", color: 'sky' },
					{ id:"p2tcm", value: 0, d:"t", color: 'amber' },
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
							{trackers.player1.hero.expeditions.map((tracker, ) => (
								<Tracker key={tracker.id} {...tracker} />
							))}
						</div>
						<div className="spacer w-10 bg-white/45">

						</div>
						<div className="expedition-right flex justify-around w-full gap-1">
							{trackers.player1.companion.expeditions.map((tracker, ) => (
								<Tracker key={tracker.id} {...tracker} />
							))}
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
						{trackers.player2.hero.expeditions.map((tracker, ) => (
								<Tracker key={tracker.id} {...tracker} />
							))}
						</div>
						<div className="spacer w-10 bg-white/45">

						</div>
						<div className="expedition-right flex justify-around w-full gap-1">
						{trackers.player2.companion.expeditions.map((tracker, ) => (
								<Tracker key={tracker.id} {...tracker} />
							))}
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