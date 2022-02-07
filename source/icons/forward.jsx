import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ForwardIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};