import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function CarDoorIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};