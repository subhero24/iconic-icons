import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ActivityIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};