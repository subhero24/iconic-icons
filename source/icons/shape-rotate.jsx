import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ShapeRotateIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};