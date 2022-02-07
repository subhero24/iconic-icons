import * as React from "react";

const url = 'url(data:image/png;base64,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OM+xW23dvP3jRr7pzKSki0aDmLFiu8Lc28uXvkNMtRj7iEOz8cbrjAlyPe5ahD4X1orfKb5azJ8RytGGYtkSMFW8lFhrT0FX3J337RoITyHX47jnbltOdFGNsUIep+/r4obP2GuLl35u7gqzPf9fkJuFL+l7jmeFCWJsvVrH52zZY4vHNwfMhwbCz5D9GGeFnnIcF5gYxsrX0q9lzy0e3wyE67pH9m8/Uwthh+OIQYCJYbccRSsMgG8OmC8fCLKu0kNq/1Yexn0/g+5mxMQwb+V8a3ItXt8mNwEefmmn4eErDJQZ4mhiiwJdg3Zqn7dvk1uESMv1llfSHjV5L51MchUupSH5NPzRUpGcI6YLUTD46S6Sc8E44LIpU0shkp2SBBPDbha/N3+W/b/wi72DuGfF9q64dhwuaAzQpmReizb7AZC3giwkAF7l51caE90neIksh88HqvyRWoC3zL0FWPq059vUAsiiKQBk0RQAsmgKAFk0BYAsmgJAFk0BIIumAJBFUwDIoikAZNGWEABrx3OnuD9+7Xiu9v+/ZQkB8MTx3G8xPXP/fNIFY0aJQ9Is/oIJmvvnkx4wpui4KY3fpG/YMPfPJz3h1XlqVpxJnpq5fz4REREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREZmmPwGtGScSPtUB1QAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function HeadsetIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};