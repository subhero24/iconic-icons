import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function CelsiusIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};