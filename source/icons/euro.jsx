import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function EuroIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};