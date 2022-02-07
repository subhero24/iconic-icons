import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function CompassIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};