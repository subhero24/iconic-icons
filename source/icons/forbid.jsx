import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ForbidIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};