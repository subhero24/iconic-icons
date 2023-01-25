import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function FourGIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};