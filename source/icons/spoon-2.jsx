import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Spoon2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};