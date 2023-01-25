import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Tree2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};