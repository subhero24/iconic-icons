import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function AppleIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};