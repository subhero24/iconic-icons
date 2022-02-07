import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function DrinkIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};