import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Headphones2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};