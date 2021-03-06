import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT9SURBVHgB7d3/cRtFFAfwJyoIHSihAEIKIMYUQEgDGAoAhgKA0ABOBQEKyIQGiGggPxqwVQFJBYh90XlGM8Aksk7aPe3nM7Oj/BPPnW7f3tPJ3m8EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwXbNoxGq1ulFevinjZBjH6EUZ57PZ7Nc4kPK+5stJGffKuFvGvIwbsR+vY32OL8t4Us5zEbxduUjzMi5X/bgsYx57VH5+jrNV3ff1oowvomFN3AHyIsV6ZerJsoyPyir5Oka0Wq/4N8t4XMbtaENe39NyrstozHtRWa5S0d/kT/Myvo0RDZP/rIxn0c7kT1mQz8rx3YvGVC+AWPf9vbobIxkm/+dlPIr99fi7eL+Mx621RNVboNVw5XpV2oKdr8FG25Mrf4uTf9OrMu600g4pgMpGKoD8GRcxnVbyeTntO9GAFlqgRfTrRexoo++fx3TcbqUVaqEA/ox+ncfucvX/PqYlj/mHaEALLVD2rM+jw8egpQ24GTsYVv9PyvgjpicP/rT2l2XV7wDDc/C8iMvoxzLW57yrXMA+i2lq4thbaIGyCK5Wwy9jhL64YYsyHsT6C7BljOPDmK7RHgPToXz6U8ar1XYeDW3nmMdx9essv6y281dU1swvw7G94fHn39v8lzJu7eMZ/PB5JL/s2mZSr8qxVO1CFMCEXacA9jnhWjued9HEZwCoRQHQNQVA1xQAXVMAdE0B0DUFQNcUAF1TAHRNAdA1BUDXFABdUwB0TQHQNQVA1xQAXVMAdE0B0DUFQNcUQGfG3hFi4+fmyzwmRgFM3zYBG/lH6z+vRk6n2dgRYtstGkcNB7kOGWGHNWpG2LALQ2thGNt4Wt6L06ioiTvAsCLl/qA/xvFO/pQTNTePuhxxFZ7y5sIvo7JWWqCn0dfmuPMyno7Qj2fv8XtMUxPHLiOsnnnsmBE2ZGssYpobCy9biFGVEVbXGJvD5kr6U0xLHvODaICIpMpGjEia0ofhy3Lat6IBHoMeh1xE7kcDjxXfQYbkVX3ys0lGWF2jZCEMN5EMo/4u2paF+lVLgdkywuoaIyPsjaEIMiO41TtBrvw5+Z9EQ2SE1bNzRth/2cgMztywebQhr+/9llb+KzLC6ljGOBlh/5J3gjKyHbqKnFpGPXkcZ5kJ3OLkT00FZAzfCeRj0al+tf82i1i3fOdD4e/dcEc4KeNerPPE8r3dV5p8ntMy1uf4pIXn/AAAAAAAAAAAAAAAAAAAR6Cl7dGv/tnU3ykfu9ls1vfOfNGAjYCF/IP43C/zJDhGuT3Kw7HyEcbQSgG0to8N+5XbpZy2sFVKCxtj5Uu+IfOgJ3nN7xxqe5j/08LWiGdh8vco7/o75SOMQT4ANX0clckHoKZVaYGqLsLyAeiafABqGiUfYRfyAaglW9+HUVkr+QCZbzX6Xvk0rYmcsFbyATIzKp8L+0DchzdfhEUDWswH+DqONx+gRYecA4s4cD4CAAAAAAAAAAAAAAAAAMARkA/AoeVucNEK+QAcUm6EdV7Gb9FIIcgHoIbcFuXTWO8NFDXJB6AW+QCDszD5eyQfYCAfoF/yAeQDdE0+ANQkH4Ca5AOEfIBeZet7HpXJB6CWi9L/fxCVyQfg0PIaX8T6i7Dq5ANwSItYt7wP5QMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD0/QOiCT9lNd/7EwAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function FloatRightIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};