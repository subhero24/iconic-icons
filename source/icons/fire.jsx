import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function FireIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};