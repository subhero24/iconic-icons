import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ShieldLockIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};