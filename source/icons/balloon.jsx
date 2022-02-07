import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BalloonIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};