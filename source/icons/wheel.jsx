import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function WheelIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};