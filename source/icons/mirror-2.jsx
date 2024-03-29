import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Mirror2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};