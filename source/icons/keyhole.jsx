import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function KeyholeIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};