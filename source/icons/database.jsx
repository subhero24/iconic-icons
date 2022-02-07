import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function DatabaseIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};