import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAanSURBVHgB7d3xkdNGHMXxn5kUAB34GskcqYBUkKMC0kGcCkIFIR3QAYYGjg5YKoBUwMsKSbHu8Pmk1a6k3f1+ZjT8w9iy/d6erV1JZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHiUpGZ76rc//HbUya3ffjOgVF34r/zm9LBPftsbUBof7N0j4acEKFM3+r/UeJQA5ehG/4+ahhKgDF0BQlAC5G9GAShB54khd+8tzJXf3tVeAgqQN/ntg4WjBMiX2qNAzzTuMChfh1AejZsIowQoFyVA9boSPNd8lAD50N2FcF8VByXAtiUKPiXA9nXh/1Xzv/NTAuSjC/617q75T40SYF06HeU5ah2UAMvT6Xv+X1ofJcBylPYHbihKgPR8yF5pW8EfogRIQ+0PXKe03ooZY2yJljmyc+yeh2UT2IYmQEof/Cao1/eelxJgPTr9wE3pi99+v7APlADL0jJHdprHPjTPNWJ/KAGW4QNyo/Q/cJv5gqc2gSgBUtIyP3BnndYoSoDYtOCRHYtAlAAxqD2y84/SakL2wiITJUAoLfgD1xISJcAU2tiRnUiviRLkRuevj99cNzPZ9fH9Y79Q+iM7b9YIkShBPtR+73YXPgQX80NQZj9wZ7xOSpCDkR+Qm/shaJmlC0etHPwhUYJtUzvBNJYL+RC0zEkpThu9nZHai/DGOLJFCWLT9Ovju7Efggr8gTuVTn8BYqEEMSmMe+xD0DInpWw2+D21o/9RcVGCWBTOnfsQtNxJKXvbOE2/BdMUTQk2Xf4saN7o5NQFUZUc2ZlC42/AF+pgK/vJ8tdcH//awuz9dvQfxOcZjzHGZ7+93O127y0T/j1p/rmx9j1K5Wdb2c4yp/bP6EdL+0GF+tdvf/rgv7aMdOF/5rdbS/u+yr83q96kJfs7xPg3sAnZc2tH2a34Hny/XeUW/oFXts1BBefo8dngpbxWxj/uFP+w5yW3hni0bgmOKuDQnsInvb6pvT+Bm/D/NznxlzUtX4KjMjqyc4nmjf4HTVs28cmQhpYpgVOCk1LWpPDR//+JLY0rARNhqSldCZKflLIGhd9i6exXme7xbnR3qcpRGcx+F0NxS7DpNTtzKXzSi68yWxaxBNdWKIUveeCHbA4ilcCp0O+tYvQvHyU4T/NG/2tDPijBXZp3ttffhvxQgpOuAAdN962E118tSjB70ovRP3e1l0Dhk15fcn3NuKfWEmjmkgdDOSouwVtNx2mMJaqtBJp2KZkek14lq6kEYtIL59RQAjH645LSS6Cw1/bOUI9SS6CwO1My6VWj0kow4/Uw6VUrFVQChZ/nuzfUq4QSdK8hBKM/8i+BZp7nC2RbAoWP/gcDhnIsgcIu+MukF87LqQQKm/RqMOmFh0UsQbMi01JQu+LTaTpnwGO2XAKdrskToqiLfSEBxbtzYpISqL23mdN0bw24JHL4e06RSqDw83wbewMeojTh7zlFKIHCD3u+MeAhShv+ntOMEnT7GDLp1dgbcI6WCX/PKbAEYtILsWnZ8PecJpZA4aO/E6M/ztE64R8Gc3QJFHZp8waTXviR1g1/z2lECcSkV7Ds7xKZQhe4K781pwLuLZzrtlD7bh8eK8GNhe3nwYAhxRv5vy8n7rZPmsfpgb8EYvRHLIoc/sHjJimB5i15uDagp0ThHzx+9BIofD0Sk144UeLwD54nagnEkgfMpYXCP3i+WCUIPezJ6I+WFg7/4HljlCDEVzH6o6GVwj94/jVKcDBAK4d/sB9LloBLm2M74R/sz1IlYMlD7bSx8A/2K3UJuMpD7bTR8A/2L2UJGP1rpo2Hf7CfKUrApc1rpkzCP9jf2CXYG+qkzMI/2O9YJXijRNcdwsYp0/AP9j/pKlIUTJmHf/A6KAGmUSHht9ProQQYR4WFv6eIJTCUSYWGv6d4JdgbyqLCw98TX4dwnyoJf0+UAD1VFv6e4pWA1aG5UqXh7ylOCQ6G/Kjy8Pc0vwRHQ14I/11zS2DIB+E/b04JDHkg/JcFluDWsH2Ef5yAEnCizNYR/mkmlIDTJLeO8IcZlOAb70emCP98ai+ce9sVodneqb2cIhNgW0b4US3Cj2oRflSL8KNahB9VI/yolsJv8kb4kT+F3+SN8CN/PrwfFY7wI28KR/iRP4Uh/CiDD/JR0xB+RPPE1vdhwv91fvtlt9t9NqAEfjR/qpHr1xn5USSxfh1g/ToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECJ/gNga5hP2UMvEgAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PinTack2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};