import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function CircleIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};