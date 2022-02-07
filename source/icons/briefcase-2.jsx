import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Briefcase2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};