import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function DnaIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};