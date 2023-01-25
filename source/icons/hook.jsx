import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function HookIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};