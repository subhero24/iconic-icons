import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function RotateIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};