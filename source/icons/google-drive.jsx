import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function GoogleDriveIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};