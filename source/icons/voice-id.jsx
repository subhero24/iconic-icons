import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMJSURBVHgB7d3hbRMxGAbgL0zQEcIITIDYhA1gA7oCE7VMUDZoR2ADc1GD4E/VOOHci9/nkaz+qHWni/02TvTZrQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHhjrbWbpX1b2l3762Fpnwtmtkzy/dIe28sOv9sXzOiVyf9vCG4KZnJY4rTT3RbM5LjOP9VdMcSuGOIwq3v67xbF6t4VBBMAogkA0QSAaAJANAEgmgAQTQCIJgBEEwCiCcBRm6xOf7bnYUVtQJ1+61QXaPYd0KMNqNNvneoCzb6Dk8UvgdrzkmB/QtdDn6+1cbM9z9p8Bqj60tH3Y23fbM+zqvia897lxrl1+rPdZxbeAYgmAEQTAKIJANEEgGgCQDQBIJoAEE0AiCYARLuaADT17ZtiPAZqK9a3t051ptapztQ61RnaRPsNrqIQ6vCC1uslvk9L+7Db7X5V37UVw/XfY7XxGG3zS6Cmvn1TZhuPa/gMoL59W6Yaj80vgdZ+S7cE2ubrNYqvQYkmAEQTAKIJANEEgGgCQDQBIJoAEE0AiCYARBMAogkA0QSAaAJANAEgmgAQTQCIJgBEEwCiCQDRBIBo1xCA+46+P4u13Xf03fx4XEMAfnT0/V6sbarxuIZzgW6WHw91wlF8u93uffVf37lAfddfdTxG2/w7wPFsyU/1fNbkS56OfViZ8XhDh3Mp2/MR3H/cLe32+Ffp3GuufpryjPc53uu/j8doV3E69Jp6J4HToefia1CiCQDRBIBoAkA0ASCaABBNAIgmAEQTAKIJANEEYL79BvcdfeP3TwjAfPsN7J/gdIfKxaU9nlA4+VgXaJ3qTKOeh4ksk2H/yqQ5/G5fF2id6gIjnocJtRXr29vAANSA55lF/H6AUXondXqd/ig+BBNNAIgmAEQTAKIJANEEgGgCQDQBIJoAEE0AiCYA49x39PV/DgYRgHHU6ZOrqdMnXVOnD+r0AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAbfsNfDAjZ0YL0u0AAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function VoiceIdIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};