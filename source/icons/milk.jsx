import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function MilkIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};