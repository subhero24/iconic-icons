import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PngIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};