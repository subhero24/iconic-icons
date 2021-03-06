import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARpSURBVHgB7d3dbRtHEADgYZD32B3IqcDpQE4FSQVWB3YqsDuwUoFcQdyBiDQgpwLTFTgdeLKXu8BGEDFccu+P+j5gQAGCdPcww5vbvd2LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWLDM7OJRiVcltvnFXYnnAedqSP4nJXZ5vw8lLgLOyZD8VyX+zP/XFcGjgHNQknlT4k3WeR2wZl+1PNusdxuwVkPyP8v9/f4+nwPWaEj+l3kaBcC6DIn/uMS7PJ0CYF1K0v6Qx7c8CoD1Kgn7Ig8b4lQAnI/sZ3VrhzgVQAPfBrPKfsb2XYmnweS+CWZTkv+yfLwPyT8bBTCTkvyvyse2hMcVZqQFmlj2z+d0Lc9lMDtXgAmV5O9ana7luQwWQQFMpCT/i+iT/yJYDC3QyIaW502Jq2BxXAFGNAxxdt/6V9HGrwFrUJL/ebab1f2U/YNxm7o/MxHGDLLtrG63suvp8H8VAMtVEu4ij1u4cp/f8qtljQqAxSrJdpkNn+Is8fI/jqEAWJ7sn+JspWt5Lu85jgJgObJ/irPFwpV/bHPPdiYKgMUoyfU027U8nesDjqkAmF+2XbjS/Z+rA4+rAJhPtl+4ssuKHdwUALPJfojzfbbzNit3blMAzCL7Ic6Wa3VfHnkeCoBpZb8Dcyu7HGZ1jzwXBcA0su/3t9nONk/crFYBMIlsP8T5OhpQAIwu287qdvcNl9GIAmA02bc8N9lON2J0EQ0pAEaR/RDnLtu5zhFeTqEAGEXD5O9anqOGOCvOtUqw14NfE5z9YwgXcbqPJX7ebDZ/BKxFtpnd7Z4InWSDq6wUsE+ebtSW59TzDfayK8TpvgtYq2wz23uTE72XNysFe7kCRPwep7sqsZ2qCKCZ7CfAdtmGYVDWJ9tPhL2JkWSlgENkfyW4znZ2OUJLlJUCapSceZ3t7Er81DIPs1JArexbog/ZTldUmxb5mJUCjjEUwW22sy3x5NSczEoBp8j+2/tztrE7tQiyUsCpsu/jF9ESZaWAFrL9fUG3v9Dj2hzNSgEtDYk7W0uUlQJay/5tLZ+yjb+3Rjw0V7NSwBhypqHSrBQwlqEIbrKdbnHO3pYoKwWMLdsPlT67L3ezUsAUst8/dPSWKCsFTCX7lugu27nJf7VEWSlgajni7HFWCphD9kObLYdKf8n6jbEUAPPJcWaPFQDrke1fq6QAWJ9se1+gABrZBJPJfonkbYknMZFNEdzLtigTKrn4sXz8WGIb8JBN1RIFLFW2X2ijACrpD2eWI98XuAfYzz3AzLr7ghLflx+vS/jG5uHKtgtttEAHcHlcmNYtkRZoPy3Qwnw1VPo24CHLBkOlAWuWJy60CVi7PH6hzV3Aucj6luh5wDnJwxfafAg4R/lloc19V4PudxcB52y4GtwNhdDF7dAmTfLSbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYF3+ApS7J+/PP+YzAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function CaratLeftIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};