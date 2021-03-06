import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function AnnotationIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};