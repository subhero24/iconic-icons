import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function CreditCardPlusIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};