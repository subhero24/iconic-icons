import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SquareMinusIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};