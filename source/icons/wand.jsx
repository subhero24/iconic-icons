import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUfSURBVHgB7dztcRNXFIDhKypwOhAVhHTg0AB0ENIBqSB04A6StEADJqkgVIBdAVCBT66iBTRiwNZ+aM/efZ6ZOx5+IJ0f75Esa6VSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAqW0KHImI3Y9tPc/quaznSffvnY/13Nbztp6/63m92Ww+Fli6Xfj1XNbzJh7uQz1/1rMtsERd+Bf1XEV/7+r5pcCSdPE/rucmhrur5/cCSzBy/JaA5ZgofktAfhPHbwnI60zxWwLyOXP8loA8ZorfEjC/meO3BMwnSfyfWALOJ8aLf/cu72V3e7/FMLsleFlgSjFu/Nuj2/01hnlfz0WBKcRE8R/d/tAleFVgbDFx/Ef3M2QJPAswrnPFf3R/fZdg91rgRYExnDv+o/vtuwR/FBhqrviP7r/PErwrMMTc8R/NceqfSN8X6CtL/Aez/BCnuSsze1RYpNh/cP1xPdflywfW+7ip5+lms7ktw20LTC3TI//AeWZ/DeAZYGFGfOQfxcB5bgs8VExzYVvvZ4GB87gmiIeLaa/qPHkJRpjnLnyXEA8R57mk+cFLMNI81wXuE3HW6/nvXYKR5tk9+j8p8D0Rs3yY5ZtLMOI8VwXuE/N9kuurJYhx//TqKlC+bxdgzBP/YajbbpZU7zuMydejJ9RF8qYM+zv/bfdzW/r7/13isu8k0zvOo7EAyYwU/5jh3nY/t6W/lPGTTIzza88Uv7qMMg98U4wc/8HtpnoxDV+JieI/uP1Uf06Fz2Li+A/uJ9UbanC2+A/uL9UlFaxYnDn+g/tNdVEdKxQzxX9w/6kuq2ZFYub4D+YYcwkWG79PhJ1RjPgmV6I3lbzJxf0iySN/N0uz1/aQUIiftQrxs1YhftYqxM9axTjx34T4WZoQP2sV4metQvysVYiftQrxs1YhftYqxM9ahfhZqxA/axWJ4s84Dw3LFlu2eWhYttiyzUPDssWWbR4ali22bPPQsGyxZZuHhmWLLds8NCxbbNnmoWHZYss2Dw3LFlu2eWhYttiyzUPDssWWbR4ali22bPPQsEyxhas6OZdssWWbh4Zliy3bPDQsW2zZ5qFh2WLLNg8NyxZbtnloWLbYss1Dw7LFlm0eGpYttmzz0LBssWWbh4Zliy3bPDQsW2zZ5qFh2WLLNg8NyxZbtnloWLbYss1Dw7LFlm0eGpYttmzz0LBssWWbh4Zliy3bPDQsW2zZ5qFh2WLLNg8NyxZbtnloWLbYss1Dw7LFlm0eGpYttmzz0LBssWWbh4Zliy3bPDQsW2zZ5qFxNZKLLLGF+DmnLrirGEb8LFMN5acYRvwsUxfdm+hP/CxX7L+nf9bYxM9sajAvox/xs3zR79cf8dOGGs6/cRrx04443ZMykPhJI053UQYQP4celfl9LKfZvWgufXT/73E91/VsS3839TzdbDa3BYaI018D7Lw6dQk88pNSjemv6OfBSyB+0qpBvYj+7l0C8ZNa7K8C/RD9fXMJxM8idBEP8dUShPhZitg/C7yPYT4vQYifpamhPY/hdkuwqefnED9LE8N/FRqL+JlHzL8E4mdeMy6B+MlhhiUQP7mccQnET05nWALxk9uESyB+lmGCJRA/y9ItwV0MJ36WKfZXj76LfnbLs/sGukGfKoNZxf67hK66RbjvGeGuO9f1XBY4sCkLV6N+Xn88q+fHsv+Y46dH99t63tbzTz2vfXwRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgHv8BKBHJcGRydZUAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function WandIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};