import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PenIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};