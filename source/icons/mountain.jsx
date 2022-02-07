import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function MountainIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};