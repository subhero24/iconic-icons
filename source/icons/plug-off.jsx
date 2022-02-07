import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PlugOffIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};