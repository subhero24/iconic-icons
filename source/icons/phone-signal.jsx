import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS2SURBVHgB7d3xkdtEFAfgFypIB5gKIBXk6AAqIFQQqCCXCiAVJKkgoYJzKkio4NwBdLDsIs8kwBz2OtbJ2vd9Mzv+43SaO3l/9tNKq40AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABglUopD2t7VttN+eh9bU8CRlY7+aa223K39rNNwIgOdP5PQ/AwYCStxCnHuw4Yyb7OP9ZNLOxBwBm1Xt2z/YMqFvRFQGICQGoCkFQxTk9WZcZx+tIp4L6VGcfpS6dYmBIomTKVOJsjNm3b/BSDE4B8nnZs+zgG5zpAMr1lR+84/dz7PzffAKQmAKQmABeqGKcnq7LicfrSKRbmJPgCtQ4eh4cqd7U9queQf0bfvp0Ef0IJdGGKcfp7JQCXxzj9PVICXZi1lyhKIFgRASA1ASA1ASA1ASA1ASA1ASA1ASA1ASA1ASA1ASA1ASA1ASA1Abg8245tP0S/bce2l7j/sxKAy/OuY9sX0W/t+2dkZZoMf3vEdNrbOMHa908CZeZF5ta+f5Io03pbny45dFPbdTnT4nJr3z8AAAAAAAAAAAAAAJBT6iWS9hMzrvbty9q+qe3hvo2orSi527/+HtME9m3vSpMjSRmA2vGv6suz+Njhs3tb2+sahLeRTKoA1I7/XX35JY5bhjSjXW3PaxBeRRIpArCfgP0yplKHw9rzer6vQdjF4IZ/LlDt/G3d3feh8/dopWGbzD78QtxDfwPUN7DV+dfB57iu3wTPY1DDBkDnP6thQzBkAHT+WQwZguECsK/5fw3m8HMNwVDHdqgA7Ed72gmvsf15tAtmj0YaHRptFOhN6Pxzasf2ZQxkmAC051DGNHzHvK72FxSHMEwJVKbHbW/iNO2r/XVM98Z8GPUCUD1G7QNiU1vrwD/E6Xb1GH0VXIb2iVRO9ybj04rL9AjzV+V0V8FlqG/G23Ka4a90HlKmx5Wf4iZYXplWJDnFdfC39kFQ+v1RPOd/eeW08meokYxzKFMp2Gv1J8MjjAJdRb9h7235DD/GNBjQ4ypWboQAfB19XmW4zbfXflbY677fWv+8ihEC0FuH/hbcZRt9ej98Ls4IAdhEn10soEwn68/KtFDcXdo9+E9iOb0LVzsJXlrpFAsoh5cN/be27SYWUDrFyq3+SnDvm1Br3Xv/n8tpV6l3Md14dq9PbFjD8Tyn4adELq1MJc0m+m1qS3+hbm4CML+ncbrHwayUQDP73Dr50v9eJRCsmADMbxun6x2WpJMAzO9dnO5FMCvnADMr0x2TbZ7yJvosMunEOQBntR/H/zb6rkDv9r8D/690igW1awJlut3hLjdlmqCy2C0GpVOsnBKIf8h2PJVApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApCYApDZCALYd21p397Btx7arP54jBKBnHV7r7h7meK5JW1GxttsjFjS8DQ5yPFeovhmbA29a+9kmOIrjuVLlv+vw3pSF191dM8cTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4h78AOVE7n+S9hnQAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PhoneSignalIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};