import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT9SURBVHgB7d3xcdRGFMfx36UCSlAqgFQQ0wGpANMBHfhcge0K7FQAHRgqsFPBXQehg5e3o8vgEMB+1p602vf9zOyYGR//rN7PK+neShIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBKmNkLH2c+bu2rOx+nAnrmRT742NmPld8NAnr0SPE/DMELAT0ppzj2dFsBPTmc5z/VrdCUjTBJqerI5zdOaMYvAhIjAEiNACA1AoDUCABSIwBIjQAgNQKA1AgAUiMASG0VX8ub2Yn/eOPjdx+DD7oqj+Pex9Vms7lREk0HwMbNJGcaix7z2ft47UHYq3NNBuCweeSjj5fCUvZKEILmrgG8+N/6jztR/EsbfHzofRNPUyuAT3Y5z/8gtKRcF5SV4Is61MwKcDjtuRZa88rHhTrV0ilQ2S3F3Z02lW2fXYagiQAc7vYMQsve+3E6U2eauAYoT0wQAViLrV8PnKsTi68Ahy+5BmEttn7M3qsTLZwCvRHW5uJwu3r1WggA9/vX6eawemMKn8S/Leam9y9n5uLz+OoZ8/9Q+b+vhOezuEGoxufzxKbZcUwmsCChOos93pEQ1GRBwlH41L63aXaE4BksSDgan96tTVOek8r1WYQFCUdFCGZmQcLR+TRf2jQ0NT6VBQmzsPF28xTddpBWZUHCLGx851nk3Qff013zXHUWJMyGEMzAgoRZ2eMvAHyKbprnqrMgYXaVQtBF81x1FiQsolIIToT/siBhMUbzXH0WJCzKaJ6ry4KExRnNc/VYkNAEq9M8R8uEBQnNsOl9Q1tlZ0FCUyaG4FbZWZDQHJvQPKeF8YIM1MAfpueyIKEpfkjO7PnulJ0FCc2YWPzFqbKzIKEJFYp/JxCANfLD8Nam2RlfhI0sSFiUjf1AU+yM4v/KgoTFGM1w9VmQsAir0w5N8X/LgoTZVSr+U+H/LEiYVaXi3wrfZ0HCbGzcFL+zabbCj1mQMBuf7nubZiv8nAUJs/CpvrZpLoXHWZBwdD7NFzbNjfA0FiQclU1vcbgXns6ChKOpUPw7Y5tjjAUJR1Gp+AchxoKE6ozmtuVYHEtsRUZz27Is3lx1zYTXYTS3aaOF2bgtjiapdfpts9ms+q5PC5viPwtr9G7txV+0EICPwtqce/HfqAOLnwIVNu4PHYQ1KMW/VSdaeS7QubAGXRV/0cQKUHAx3LwrL/7uXnXUUgAG/1FCwH3+9vzpxX+qDjUTgMLGbXO8ZLktf3nxd7syN/Vs0MOdhT98fBFasPdxoo41tQL863A6VB6dPQhL2ft47X+U9upYk0+HLpPu41f/5zuNBwLz2itB8RdNrgDfsvH1mm98vNR4p4gL5eP4pPGb+Usv/hSnoasIQMtKR1jk815YzHlDeEEGUiMASI0AIDUCgNQIAFIjAEiNACA1AoDUCABSIwBIjQAgNQKA1AgAUiMASI0AIDUCgNQIAFIjAEiNACA1AoDUCABSIwBIjQAgNQKA1AgAUiMASI0AIDUCgNQIAFIjAEiNACA1AoDUCABSIwBIjQAgNQKA1AgAUiMASI0AIDUCgNQIAFIjAEiNAEz3KfDZe6EpBGC6z4HPXgnoiZm98LGzx+0E9MiLe3gkBOV3g4CeeZGf+rh7UPi3PrZllRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBS/wBfaosEywaAKgAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SignIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};