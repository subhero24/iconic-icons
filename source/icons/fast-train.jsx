import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function FastTrainIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};