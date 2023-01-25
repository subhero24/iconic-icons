import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVXSURBVHgB7d3hUd04FIbhj50tgBJMBQkVAB2wFUAqIB0AHWwqCFsBbAXcVMBNBXgrgA60R5FnkvyAiRx0feTzPjMa/4FMbOmzJVkWEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaG1PHUgpHdvh1MqRlcHKvuDRs5Wtla9W7vb29jZyznUArOGf2+FSpdGjP6OVawvCjZxyGQBr+IMd7qy8E9ZgtHJiQRjlzB9yxhr/mR0eRONfk8HKg9XtqZxx9QSYLtCtsGbn9iT4R064CcDU7cl3fga465YHyodeukOeAvAoBrtRbC0Ah3LAxRhgmu0ZhCjeT3W+OBdPAO7+IY32FDjQwhZ/AkwvuQYhmmGq+0V56AK5mxrDzixe9x4CwHx/XEeKzh6DT6nOjRWmSp3J09hT3dR40sIWHwTnq6A6Bx5fqeNbXeYbU1WjtrpctA12F4ClLxhe11t9ulsLBOwSAUBoBAChEQCERgAQGgFAaAQAoREAhEYAEBoBQGgEAKERAIRGABAaAdiRvFTYyqWV+1fWx+fNo86FOFIldSiVj0UeK04z/+ygDqVKWhjfA+xAmrfrxaiygdSzOtJbfdIFaizN3/NosPJRaIoAtHeh+fhovDG6QI39bj937edLFwhYEAFob6P5tkJTBKC9L5rvk9AUY4DGUtkrJ//dg0F1XGweW4sxAH4yzeOfqMzr/6px+h2sXaqkjuV3Aqksd3jJvZWr1PHWj6mSFkYXCG+qt/qkC4TQCABCIwAIjQAgNAKA0AgAQiMACI0AIDQCgNAIAEIjAAiNACA0AoDQCABCIwAIjQAgNAKA0AgAQiMACO1PdcbDh9RYD54ACI0AIDQCgNAIAEIjAAiNACA0AoDQCABCIwAIjQAgNAKA0LpbC8TfB/Ctt7VaPAEQGgFAaAQAoREAhEYAEBoBQGgEAKERAIRGABAaAUBoBAChEYAdSSntW7m0cp9e9mDlXIgjVVKH7L89WHmsOM38s4M6lCppYYuvrKy9CD2uBs0N2g6D6oxWDu10n9WR3uqTLlBjqXRpBtUbrHwUmiIA7V1oviOhKbpAjf1uP3ft50sXCFgQAWhvo/m2QlMEoL0vmu+T0BRjgMbs9Pbt8KAZ06B2qgfqDGMA/GSaxz9Rmdf/VeP0O1i7VEkdy+8EUlnu8JJ7K1fTU6NLqVLVP94AXSC8qd7qky4QQiMACI0AIDQCgNAIAEIjAAiNACA0AoDQCABCIwAIzUMAqj76Tp3ulhCB1c171Vn8g//uAmBqLzJ2Z1CdUQvzEICvqnMseHWqOjwBVH8XOOt5ufBaTV3TM9Wpvfm9OQ8B2KhObvyfBW+uVG+j6FLZM/Mp1WPTKCdS2fN0Dp7kWXp9w9jXXAqLsjq4SPPcCYVdjOM03+fE1OjOpfLkvk3z1Q6Ym3DzeWGat4Hsj26s/KuymwL76TQw3WjyNPSxyoB3bhfGzY4XngKQ7wi3QgQfLAA3csDVB+YWgnsxz792W2v8h3LCWwAGlU2kmB1Yp/ziK//Ng1FOuFoMN12Ya2Gtrj01/szdalC7QH+LEKzR9VS3rrjdZMq6Q1d2YJ5/HXLjv5JDrndZIwSr4LbxZ+63GUxlyUMOAQPjvuQBr8tuz4+62Gdzmh3K7wj4FqAPG5W5/lHOdfFJZL6Q09zxBzn4iAIvGq38ZXV10kPjz7rcaXl6a5xfxbtYTxJc7urkpSe5u7NRZ7reajyV5bTHU3mnMk4YxHihlWd9b/D/qXR1Nr39MW8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALBb/wO/O50CzP8YHAAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function CabinetIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};