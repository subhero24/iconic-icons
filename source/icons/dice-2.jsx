import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Dice2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};