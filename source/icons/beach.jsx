import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BeachIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};