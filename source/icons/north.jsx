import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function NorthIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};