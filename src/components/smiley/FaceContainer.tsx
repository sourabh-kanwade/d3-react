interface FaceContainerProps {
	width: number;
	height: number;
	centerX: number;
	centerY: number;
	children: JSX.Element | JSX.Element[];
}
export const FaceContainer = ({ children, centerX, centerY, width, height }: FaceContainerProps) => {
	return (
		<svg width={width} height={height}>
			<g transform={`translate(${centerX},${centerY})`}>{children}</g>
		</svg>
	);
};

