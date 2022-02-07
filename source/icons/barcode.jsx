import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BarcodeIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};