import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function LinkedIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};