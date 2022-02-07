import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PartyIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};