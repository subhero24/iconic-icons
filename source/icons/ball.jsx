import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BallIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};