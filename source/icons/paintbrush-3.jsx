import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Paintbrush3Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};