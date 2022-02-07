import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function LinkedinIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};