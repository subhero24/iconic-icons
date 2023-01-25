import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SaltIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};