import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PiggybankIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};