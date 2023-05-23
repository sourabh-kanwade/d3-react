export const Background = ({ strokeWidth, radius }: { strokeWidth: number; radius: number }) => {
	return (
		<>
			<circle r={radius} fill="yellow" stroke="black" strokeWidth={strokeWidth}></circle>
		</>
	);
};

