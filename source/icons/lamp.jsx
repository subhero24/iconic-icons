import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function LampIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};