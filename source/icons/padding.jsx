import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PaddingIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};