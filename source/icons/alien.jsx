import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function AlienIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};