import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PlusMinusIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};