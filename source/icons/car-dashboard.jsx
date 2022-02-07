import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function CarDashboardIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};