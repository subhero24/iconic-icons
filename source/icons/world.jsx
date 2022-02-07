import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function WorldIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};