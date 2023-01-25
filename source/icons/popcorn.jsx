import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PopcornIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};