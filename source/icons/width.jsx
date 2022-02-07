import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function WidthIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};