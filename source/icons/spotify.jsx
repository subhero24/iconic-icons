import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SpotifyIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};