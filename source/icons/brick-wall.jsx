import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BrickWallIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};