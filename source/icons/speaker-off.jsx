import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SpeakerOffIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};