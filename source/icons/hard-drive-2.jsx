import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function HardDrive2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};