import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function RssFeedIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};