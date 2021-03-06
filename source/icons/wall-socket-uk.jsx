import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function WallSocketUkIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};