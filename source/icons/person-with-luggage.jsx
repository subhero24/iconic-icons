import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PersonWithLuggageIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};