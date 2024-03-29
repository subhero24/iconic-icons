import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Tag2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};