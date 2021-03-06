import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS2SURBVHgB7d3hcdtGEAbQUyqwOqA7iEqwG4mcBuKkgbCEpIFQFcQdSJMGpFQgugI7FWgDmNCYnkw0wN0BBIj3ZvBLIkiMdgkI+IBNCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYCQR8apZfm2Wu/jqoVl+SHDOmiLfNMs+/l/7s02Cc9Oj+DUB56k77OlT/MeHRK8SLF1X/A8xnCZg+Zoi/hD5/kiwVE0B76KcJmB54nCqs4andl0JlqJi8WsClmWE4tcELENToD/FuNomcMWY+WkLM6ahCZiXpiC/j2l9at8zUey7RJGuEO/StC6b5VYTcFLRP98zlseQGypiD5CpK7z2m3+T8v3cLO9SvtfpsCfYJJhKpW/+7dH6tlHGnoBpxPBk54vFf7Te0ia4D+E5xhT5yc4Xi/9o/ZqA+YqyZGfrpsd73EQZ4Tnqi/Jk54cB76UJmI8oz/cMurklyg+15Iaoo0Lx7yPjuFwTcHKVin+TMjWvfR1lZ5w0AXmiPNm5j8Jz883razWB8Bz9RXmycx+VLkxpAiYV5cnOz1E5pNY1wVW37lwSpLysK/6SIouxikwTMKqok++5TiPqmuBdlJEb4ltRp/jfpwmEJqC2GCHcNvLnrZUglRtau6YIrqPMNp1ApSbYJtYtyq62btMJVWiC28S6Rb6bNBNREJ5LrFvk6Z3snEpuEyTWLb4dVdTHLB9bHnnhuYe0cm6KT+mvAb/7sVneXFxc/JNmpvtMb5rl7wEv+y2xbtH/Ht/2dzZp5mLAKKYErTiz4XXntj1MJA7XBI6Po+/icJpxkReMzm17OANhTjBr5dCE1Yphc4LbG2ASnIXImxN8qQlYvK6Qc+cEXyZYqqaAL6LsaXK7dh0JliYOSc1dlNuFQyGWJOpk9Y9tNQGLMELxawKWYcTi1wTMW1f872N815qAWemKv/TeYk1wAk6xFeoK8apZ7tN02uz/22Z5uLjwJyzhhpgCR8U/9c3lr7r3vLInKOPrI1NXeF/GlKb8UanP1Zv7d/iYDnuCvT1BHnuADJWKv/VLs/yY8m26zyA8xzSizuPKW9ujdZaeOt2HBClji0PxX8Y85wRLkDKuyE92vlj8R+uv0gQJaovyZGdr1+N9dlFmFxKk1BR1kp1/Dni/XZTZhUMhaog6+Z77GD4n+D7KyA1RJk74HP7QBJxS1Cv+TcoUhxvpH6OMJmCYqJPsrDKGKOo0gfAc/USdZGfVGVyhCZhCfB1FWmKUUaRxGOH6KfJ97rYtwX9EnTm8TzHiHF5NwCiiTr6nLf7rNLI4HMo8Rb59u60JnkWdcNskc4K7z1v6P8o+PIOUVhy+/fdRZpsmFnUSpB6Tvnax0DnB3WcvbYJtYt1iwXOCu89f0gR3iXWLfLs0E1EQnkusW+TpneycSm4TJNYths8JHpTsnErkheemfJTLLLkpftic4Ha06NsZzwn+8qygAS/7PbFu3Tdnn5xN1XzPWKJ/bugxQeuoaJ6WXPzPzm17mEgcrgncd4XTLrex/DnBZ7M9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAmX8B2Mnwp0AbM6MAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function DoubleChevronUpIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};