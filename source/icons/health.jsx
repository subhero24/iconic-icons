import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function HealthIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};