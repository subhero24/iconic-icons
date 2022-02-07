import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function TrashCanIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};