import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function MoveIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};