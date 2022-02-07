import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function TwoFingersIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};