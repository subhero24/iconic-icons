import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUZSURBVHgB7d3xkRTHFQfgt47giMArJSBEAPbiBKQMhJ2AUAQ6KQMlIEECRuUA4EgAQQLinIAgAtqvmTkX0j/HDJymd9/3Vb2aogrYPni/nZ7u2Z0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgpu1iEK21szx8nXWYi9PzS9YPu93uYQxiiABk8+/z8CRrH1TwMusfGYTL2NgoAej/IPugkv5/fidD8Do29JfYWDb/vdD8FX2SdT82tnkAYpr3U9PfYmObT4HyDNCCqlpOgTZ9Ex7hDACbGSEAF0FVz2NjIwTgaVBRn/r+EBsb4Rqgb4D1DZJ9UMnLnP9/Ghvb/AwwrwPfzboMqni7ERYDGOIiuO8IZvV14X/GAPNCbsxF1ncxbYBdBgAAAAAAAAAAAAAAAAAAwDWGeT7AMZq/0uUw11+zbmedzXUT+jdoXM7HFzF9yPxi629Ypphs/EPWk6xXbQyPsr4MuEm9ybJetnH9mvVVwMeUTbVv0zv+sXjWpqfucA3fDn2NbKT+/IL+1Y2HOB6fZ/UQbP4ACo5YNtC37bi9yfo2YKl2/M1/RQhYpp1O818RAt5PNsrX7TT1ELgm+AMbYe9o08pJv+C9qY2srb0K38z8O1aBfu9RnG7zd7eyfgz+TwBmbXpe8e04fX0X267xzBRo1j7safX9XpyHMd2b8/wmphhteppsD+g+qzfwh+z4DvF4IgbRplsc1ur34fyp06YehjbtTj9o6/QL4kNANzfxGpuuqsxBOG/rPA7IRjhr65zHAOYQfNOW+639yWcuBtTWTX9+ioHkeHZt+VmsT4O+iOKsAq27ye27GEu/Qv5XTBfj76svgByiOAGI+CyWeTDaRlKOpx+uVqKW2EdxArB84+vnGFM/CzyNZZaG/+QIwPJ3wRcxrqUPGS9/EVx+I6xfDS75/bt5vjGifjGchzdL/kj+OKXfBJ0BKE0AKE0AKE0AKE0AKE0AKE0ATkguaS5a0g3L4AJAbQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQJAaQKwUGstRjXy2EYlABGvY5l9jOt2LLP0Zz85ArC8CT6Lce1jmcsoTgAinscyd0ecasxj+jKWcQYI/hvLfJV1K8azj2lsS7yI4gQg4iKWOcv6caSzwDyW81juSVBbNs9Z1qu23DcjhKCPIeu8rXMWkI3wpK3TG2+3RRDmxu+vfb+t83NAl81waOv9lPXJVRBuMgxXf//8WreyHrX1vghiF7yVDfEsD5/Heg+y/hPTqtJl3Ix9TGv9f4/pgnftFOblbrf7NBCAKxmAvoT4KGq4lwF4GAjAuzIEj/NwN07bL9n8d4K3BOAdGYB9HvpUaMR1/o/hVdadDMBl8JZ9gHfMjfF9nK7vNT/XauvX1Ud2HvC+2mmF4DxgqTaF4E07Xn3s5wFrtWmn9bd2fPqY7wd8qGykfdazdhxngz7Gx21a0YKPJ5vqXtavbcwg9DH1sS39TAAs05ss699z020Zhv7afarT3/EPwWI2wj5Am24nPsR0b07/qGT/9T7W36Nznddz9fuN+gd5nmZd5Np++U92AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4/ofIIqACuMIAGMAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function AlignTopIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};