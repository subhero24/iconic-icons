import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASoSURBVHgB7d3hcd1EFAXga4YCKOFRAaQCnA6ggpAKQgeJOyAVJB0EKoioAFMBogLSgVhZ8sAkGUDPsXW19/tmNP5tPR1ptZLORgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPftIrgxTdMX7c+ztl2uW4+u2/by4uLidXBDAOLm4D+1P2/bdooaxrY9bkEYozgBiJsA/B51Dv5bY9setRC8i8I+i+Lawf991Dv4Z6e2/RDFlQ9ALOP+qr6J4soPgdoVYIrC2hCo9DHgCkBpAhAxRF3XUZwARPwSdb2M4twDLA/Afo2C06Bt+P9lFFf+CrDOgz+OZV68ijGW/7k8Q6C4CcHt2fBp9D0uHtp2FcsDsDEAAAAAAAAAAAA60c3r0EV6ffbWXa9QFwEo2OuztzE66RXqJQAVe332NkYHvUKH/x6gcK/P3k7RQa9QDx/EVO712dvhe4UOPwSq3uuzt6P3CvkkktJ6CMAQ7OXw30/3EIDKvT57O3yvUA/3AFV7ffbWRa/Q4a8ARXt99jZGJ71CXdwEF+r12dsQeoUAAAAAAAAAAICE0rwOrdenhHS9QikCoNennDGS9AplCYBen3rGSNArtPv3AHp9yjpFgl6hDB/E6PWpa/deod2HQHp9atu7V0gvEKVlCMAQVLX799sZAqDXp67de4Uy3APo9akpRa/Q7lcAvT4ljZGkVyjFTbBenzKG0CsEAAAAAAAAAADcA71A26Trtbll/51HL9B5xkjSazOz/86nF+h8YyTotZnZf+fTC3S+UyTotbH/7kYv0N3s3msT9t+d6AW6o717bey/u9ELRGkCQGkCQGkCQGkCQGkCQGmfx8Hc97TZ1mnFo01DZtt/e3MFoDQBoDQBoDQBoDQBoDQBoDQB+NAQ/bL2wnsE4EM9r1m2+5pc2Rzue4AHeJDT65plD7ImV7bf87+4Aryn0zXLxkiyJlc2AvARHa1ZNoQ1uf6VIRCflCEQHIgAUJoAUJoAUJoAUJoAUJoAUJoAUJoAUJoAUFqGAGxaIGFdDYWE2m/zdWyz++IihwtAs3Un83BOsc0YO8sQgN9im8sgq29jG1eA2H4WeLJ+tEIi69D0SWyz9eT3yWUIwBDbzAf/qyCbF7HdENXNZ/O2/Tltt/sCayzab/F8Oo8r+aztiLfTeZ4Hu2q/wbPpPD8Fi7YzLqfzvZpMjT64ablyv5nOt/WG+V6k+bxwuvtiz6/b9nMs7Qf6b+7BeqKZp6EvY7nhPXcI8yANFf9HpgDMZ4Q3QQVPWwBeRwKpPjBvIXgb5vl7d90O/keRRLYAnGIppTI70Kf5wVeqipZUL8OtO+Yq6NVVtn6idG+Dth30YwhBj67W3zaVtCVTbTj0ov0xz9+H+eB/EQmlblkTgi6kPfhn6WsGp+WVhzkEboyPZb7hTTns+adD9Gyus0PzMwLfAhzDEMtc/xjJHeKTyLWteZ47ntuaxyCrsW3ftd/q8VHaqA/ZtLw+NZ4fxad4n6S4eagzv3oyD3eGOJhDV41Py+u0l+v2VSz3Cadwv3Bf3sXfB/wfsQx1hnVREQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgI/6C/0xs2o5eXgwAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ArchiveStackIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};