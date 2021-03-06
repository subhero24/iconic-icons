import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function TiktokIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};