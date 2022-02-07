import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SnapchatIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};