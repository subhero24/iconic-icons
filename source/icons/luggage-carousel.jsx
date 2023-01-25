import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function LuggageCarouselIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};