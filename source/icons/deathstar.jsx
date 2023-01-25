import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function DeathstarIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};