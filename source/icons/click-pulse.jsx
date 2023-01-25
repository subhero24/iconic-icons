import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ClickPulseIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};