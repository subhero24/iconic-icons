import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function LocationIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};