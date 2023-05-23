import { csv, max, scaleBand, scaleLinear } from 'd3';
import { useEffect, useState } from 'react';
const height = 800;
const width = 800;
const csvURL = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';
export const BarChart = () => {
	const [data, setData] = useState<any[]>([]);
	useEffect(() => {
		const row = (d) => {
			d.Population = +d['2020'];
			return d;
		};
		csv(csvURL, row).then((data) => {
			setData(data.slice(0, 10));
		});
	}, []);
	if (data.length === 0) {
		return <pre>Loading...</pre>;
	}

	const yScale = scaleLinear()
		.domain([0, max(data, (d) => d.Population)])
		.range([0, height]);
	const xScale = scaleBand()
		.domain(data.map((d) => d.Country))
		.range([0, height])
		.padding(0.1);
	return (
		<svg width={width} height={height}>
			{data.map((d) => (
				<rect key={d.Country} x={xScale(d.Country)} width={xScale.bandwidth()} height={yScale(d.Population)} />
			))}
		</svg>
	);
};
// y={yScale(d.Country)}

