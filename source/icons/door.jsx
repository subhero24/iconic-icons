import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUASURBVHgB7d39cRVlFMDhcx0LCBV41QIECtCLFgBjAzIWIGgBGhqQ0ICADYANMKEBiA2Q2ICmAl7Pzi7o+BGyK/Hu3fM8M+8sf+QCd3d/+53ZCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4KKtorDW2l5ONsN4L8flHHvDWKLTHCfD9Occh91YrVanUVTJAHLF3+Tku/hjha/ucY6HGcLjKKZUALni38jJ3Rzr4J8c57iTITyMIkoEkCv+Oif3oz/U4c2e5/g8QziJhXsnFi5X/lvRL9BNcF5XcjzLeXc7Fm7Re4BcgN1x/n4wVYv+kOhOLNRiA7DyvzWLjmCRAVj537rFRrC4AIZj/oPgbesi+CYjWNS8XVQAw9We7oTXtf2L8VuOq0u6OrS0q0CPwsp/kS7l+CEWZDEB5Nb/ZvR3drlYm+GG4iIs5hAoF0p3F3Md03TPwnR3Pw9zHC3xBlDOn27SbSDWOboV+IuY7jjn0QfBPHRbpDbdo+GhuDK6GLrzpRwP2jQvW/88FXMwrMRTLP5O51mGEPbbNE+C7csFsdem2Q9eRfB1G+/XVmzPOUtt2uHP/eC1nB+rNn4v2h0GXY8dt4SrQJsYb7HPtkzUnSF/Gf3FgPPqLqBsYsctIYCPYpwHFR7zHSPnRzd5dSVsjHXsuCUEMPY4tNxvPZ1Ttxd4GuOM3fjMzhICWMc4vwT/5ijG2fmT4J2/EdadjY35+dWwv+fvupPhnLwc85GcnTu9EV38b4TBWQRAaQKgNAFQmgAoTQCUJgBKEwClCYDSBEBpAqA0AVCaAChNAJQmAEoTAKUJgNIEQGkCoDQBUJoAKE0AlCYAShMApQmA0gRAaQKgNAFQmgAoTQCUJgBKEwClCYDSBEBpAtghrX+p9SbHQY7jP72z93n37uMc66CWNlLsoGHF38tx9xxf8fs28Q3urX9h9hhj3ifGRWgjxY5p/cp/qfVb+fN61iZE0AoG4BBo/ro3N36b4/KIz1wZPsMbeE3qzLX+uP44prmWX/fwvD/cvCaVGdqP6W4EZxLA/H0U010PzuQQaObGfr+/GvN9HQJBMQKYv5OY7ig4kwDm76eYTgBvIID5exzT3QnOJICZG67j34vx7uVnT4JlayPFDmr9c0BjHoXoftajEOdgD7ADckt+mpNrOQ5ynBVxG37m2vAZlq6NFDsuv8K69Y8+dw+8vRzGi9Y/KbqJ/6DiHsCNMF5rboRBLQKgNAFQmgAoTQCUJgBKEwClCYDSBEBpAqA0AVCaAChNAJQmAEoTAKUJgNIEQGkCoDQBUJoAKE0AlCYAShMApQmA0gRAaQKgNAFQmgAoTQCUJgBKEwClCYDSBEBpAqA0AVCaAChNAJQmAEoTAKUJgNIEQGkCoLR3YyZaa6/+uIoLlP/Ohf79O270vJkwP9tqNZ9FMIv/ybDyX8pxK8cnOTbBEh3lOMjxY8wkhLkE8H5OnuRYBxUc5/ism247gq0HMGz9uxmyDirplvnVDOA0tmgOJ8E3w8pfUbfXvx1bNocAbgVVfRxbNodDoBZU1Z0Ib3Uj7D4Apc0hgMOgqqPYsjkE8DSoqDv0PYgtm8M5wF5OnkV/VYA6XuTx/4exZVvfAwzXgT+N/rqwE+Ll65bxi+hvhG3drJ6Lyb3BzZx8leNysESH0R/y3tv2DTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/8zvLIydTJCutmQAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function DoorIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};