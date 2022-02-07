import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ScooterIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};