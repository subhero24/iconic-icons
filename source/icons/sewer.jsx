import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SewerIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};