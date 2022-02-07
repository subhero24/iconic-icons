import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function DrillIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};