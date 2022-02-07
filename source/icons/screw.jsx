import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVjSURBVHgB7d3/cRNHGAbgT5kU4KQCkQqYNBBBBUkaCKkg6QCnA6gAqCBJA2AawFSA1EFSAZs9fA6GwQhJez/29nlmvhF/YFuy3/dO0t2eIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL5QSuksz8M8L9LwLvP8kmcdE8o/f+zH/ap73MG8dEHMs03TeJJnEyNKV8HfpHFC/ylv0sTlL2UVC5D/GNt8s45p7fKc53m5Wq12UVgX+uwsz295fu//PaXud/59fqz/BtPJwXiQ5udJKrRXSNNv7T/nPCpX/R4g/xEu883dmKddHLFXSPPb2t/mRX5c96NiSyhAijo8zfMsB+bitv/QP5RNnof97dyl/Hi+ioopwPh28dFeIT+EGrb2n6IAU6uwADc9jasX75uokwJMrfIC1K76AlR95+FUCkDTFICmNVeA1Qnyl9/L8yzmqTsi+1eee6sjRYt5iMod+iK4/0Of+jPX8f79+nVM63Wev/M8OvW0hPy4ut/N20O+xLtAE5uiAB/9/E2+eZBnzLMku6Bf5Hn8uQNrh1KACk1dgBv3Yx3D7xWKbe0/pcUCVC8dKEaQrk5ee5rK+CfPn2mEU667AqTDHFIWhpAOFCNKV+sUurNVt+lw3aKb83R1msRY91cBapMOFBNJX7ZXGG1rf8t9VIDapAPFxNL7vcLljbv1Io28tb/lvjVXAC+C+V9q8EWwV/A0TQFomgLQNAWgaQpA0xSApikATfs6GnPocQOWzR6ApikATVMAmqYANE0BaJoC0LQlFOAimMrrqNwSCvAymEJ3POVxVG4JC2K6VVTdh2SsgzFtV6vVd1G56vcA/eVBuiu27YKxdJ8PVvUnw1xbxIvgXIJdnjv5n7/GAp6XzthFnj/i6sPxdrEA1sfuMac1xy2u2R2aXw5NUwCapgA0TQFomgLQNAWgaQpA0xSApikATVOASvQHpCe9fPoSNXdZlFrcCPymnx/y3A2KUoCZEPhpKMCE+rUMmxD4ySjAiAR+fhRgQAI/fwpQWA79jyHw1bAgZo/KL6ZrQcwefjk0TQFomgLQNAWgaQpA0xSgDt21jrrLEP4Uh/Eu3x6OA8xTF/jumqcX3fRXv3vHR5yVpQDzcGvgGZYCTEPgZ0IBxiHwM6UAwxD4SihAed8IfD28TbbHnK4O3Znb/amd4wA0TQFomgJUxEGw8rwInrEbgb9+Hu+6QIUpwIzcEvhNXC2vtMRyAAowIYGfngKMSODnRwEGJPDzpwCF9aEX+EooQHndohWBr4TD5HtUfl0gp0Ls4UAYTVMAmqYANE0BaJoC1MXZcIUpwLylfi7zPMrzc1CU4wDzcr2Fv15T/G5dsesCDUcBprU38AxLAcYl8DOjAMMS+JlTgPK60At8JRSgvG8Fvh5OlNrDdYGWzXEAmqYANE0BaJoC0DQFoGkKUNiQ5+o4D6g8BSjvzhBB7b/nnaAoBSjveRQuwY3wPw8YUzrONk+REnTfo/9e23SEgFOk421PLcGp4VeA/TwF2u8ijrOOE54OpQ+f9qzjOJfBZynAfi/jeOs4ogSFwt95HHCKHMazPG/SabbpC58OpQJPe3pvAkrIYVqnEUqQCoY/zzqglDRwCZLwM3dpoBIk4acWqXAJkvBTm1S2BMI/IcvljtQH7t1bnHG8XX+7juNt89xfrVa7gDGlMnsCW37qNWEJhJ95mKAEws+8jFgC4WeeRiiB8DNvA5ZA+KnDACUQfupSsATCT50KlED4qdsJJRB+luGIEgg/y3JACYSfZbpRgrfCT7NyyB/kedUXoZvnec7znAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDC/AfDKOMLo9/D6QAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ScrewIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};