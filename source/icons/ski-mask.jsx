import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SkiMaskIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};