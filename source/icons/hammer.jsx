import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function HammerIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};