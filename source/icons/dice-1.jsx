import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Dice1Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};