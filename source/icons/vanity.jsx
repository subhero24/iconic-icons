import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function VanityIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};