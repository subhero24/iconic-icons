import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function VirgoIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};