import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Rows2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};