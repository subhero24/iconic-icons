import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BicycleIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};