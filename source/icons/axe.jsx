import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASJSURBVHgB7d3hcRtVFIDRJ4b/cQcRFEAyFEA8NEA6iKGBDBXgFlIB0EFoANsN2KEBWx0QGshyH1ohReNYWkWWdveeM3NHtqOsZft9uyvJHpUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwTVNU+ck5peYi2bpOuZVgbFZWfSn7aL/u/m025hpgSFbWfRnMb9uWPT3RXBSYEjaRV/38q/XTm92cV4G7svCaNXFHupe+nnMs5jTdva15/6uDNykMAori31a5gu+zov2/cc6VWkmk8kXZcAcAQamXejTstyz13naXk4LnQjgyNYeTTkpy714KcuF/qR9e1os8r0aTQDtIxKvy/I8FzYaRQDtXvSi2DvS0SjuBEcAd8XiP4bB3wke9I2v6pM4xeJnR4M/AkQAN2X+CAiHN/gjwBgCaArH4hSI0ZjFvCnJOALk9T7msp0/Yk8+i29lXQ8fOmzDM8EMSt1Z/BxzFQv3XcERIJkH99gZjwDuAwzXLOZt4bM4BTq+9+2svr2Yf9rL2eplPV+vV95hj82adAHE4vEr4PzPKRCpCYDUBEBqAiA1AZCaAEhNAKQmAFITAKkJgNQEQGoCIDUBkJoASE0ApCYAUhMAqQmA1ARAagIgNQGQmgBITQCkJgBSEwCpCYDUBEBqAiA1AZCaAEhNAKQmAFITAKkJgNQEQGoCIDUBDNhkMun6GsmTPW9v8ARAagIgtXSvE9yE0i/3vVB2NSsfv1D2bPHxxQtl8/m8UvzxnbSztbbhd2UZCzsa/Kum93CP3mtx9HjwZ97x+9nE5gZ9Gu0+QDKxvl/FPC/8xxEgr3r6dBnzNuav2JPXU6p0RwABsDAr8yDOtv8vAjg6ARyV+wA9cFlgR2MI4KrAjsZwClQfQ7+O+apwaE6Bji1+APXRjO9j7mLcH6CTUTwPUH81IObrePOnmJsyD2ExXTUbZt/b2+fnoqPBnwJt0vVRoj0/U7rN9lZ/FWLaXi4+Vt9/EvN05f3p+qcox+Nh0L7rewC7iJswLcsY6nzTXq4+w3uIn60A+m6MATyk/TWHOs/aOV35533fFgH0XbYA7hM3+bTMY3hR5kHU06l93K6b+PK+LQMmgDVjDGBde5SoMbwsHx8hOm0m5sf48n4vAyaANRkCWNXeCT8t8xh+KNv/bcJd+8gbfdZ0dOjt9U3c5Jcxv234sm6b+R1x+q7p6NDb66N6s+sCjzmLuVn5ci5izpv5UWMUnAKtyXYKlJ2/CCM1AZCaAEhNAKQmAFITAKkJgNQEQGoCIDUBkJoASE0ApCYAUhMAqQmA1ARAagIgNQGQmgBITQCkJgBSEwCpCYDUBEBqAiA1AZCaAEhNAKQmAFITAKkJgNQEQGoCIDUBkJoASE0ApCYAUhMAqQmA1ARAagIgNQGQWoYALjtc92aL61yW7W2zPY4oQwBXHa77Zovr7Ht78HiapjmJuW02uz3G9uDRxWKctov2w6cWa73OsbYHBxGL8izmul24df6MOa979bKDfW8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgjP4FHIjOcW+dLJIAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function AxeIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};