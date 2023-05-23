import { arc } from 'd3';

interface MouthProps {
	mouthRadius: number;
	mouthWidth: number;
}
export const Mouth = ({ mouthRadius, mouthWidth }: MouthProps) => {
	const mouthArc = arc()
		.innerRadius(mouthRadius)
		.outerRadius(mouthRadius + mouthWidth)
		.startAngle(Math.PI / 2)
		.endAngle(Math.PI * (3 / 2));
	return <path d={mouthArc()}></path>;
};

