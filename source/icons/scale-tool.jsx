import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATnSURBVHgB7d3vkdNGGMDh9zIpgBJEB6ECoBNSAekgpIPQQTq5owLoAJdAB2/kscm/Idgry9pd7fPM7PDlTueZ+Betbel1BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcG8P0YjMfDb/83Zer86rRZ/m9f7h4eGPYBeaCGB+8k/zP4/zmqIPh3m9nkM4BF1rJYDP0c+T/6vDvF7MEXwJuvVDVDY/+d9Ef0/+o2levwRdqx5AnPb9vXoZdK36Fmg+A2R0bN4CNfNGAuVaOANANQK4zaegawK4zfuga14DLHeYt//Pg645AyxzmNfroHs/BiWe5vVhXr/7AGwfugvA246syRaIoQmAoQmAoQmAoQmAoQmAoQmAoQmAoQmAoQmAoQmAoQ0TwHHu0Lx+nddj1vMxT0MAaER39wMsuRgu25s7dAhzhZowSgAtzh06hLlC1e1+C5Ttzh2awlyh6kZ4DdDy3CFzhSrb/Rao9Phbc4NPXd4GZWgCqMtcocoEUJe5QpV5DVCPuUINcAao4xDmCjXBXKBtPYW5Qk0RQLlDuIxhN2yByk3zejxfX0TnBLDMFCLYBQEsN4UIuieA20whgq4J4HZTiKBbAljHFCLoUgsBPBX8bMvXzkwhgu60EMCHgp/d4tqZQyw3hQgokaeb1T/nZZ9jgSw3Xfl4vvtYUwRc64on3eInVBa68vFc43OKgBLzE+ZNnkaHfPU4r3fzehYLZaF//J4I6F8W+s/vioC+ZaFv/L4I6FcW+p9jiIA+ZaHvHEcE9CcLXTiWCOhLFrrieCKgH1noymOKgD5koYLjioD2ZaHCY4uAtmWhKCQCmpaFYgER0Kws+0qkj7GQCPo0wh1hm9xvcJ4TdJz2dojlpnA/AWvKO99v8I2/50xAW/KO9xss/HsiYHt5h/sNvvO3RMDYWo4gv/29yb7HmHW1GEFuvCVkcNlYBHnlmwJ5h60hg2olgjy9DrrWu4C1tBBB/vtNgEseA9ZUO4IsFLC2mhFkoYB7qBVBFgq4lxoRZKGAe9o6giwUcG9bRpCFArawVQRZKGArW0SQhQK2dO8IslDA1u4ZQRYKqOFeEWShgFruEUEWioXS/QasIVeOIAvFAlc85r8eD1yUK0aQhWKBdL8Ba8v1IigShbKz+w18U3wnVpw7dG9vC372ZVT2EHQlT3vn440qU2xgDq/oOVJ61ig9/tqcATqz0pmAMwF0SATrEUCnRLAOAXRMBLcTQOdEcBsB7IAIlvsxaEKePhU9vof+6rzYgAAasPV7+/zNB2ENyNOXc0zRIB+EcVd5ujx4CqoQQH0l186wMlugykq3DFuzBYIdE0B9T9GuT7FzAqiv5HuMt7b4e5N74TVAZecPwI7fUD9FWw7z9vx5FPIagCLzf/8v0d5lDIc4PabdE0ADjtfynP9v+3PU3Xc/zeu3eb04X1+0e7ZArMoWCDoiAIYmAIYmAIYmAIYmAIYmAIYmAIYmAIYmAIYmAIZmLMpOmCu0jAB2wFyh5VwNugMtzxW6xNWg3MRcods4A3RuDuB4O+VP0anaZwABdK71uUKX2AJBRQLo31P0q/rcIQH0r+W5QpdUnzvkNUDnGp4rdMmiuUNrcwboXKNzhS45RCNzhwSwAw3NFbrkKQabOwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAET8CTAKOg+fxb3RAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ScaleToolIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};