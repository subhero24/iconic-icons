import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BooksIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};