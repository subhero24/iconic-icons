import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SwitchIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};