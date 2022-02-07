import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function DogecoinIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};