import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAeCSURBVHgB7d2NcRw1FMDxZyqIqeACBeSjAOKEAjANQGiAEBrwhQJIaABcQQIUEB8FYFOB7TQQU0EeUnaDPZ6LV0+n3X06/X8zmstM1rqTbt+tVtJKIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFtGVW+FdBDSkV46DulbAbZZOMkXIZ3px53GYwTYRgMn/9UguCXANgkn9WNNtxRgm4ST+sQQAK8Fk9gRTCKe1ZbDd3Z2PhGMjkpG0wgANK3qANCuT30/pBchvep7WS40X2ynV9cfH1tXun584bqs8QZD/hf9/8fvY08wjli5fUVvcrLf5EwL98erzTtDvjHd1rQu1g+Sxxsy87/6PgzwlaLdr/2ZTuNMC/bHq40lAHY0/+QcLN8G+V9/r4U4VEUTSLsR1KPwz1chLWQai5B+EMe061h6LHl1clsGyrdh/tffKza/9sUZ9wEQKu1JeDkJaU+m90B8i93Y30u+L2Tc/K/aDemlOmsSuR4HCJV1EF6WMqPQH1+kjlTLjwPE5kl4SW4uWd+nQP7rXIR0P7zvuTjg9grg4eTHKN5fCcQJlwHg6OT/R/xbSb6U8q2kvLtemkLuAqBv8y/FhxfiW2xW/SV54t/+knBMbv43iU2rA3HA1T1A31UWb3g9TAc+D+3U21LISPcA8SU2KY7F3lNzFt7jsxHzHxIzfxQ+w0pm5O0KELs5XZz8IT0U5/r783hT+Ui6z5zqrP+bsfJPETP/StBR23z5sRyFtNQRHkhRG3PPi3YjtrEOT8YoX2L+VseCjm422hinRMT5J3GkeCEOqU3prsdRaRcccbDyUG3eCv6f4pArToJz/wih2lQVAJF2QbCrNrOX08s9QG6X2NPQTv06pH8Fs+rvF/gerLSbZptjKRVRm+quAJF2E+eqKqeHK8Ce2B2GX5ylABuqNQCeCVCAhwC4IzaHXiZSoX4eAsDag/O7wLOV4djZ51p5CICF2LwReGWZO5QyF2l0s88Fil0BluNLzc+fmrGcVa4LpLa5Q4NzkabAsigoxjB3KGkuUhPUSCqlNlWOA1yl6+cOHelIc61y0QSaSAtNoBpRyWgaAYCmEQBoGgGAphEAaBoBgKYRAGgaAYDi9OP7CbAf8nXKSPBWjQRr2n4CbpZLZyR4IsZyVjsSrN2CuqeSMBlOukVyZ32OmCYQilHbfgKD+xNMgQBASdb9BIb2JxgdTaCJtNAEUvt+ArOXkysAmkYAoGkEAJpGAKBpBACaRgCgtJXhWNYFwlZhXSArxgHWH866QNPgCoBiWBcogxpJpdSGdYEmQhNoIi00gWpEJaNpBACaRgCgaQQAmkYAoGkEAJpGAPhUZVdvjQgAFKesC5ROGQnetnKyLpCF9ctuZCS45nKyLhDapKwLhMaxLpAVTaD1aiynsi4QUBcCAE0jANA0AgBNIwDQNAIApa0Mx7IuELYK6wJZMQ6wXqXjAPGFdYHQJtYFyqDtzJJsopwfKOsCpaEJtF6t5awNTSA0jQBA0wgANI0AQNMIADSNAEDTCAA0jQBA0wgANI0AQNMIADSNAEDTCAA0jQBA0wgANI0AQHHK/gDptJEnpdRIKqXsD2CT8WVX+bCUtZzsDzAND00gawUsBC4p+wNksQbAHYFX1e0P4CEArKuDPay4idyCu4Zj92RmHgLgjdjEXoRdAQrwEAArsYlryvzKVQAleAkA633AfkhPCQJsavYA6LvBclYJ/jmkuMrYDoGAqoUTeE/z/dYPvLwPBK/BoEZSGb0cALOwbKg3CjeDLaEy4orC9yTfYUh/Srco6ybrzusYY1DWk9o6EHYl+6G/yypfQv7x3uy5dJ0UqS7CZ/lU8L6C93V+cSHXuKBr8WaVGhnzjmlXu4Vnj7Rw+Qz5W70WXIoVoj6caXc5l1LUyJj30Nyb7PJp2tyeXM9lZq7mm2g3QSo2hTz085+HdK/UXBXVcZpAfbZxXs1CbM4loXyaPrfHKn7wh+H9U3eUGYWr6dChMs7Dy0/iw0IczFVJ8FjyTs6FDJRPbXN7rM7nPvkjd88DhEp5EV6eiQ8PxL8nkm+ofNa5PaliZC3FAbdTbsOvzzK8HMjMSk1LHrEJtMmNSuwR+uSGvONnGKOr8jS87+figNsnwkIFLaW7EjDKNZ45fgDjHmJfihOuH4nsg+BH6SptDifi30rypZRvJeXEH7Pv+ns9F9w/E9zfE9wP6UimvxrMvo9tgk1uJIfKZ9n3d0j8EYsn/x+CPNoN4sTnSd/p+E6lIDUy5BsfPj9Vu8Hy6eUAWE7+H8Tv6m918gzwVtBu1PhlX7ljBEPxh7bVyJj3Qm0/DMnl08uBMOsPz7v+b74RjEO7X78YDM+1G0WOy2681cvAsKaYxyj72KqRZNDuCnk8Rvn0ct/fm/J/2/9//D5q6EL22w26bawnNfsET4OFsdA0AgBNIwCmszIcW8P4w1YgAKZj6U+vYfwBSKfp/fVFxx8AN3S4v97NorHAaNb0p482/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADC3/wCVVL9lcyEcBwAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function MirrorIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};