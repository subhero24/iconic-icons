import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYeSURBVHgB7d3hcdw2EIbhvUwKSDqgKsipAuU6kCvwqQRX4HEFTgeRK/B1YLkCSRUcO5A6QLBDKFESWyP4AGKBfZ8Zjv4kPnKPH3EEyaUIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACobSMdCCH8Hv9cxuUiLlNcfpE2HuNyF5f7uBw2m82NGEB9BhW/2H1cjsGuY1z20kigPiczOQLEok3xzyEuv0kf5rjs4hFvlhVQn3J+EmPil/s2/rmVfr5cNcXlNq77pVRGfcoyNQKkAn2Wvu3jke6TVEB9yjMTgDSs65Gt1QlcKXoieF56uKc+dVgKwFGWoXIEd/ELPpeCqE8dJs4B0kzBJOPYlpz9oD71mBgBBju6PZnjUe5MCqA+9TQfAcJyEWeS8Uxp205Cfeqy8BPI3NRYQSW2jfpUZCEAPc1n57qQ01GfkcVh8CHkuY7L6lOBOg2ZPjvHg5yI+tTV/CRYqyB5zlrNIacdK+tLi+t6Uo2pT13dBaB1wdZeX+pTl7l7gYA1EQC4RgDgGgEYTIsZoGefPUlnCIB9j5n//ccWO2IK3nvJk7ttxTELlKnBLJDeAr2VMd3E8uykIUYA+77KuO6lMQJg30HG1Xzb+AmUqcX6Bm6HroYRoA8fZDwmtokRIFOr9R3sZNjE0V8xAvTjjRiYNixAt6HpzM9zBKAT6Q7Pd9K/K0sNsghAR+KOcy39jgS6zrrzm5rV4hwgk4X1TVd6v0g/M0M6339p6cj/hBGgQ7ojpZPIK1n6blo1y3LU31rc+RUjQCaL6xv+aY+uzw/rTFHL9uizLFevu2iPTgAy9ba+eBk/geAaAYBrBACuEQC4RgDgGgGAawQArhEAuEYA4BoBgGsEAK4RALhGAOAaAYBrBACu/Szo3rMHYvSlc5O0fSDmTpZHILt4IKa5kEkaC5mkovjP77VrXLDrGIy8Ef57enxJ3q/xyNKkK0JYHkY/5vw/FR+K1+4KvbxCdY7Ljofiv43+93nr8Tb+0S5xPb0/eIrLbVx3cy/9tjAC0P/+ldIO9Fn6to81+SRGWBgB6H//CmnU+1P690cw9ColCwGg//3raCOsZu//Kki3wcwo1jwAaapslvHMpaYB00zKJOPYWpkdsnIhjP73L8s9+e6BiW0y07RpsJPhYv3vw3KR64uMadf6YpmlWyHof/9t5qYOC2q+bWYCQP/77+ppvj/XheDfdK47Lg+hP7rOeyks5NfiOjR4W3z8zCl9dlbNpDGTjVsD/e//pnuJ5DlrdctBCl7WTt26ebDJ26Hpf//jWq5Hq3u0TtFF6+7guP997ghA+/g89K43jgDUxRNhcI0AwDUCANcIAFwjAHCNAMA1AgDXCABcIwBwjQDANQIA1wgAXCMAcI0AwDUCANe6eD9AoP89PAr0v+f9CZVZfiie/vfCE2G1mTsHCPS/x4pMjQCB/vf/wwhQl6XeoJMsR/7eW4DrifJ5qZ9DBKAuSz+B6H+P1ZkIQKD/PRox8RNIpxNlrACoIi3S+QlUV/MRICwXuSYZz5S2DYZZ+AlE/3s0YyEA9L9HMxYCkPtaJJ1j17fFryp+5ln67ByTwDQLL8qm//3Ln8lJcEXdBcDbF0x96uJ5ALhGAOAaAYBrBACuEQC4RgDgGgGAawQArhEAuEYA4BoBgGsEAK4RALhGAOAaAYBrBACuEQC4RgDgGgGAa90FID2Y3uqzJzGO+uSxEIDHzP/+Y4tCpx3rveTJ3bYS/4a3+pzEQlcIbYme2xuoFzebzWYnJ6A+dVkYAb7KuO7ldNSnIgsBOMi4Smwb9amI9uj1FGmPrqhPPVZmgT7IeEpuE/WpxNI7wkY62St+dKM+dVi6DvBGDEyLFaDbUGNmg/pUYCYAqePzO+nfVY3u1dSnDlNXgmNhrqXfI52us3651WY2qE95pl6U/SRdydTXpk7SB53PvlzryEZ9yjF5L5AWKp0kXcVlFrtmWY5q2zW/XOpTjskR4L/S2xb1hXP6PjGdCWl1w5cO47MsV2cP8Uu9EQOoDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsOwvJN7fLkYuWEgAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BoxesIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};