import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function KnifeIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};