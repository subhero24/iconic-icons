import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SidebarIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};