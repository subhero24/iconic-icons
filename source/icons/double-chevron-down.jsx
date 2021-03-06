import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQfSURBVHgB7d3hcdNYFAXgRwfQQbYDqGjTwdJB3EmoYOkAOggd4A7YDnLWWptZMwPBeu9Jlqzvm9GvJLY1c25GYx37lgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGxOkteH4+FwfM7/vhyOP8vKHF7zr87naY3nw8QOobg7HPv82vCzu7ICp/D/8Zvz+bqW82EGvwnLaobgwvCfD8HrwrYdQnCfy31ZamhO4X9zYfi/2xW27RTqMRY3BGfhH3sunwrbljqPZUEOr+fV4fiY8Z4L25Z6ixiCU/gfU8cAbF1+fJtwrIdyRTle+uxS76mwbY0ButoQdAj/c9wTIMcbRvu0mXUIOoR/8LXAIL+/EXaJWf6bnsL/Pm3cCONHWcEQ5Bj+MfctIvxc7BCMt4fjn9Qb/vZtmcAp/O/S5ttUr48bscQhOAt/y+t6jvBzibRfZuzT6TIj4/o9L4X/vsClljAEHcP/vsBYaX+rcZ+GIegQ/sGuQK20D0FVeS597k/sCrSaewhO4R/b7BR+pnMI1Ie0ubg8l7pmZ9VzwcXmGILUNzu/+7vAFNLn0uThhcd/SJvhQ+8+5sh0phqCDuH3GV/mkT69oYezx3tIG/0e5pVO5bnD8VfaCD/XkT5DIPysV9rLc7U0O1mGKwyBZifLkvby3Jjw3xdYmhmGQLOTZUt7b+gluwJLN9EQ7AqsRech2BVYm7SX5wYfCqxV4xB8LLBmqS/PLXYXAYxSMQR74eem5PLe0PA7dwVuTW5oGR9Uy/GO8fkl0ecc3zZ12cN15Ib2BA9u7XyY0K1dmtza+TCxbHNP8PA7Lrm2LvYEs2Wp2xP8pixM6vYEfy5sW+o8Ho5XZSFSvyc4hW1Lvccl5CfHS5/HVCpsW9r2BO+umaG0b4v8Uti2tPf2rzIE6bMq1T2BrcvxhtHXtJl1CDqFf19gkOONo9YhuJ9jCGJPMFPICoYg9gQzpRy/4Opb6g1fjvVuiiGIPcHMYYlDEHuCmVOOlxnPqbfPsZNTWsWeYK4hffYENw1Bp/APfJsc46XPnuCqIUi/8O8K1EqfFalvxgxB6pqdEX4mkU5DMOL5apqdws900r6+9DEXNEjT0Ow8f64CvaXPELz0+PYEs1w59oae0uanvaH06ffYE8y0MsEQpE/47QlmHunTG/pvCNIv/HcF5pJ+5TnNTtap0xAIP+uV9vJcLc1OluEKQ6DZybKkvUE6Jvz3BZYm8yzL1uxkuWJPMFsXe4LZutgTzNalvdg20OxkvRqHQLOTdUt9eU6zk9tQMQSandyWXN4b0u/hNp0NwbPws1k53jF+Og3CcHyKPcEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDE/gX2PJ6HkrrLTAAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function DoubleChevronDownIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};