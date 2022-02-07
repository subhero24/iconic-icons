import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function AppsIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};