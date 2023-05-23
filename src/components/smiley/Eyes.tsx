export const Eyes = ({ eyeRadius, eyeOffsetX, eyeOffsetY }: { eyeRadius: number; eyeOffsetX: number; eyeOffsetY: number }) => {
	return (
		<>
			{' '}
			<circle r={eyeRadius} cx={-eyeOffsetX} cy={-eyeOffsetY}></circle>
			<circle r={eyeRadius} cx={eyeOffsetX} cy={-eyeOffsetY}></circle>
		</>
	);
};

