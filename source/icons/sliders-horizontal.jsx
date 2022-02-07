import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SlidersHorizontalIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};