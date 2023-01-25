import * as React from "react";

const url = 'url(data:image/png;base64,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vFD3hEfz2uKlQDoKtoYBDHp9QN1MMOACB3KQAt0BdQxg4vcF9c/6vb6Eh5zvyw71DJdwXy4S2hx4fb3EB57vxXvUNSzxXqwK2p36fo0FjB0gNXVqJ/zoFkz8y4DUO1Sji/SYHdJAnJvej/x736BuU+fQR0+/l86EsnUE5yaMWTIDUqKPn71D+SjuKRc9ue2ZXDik0d7Yvdk6ke4l7TARX2/zcUbV4P4c3ngYXS/1D7l+KH7/3yofpOfOxWeACKntGncm62Q68QysMVyf82v8769318MMkhP43dXl15jgf8ivnUxnDNcLz1vA1LKKDHAnV+evhU6JewVta9dgXq0qA0RIg1xxe8NO6NAYrlf5VPrV8LwzXBP5Af8k3K3s0N3RqXtZmdXVAIdybBCbRS9lnfaSSv1RVmp1NcChfEB2PLInHj49ynrsJQW5qwh06Uy5X33A5dqBOzbQU5CmE+xwOXZgwj9q1THAU5BihK2kwadOliV2Y8YuzZvQzLkVOooZ4ExIx3vGKwbMXufFxER/E64Pa+zRsWAGMMjNiU24fpQ0SjunMVyfJCX86lMwLh0zQKHcTIqZoJf7DNGqhoiJe5Q05yg2a/bsxSnDDNAA0rqBu7k8naT5PA/n+hwzHrzG6++DP98ysRMRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER0RL9Hxkou7Mk7dCGAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function AppStoreIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};