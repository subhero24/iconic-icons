import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function FullscreenIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};