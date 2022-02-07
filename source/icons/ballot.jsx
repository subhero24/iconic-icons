import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BallotIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};