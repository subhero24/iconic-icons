import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQLSURBVHgB7d3RcRpJFAXQ9kbgzUDOwI7ICsEbgclEjmA3A6k2AZSByEDKQG+ZZVweySAB/RoaOKeKL1ep7sdtG9NXQykAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbRMTH5ev78nUXv9wvX1/LkS0zbMo37yEfJ25ZoqvlaxGbDX92VY5gLP+nd/I9HCsfJ26L8k8PwcdyQFuWf3oIDpqPE7cszOcty/XTrBzIWP4vvebjxI3lf4rd3JUDmJR/13y3Bd6zLMrXPcr1v9LYWP7rPfM9F3jLWP69lYYm5d+XA8BmsfoYscZ9aWQs/yzqzAusk1D+QZPP3COn/M/hToB1Iqf8i9JA5JR/8FDgtWUxbqLeIhpcNC1/5oekfC7CeClW04GbqHefXa5Y/a3/Z1K+eSg/U7Eq/33UG35G6u1q/Cp/Rr55uP1lKlbThoxy/Yg25f+UlO8mlJ+p2H7X854fJVnstut5z02Bqcgr/6wki9zyzwpMxe6jtoOVK/YbtR0sHycu9hu1HaRcsf+o7SD5OHFRMWp75boki7pR29Rzi3ycuKgctY2eom35az2G8vNa5EwbhvJ/Lskib9rw2CIfJy6Sdj3Rd/kfQvl5LfLKf1WSRW75rwpMhVEblyiM2rhUYdTGpYqOR21jPqM22oiOR23J+Yza+F10vpvpPR8nLHJuUGelkd7zceKi/n31rDTUez5OXNS5Lo1FnetClT8Kb+n90xSf9vC2ePkFEPv4XhrqPd+5u4R/Af4tdWaNS9Z7Pk5ZrG5/F1GvScl6z8cZiM4vmnrPxxlILNk/0WYK0XU+zkB0PIab5JtHvSHfMKwr8MJYsr+j3iJWA7aSqfd8nInI+4WYJiXrPR9nIHJ+5XAR7Q5B1/k4A4kl+xJ9H4Im+TgDY8meo85TtD0EKfkKrLMsx7eEkg2GeXPJlpjP936x3ljejJL9FW0OQVa+bwXWidXDcR+j3vC2pWRLzGc6wXpjyR6iXstDkJHPIWC9WE0Tsg7Bh5IsMZ9DwHqJJbuJ1dPeSqbMfAXWSSzZMFJL3+ck5hvmF0Z0/C46H6kl5vNEOdaLyxnReaAum8VljOgcAjaLvH1Ok7cbkfe9At4OsV5SyWalkd7zcQaifqR2VxpKyHdb4C1ROVIrjVXmey7wnqgYqZUDqMjnALCd2G+kNi8H0ns+zkDsPlI76DZ/zLfYMttz+N0BdhXbTxMeyhHE9s8fOko+zsDkEGx6333Ui6YtDoGLMOrF6j+f8/EgDK/bWH002cUF05hv+qCwu57yAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2/kP9eaHS8TfI6gAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function DoubleChevronLeftIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};