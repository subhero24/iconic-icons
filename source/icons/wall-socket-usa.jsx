import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function WallSocketUsaIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};