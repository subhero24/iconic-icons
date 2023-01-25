import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BirdIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};