import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function FaceStraightIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};