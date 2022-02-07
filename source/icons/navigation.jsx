import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function NavigationIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};