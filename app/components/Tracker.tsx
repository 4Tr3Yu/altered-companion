import type React from 'react';
interface TrackerProps {
	id: string;
	value: number;
	d: string;
	color: string;
}
const Tracker: React.FC<TrackerProps> = ({ value, d, color }) => {
	return (
		<div className={`tracker bg-gradient-to-${d} from-${color}-700 to-${color}-500 w-full flex flex-col justify-center items-center p-1`}>
			{d === 't' && <span className="font-bold text-4xl mb-4">{value}</span>}
			<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center">-</span>
			<span className="font-bold text-4xl flex-auto border w-full border-white/45 flex items-center justify-center mb-2">+</span>
			{d === 'b' && <span className="font-bold text-4xl mt-4">{value}</span>}
			
		</div>
	)
}
export default Tracker;