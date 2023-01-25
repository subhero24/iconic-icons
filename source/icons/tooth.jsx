import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ToothIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};