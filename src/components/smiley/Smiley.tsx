import { FaceContainer } from './FaceContainer';
import { Background } from './Background';
import { Eyes } from './Eyes';
import { Mouth } from './Mouth';

interface SmileyProps {
	width: number;
	strokeWidth: number;
}
export const Smiley = ({ width, strokeWidth }: SmileyProps) => {
	const centerX = width / 2;
	const radius = centerX - strokeWidth;
	const eyeRadius = width / 12.5;
	const height = width;
	const centerY = height / 2;
	const eyeOffsetX = radius / 2;
	const eyeOffsetY = radius / 3;
	const mouthRadius = width / 4;
	const mouthWidth = width / 20;
	return (
		<FaceContainer width={width} height={height} centerX={centerX} centerY={centerY}>
			<Background radius={radius} strokeWidth={strokeWidth} />
			<Eyes eyeRadius={eyeRadius} eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} />
			<Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
		</FaceContainer>
	);
};

