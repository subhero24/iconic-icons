import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR+SURBVHgB7d3xVRtHEAfgUV4KIB3gCpIOQhpI0oFdgjswHUAFcVpIAyENBJIGiCthc4fOCAESt6cTgp3ve2//Qmaku/vt3EjyIwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBmpZSjbn3q1kVZuerW+4CWdRf5cbf+K5v1PzsOaNEzF//9EBwFtKS7qD+U8U4DWjLc5491Ebxpi2BNf1XXPH7RCd6sb4I73bV/EqQiAOt+iDr/BG+aAKwTgGQEYN33Ueff4E0TgHU6ADn1A3CpFLx5OsCK3T8hAVgRgIQEYMUAnJAArOgA5GQAzksHWLL7JyUASwKQlAAsGYCTEoAlHYCcDMC56QB2/9QEQABSEwADcGoCoAOQlQGY7B3A7p+cANQRgMZkD4ABODkdoI4OQBsMwPQydwC7PwJQQQAalDkABmB0gAo6AG0wAPNV1g5g9+eWAIwjAI3KGgADMLd0gHF0ANpgAOa+jB3A7s8dAXieADQsYwAMwNzRAZ6nA9AGAzAPZesAdn/WCMB2AtC4bAEwALNGB9hOB6ANBmCekqkD2P15RAA2E4AEMgXAAMwjOsBmOgBtMACzSZYOYPfnSQLwNAFIIksADMA8SQd4mg5AGwzAbJOhA9j92UgAHhOARDIEwADMRk0HYLid1wHIyQDMc1q/BbL7s5UArBOAZFoPgAGYrZoNgAGY1AzAjNHyLZDdn2cJwIoAJNRyAAzAPKvJABiASc0AzFit3gLZ/RlFAJYEIKlWA2AAZpTmAmAAJjUDMDVavAWy+zOaAAhAai0GwADMaE0FwABMagZgarV2C2T3p4oAkFprATAAU6WZABiASc0AzBQt3QLZ/akmAKTWUgAMwFT7Nhrwmgbg4bksNv14sVjEPmWvX6uVDnASlboT8VfMqD/x3erP7k/dOuvWdbduhnXZrd+69a5/zD7m71dW//yl66fWHdCPpc5VzGg4+d9162xE7bPhsTGXV1T//BD10+sO5u+lzueYUff7jrp1VVG/f+xRzOSQ9cvq4q+pf1lmfP3pVR783seYyXABjNl5H+r/TezqFdTvb2nG7Px7qZ/ecAHUOomZdL/ruEx3Ejs6ZP2yPPbvyjQ3ZcbzMFULQ/BJVJp5AD6N6X6N3Z3GdLvW74feTzHNIuZ5/TtpIQCHfvuz9vOH+36J3b3l+j/HgQnAy9e/7zh2l73+TloIgE+AmUwH2N2XmG6O5/Ilpmuh/k4y/KX4NXN/Atz5I6ab4wLIXj+37q20i4q33i5jZmXC/0O45zh2dMj6Zfk26NT6N2WG159edxBPKw76+9iDMvGDqJjJIeuXaR+E3ZQZX39qZfk1gOsRB/069mR4DpdlvFm/CnDI+mX1VYix9fuL/+/iqxDzKctPQ6+Hg/uU/mfHsUfDRXi25Tl8Pfln+zj5h6w/hKCvf36o10/cnogPZbkT3Qzrz7K8RXqxAz6E8fOD53E9nPiT2LND1h+CsK3+jwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTjf3H8GzAYqOXoAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SlashIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};