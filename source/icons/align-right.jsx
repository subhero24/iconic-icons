import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function AlignRightIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};