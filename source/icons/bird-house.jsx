import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAonSURBVHgB7d37kRRHEgbwj4v7/5AFKiw4ZIFGFhyygJEFcBawawErC3ZlAZwFM2cBKwumZQGcBXldVI00bOxjsiqr69HfL6JjA1jmWdmd9coGiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIBiMiz+fj3Xzs5C+f5mMLopHNjdzNx0Ee5v/NgWg0ZzR+BgGNaW7Qm/n4LOfzv/sSRL2bG/JrSfcaRL2S0NnN9Q5EvTFq/AwC6s/cYK/F3nsQtUzCGP9Oytn55wBRayQMc95KeQfhMCm1RM4f42cQ0FjmhvhSlm38p0HAuQKqR/QTXNb8c78C0dLmhvdG2vEWREsRuzH+i3hY4FwBlSd2jf/tyWMyCKhtEsb4ryWfz9u39zz+Vmz6E9cgsiSh8VuM8T+6ylPsRpT8BhtOmFE+sRvjP8gZY/dLPx/Rg2o1RmEQUG0S0hGLnNynTup0RELa9UnyHYQTZqQhYROLReO/kcxcPD5GLv9euLmGniZ2E1wXMCIcJqUliOEEF4wJg4BKmhvGe7FRbFmCf2yxwc01FIjtBNcGhc3P8Ups+icfhHMF6yZ2m1gOsuBIi9hOmDnQ+kjnY+29v36qyLDx3NZsPMIgIC2x28SykwZyaLHbiM9qdKOTvCptp27QmPk1XYkNTpiNSBoe47cinCug+8gKGv+RMAjolNhVaduiExI211jghFmvxLZzuEFnxG416044YdYXsZ3gcuiUcJh0ffilf4ufx4qI3RKBqhNc1iQEATfXjEzsJrhuZMCcV0Kf6IPkYzW61ojdJpYrDE7sJsxYja4FsqIxfivCuYIxSIEqbWshDIJ+SeEqbWshrEbXH1moSttaCKvR9UM4pl0EP9cO8Esqi59vw6Rylba1EFaja480VKVtLYTV6NogDVZpWwvhMGldwgmu6oRBUId0UKVtLYTV6JYjdhNc3hZkQuyCoLlqdH9DIyQMne3nYwtqzQQbfhXpThoaJm0iAOIHspuPf4JaZHnW9sOjzQRBK1cA3/gdbDmQFQdbDiEIqqdD1QMg5uoO9jjmb6fEZ+nmo/ogxd9R3xuU8Q80Ip7pfP7rL//fx5/P8W3DmuLx+3zczsf+2bNnE9rgUMaPWDspZ4eKJIxovZO80ix+WYJfsuxQkdiUl7kX1k7KOaAC+avhWyzfOHUtlQJBbNYH3QuVtdAJ3mMQEmY8feBdwD5v3vrHljqzqg5l3KKyFgLgvyjDYSESC3GhTMO/yy9POCx8NSj1nn7F2klIGQ5nXC3972jTCofCxG61qtYi5UkkBLf2dR3O+L0qKepd1a8A80jHl/nHT3h8tnGKv/MFDZGQjtygzpCrf84PUj4l0r43zfdJpySMeJx2uHYSViQ+j/+u7YxtUIjYrVa1UCwIJBQc09id/N9Hv09Smj+4j6KzRQESblXamiKbT0Rfar3q8LNWM4vhzqRNgczPNBL6FS2WAbmSMn0e7Wc4oSO9BcAEnRKX2h3aXGbxtU8Ae9r3+gc6MvoV4HsYkpBrO7TLFw+4gC0HnaYGKp4yegB8ByMxvbhAHv/6LxFGQF48ixBep/87Py4+IY/fR215hdKeRLoKgK6IfkTiE4xIXqWEgyhGpCR0PA+S7gJGRL8OaAMqQ/STMiaTLQnPe8p3TtVnZAkThKmlzD+L0VVA9IHYVT2g3lIgLatUYIM0l3OG8zZO9qn4/+P/L0LKpOXft9Va+5SJMCpF9LKDQNJWQ17BiKRdCUzG40UJVJboL8kOGSQt/TmIYUdUzl8vdVfWa0h475/RmdFTIC+3IW6gd5mS9jwkPtYv0MtdLOegM6EzPQbABB2HPNpO3TQ32BsYmx9zD31+vXSHtLv8v8cA0M405l4BtKVa/oNytOvnHfI46PwPnekxALRnGYc8DjofUc4eOrl1lhx0JnRmDQGQewVw0LlFORN0ct/78EOga+gDLFoexbLze89jT9BZOgAmdGYNo0Bm64FWaPh1QGu4AuSuCFV9qVJwH7Isv5OKKVCDJujkNpqlO92PUQ/JIg9ToAYt3SB/V/7+BuVoJ7Ym5HHQ4RWgtJROZmbqMEGnVK1T71/Q0Qbvn1I+s5IDAKX02gmeoJMTANphTb9uZwNjklZFO2dI1kFnQod6DYAl06CUia1r68Vw84+U0id7pBs+//d6DQDtcgiHRPGyvoeOQ1qDfUjKXuTbzPLqS484VbGWK0CulPql/sZy2UEQH+Mt9HLrbjroTOgQU6DzXCEt6HwVtPeSviXS31r0Amn2yDN0OZSjtXSCsybDYhqUekb1Z+9PoqhSFzvRn5C+rfHG4O4yTIEaVmO4LfUq4DmEjvFBwvbGzelVIe688n/3Lu6qyr1pYMo+4rscdCZ0qIV7hKVYfHbWXwXmxumvAjl5vUOYJ/g6VyBlttBeGt1bTLuIcEKH1pICORiYG9YFGrirySOm+BotMAVq2NJ7Ak79jDan/I91+a046Ezo0DN0SpT5QyxBaPXcW7RXIfrn+S2mTNrdq+bnu6Se9wNUW6YcN71bdDStXBo3fged7tYAHa0mAGCc08Zcu4UguDTM+49WUw2u5wCYoGPeqYsNr1af4GutoAKN31vFOiCv5wDQluBwKCCmHj9g2Ubglzn/UKL+UOSg0105lCOmQAb8uPt8vED5lOjr/QXm53ppNNb/EO1n1V1JxCOmQIZiOuID4TfYOt5Y40WhlOeuVawD8tZ0BTC9XdJD4tVgixAIvp5nzsTZHicNf8EdVw463XaCe10K4VW7XdI5Yopy4484rLhB2NTuq7U5fNvIvsTDB8sf8efHilsMtSeLCZ3qOQAm6CxyBbjPSTCMisOgFUzQWcXaFiMOOgyADjAAzuegM6FT3a4F8kS/nvi7Hkt3LCnuU1ANa/a6Dsjr/QowQecl6Cnaz6jrE0rvAaD98F+BnrKFTs4wb3W9B4C2WsPrCgVmuxGHa3+ETnL1uRb0HgDqqm2wrdczmgvoO8B7UB2xdEiK16BvzJ/JG0njQPXMX8BO0rwFfeVPCJLG5GbclGH+El5JumtZ8RlMYvEtSbdF57qeBziav4gD8tb73yDc3jS3nmbzYsD7oc7NfPhUMHVQ4LgEvGujBMAW7W1SH90vBTfkLGaIAPBiProBLWGIs7830lqgf6PzWcmOWNYfqmqYAJjPSH5OoKVSJaO6HKmfNEwKdDSnQlcoe5+uNStRgqWq4QLAm4PgBmGEg+z8Frd6DmXI/QDxi2I6ZOfXERu/N+QV4EjCbO97UKpjGZYrDGroAPDixE/uDSfWaI8w1j9hYMNviTwpWuVLlEygp0wIDf+n0Ru/N/wV4K44a+zvuM7NMd/aI6Q7e6zI6gLgSMLGmE08fK0e/+c1bJm8W4No7w/ulSYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiolL+D9wlh2ygE4inAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BirdHouseIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};