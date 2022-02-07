import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function RainIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};