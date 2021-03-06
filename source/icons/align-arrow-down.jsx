import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASeSURBVHgB7d2BcdRWEAbgvUwKgA5MKggUkEkoIQ3gVBA6yKUEKmDSQNIBkAYgFXCuIFCBN0/cmXgY2+jpzpZ8+30zO/aMLc3J3t/SSWspAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuG2rWIjMfNA+/Nrqx11xfN61erFarf6IhVhEAFrzn7QPr1udBBVsWj1tQTiLmS0lAMMP5CSoZPidP2kh+Bgz+iZm1pr/NDR/RY9aPY+ZzR6A2B73U9MPMbPZD4HaHiCDqrIdAs36R3gJewCYzRIC8Cao6p+Y2RIC8HdQ0XDo+yJmtoT3AMMFsOECyUlQyaYd/38XM5t9D7A7D/xTq7Ogik8XwmIBFvEmeLgi2Go4L/xLLOC4kFvzptXvsb0AdhYAAAAAAAAAAAAAAAAAAAAsy3AbmFa/tXqd/3vX6lnAMRuegzDcCj6vt9k9KwGOz1ea/8L73c3C4HgMz0HI8dYBx2R3nD/Wq+BOLOYhecdu6Oqeb5/7vvlV+CFTmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgBQmgAsk9vV3BEBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoDQBoLRvg08y8+LTL29LmKvV/btT4XXb07Ylg8/sAeJzszxstW71qtX5rt62Om1fX11qqMW7aXva154FXNaa4lGrTV5vs/uemCo7xUTDoiO35yRg1zCbET252ScE2SkmGNn8l7fnQVBba4LTHO9dq4dT+jM7RafcNv/DHNf8F9ZBbbum7vEpBNEpO0Wn3DZ/77a8DmrLaV626jo1lJ061z28Sf8rJwhqy+le9vRPdupYb+xeyyRBba0HXud067E9lJ1GrjN2r2Gqd0FtezZQ5sgQZKcR6zvEa3dNoLrWBA9avc/9fDUE2ekr6zpE828CBq0ZTnL/EJze1LfZ6Yb1DPU897NJF8K4LG85BNnpmnX0Xre4yiY1P1dpjfF9q39zug+tHucV/Zudrlg+duvex7Bt3wdcJ28pBNnpi2Uvmv9DTneemp8xcnuYcZ7TbfKLuaHsdGm5nvme6wzbchowVh7mWPtzCLLTbplDNP/geUCvPMCpxtyFIPsdqvnXAVPl/iG4mCDt1TvZeZV1wL7yMCG4i2UuWwccSu4xcDaDlwGHlvcjBH8Go92/2x3MKLf/Qjj8k/njWKZhuvPparX6GIwiAJ0WHIJhuO2J5u/jtiiddg32c2wbbimG1+Iv/wT2ABPldqBs2BM8inldNP9ZwF3Kw0yQ7uN9muxkTrn/8NxUJjtZhhlCYLKTZcn9J0h7mv80YGly/wnSMUx2sly5/9zQTdYBS3dLIVgH3BcHDsE64L7JwwzPmezk/tozBCY7ud9ye+e5t9lvWMYDLLj/JoTgvebnqOT4uSHzPRynSyE41/yUldsrxm93QRjqVW5PmzrsAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjs5/3NbHBtcAipIAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function AlignArrowDownIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};