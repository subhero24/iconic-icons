import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function GolfIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};