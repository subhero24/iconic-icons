import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SearchAreaIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};