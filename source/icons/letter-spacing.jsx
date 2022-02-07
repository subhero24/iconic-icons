import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function LetterSpacingIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};