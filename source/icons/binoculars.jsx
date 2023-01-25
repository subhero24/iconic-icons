import * as React from "react";

const url = 'url(data:image/png;base64,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TJgH8y29Xlm9YVMT40NERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERHP6F2FmvoAwvBzLAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BinocularsIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};