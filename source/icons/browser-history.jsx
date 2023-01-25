import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BrowserHistoryIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};