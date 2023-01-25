import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function WindPowerIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};