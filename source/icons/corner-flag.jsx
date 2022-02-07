import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function CornerFlagIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};