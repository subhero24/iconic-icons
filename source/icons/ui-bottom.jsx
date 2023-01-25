import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function UiBottomIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};