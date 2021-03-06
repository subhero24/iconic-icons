import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function EyeDropperIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};