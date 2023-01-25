import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASgSURBVHgB7d3hcRpJEAbQCcEhEIJDIARnYDK4y0BkYGdgZ0IIdgYbgkP4DgqprNJJgt1pFha9V7W/XGamSt1Dz/QArQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFxIkk/752H/7PLXr/2zaTfg1ufHgu2DaLV/hrzt8G+rdiX7sde3PD8WbB84X/fPn5x2CLJPbUaPibnLeWafHwuXY0kxxrbNZD/WP2cm5lXmx4LlWE//yHi7dmEZt+rPPj8W7jHAfmeidkGZturPNj8WLqc3u1cJsBzfkXYp0OA1KQj+vV+tWE6f8Fx1ftyBfWB8Tmdp8WjTCmX8JnzW+XEHUhf8QyuSwpLnEvPjTqQw+FPUaHqc05BaQzTCeC51wf89RQ2mnN90O9fhtbbRAOO51AX/v61I6uv9Xaz6vJSa055D8qxbgUxvur1l2D9fGryUmuAfUlfvdzXdXvEzyh1ek9sM/iE1Du9IVn1el2OZ0bvSHv7/qhVIbfDvotbnPemvsQ/BX3XSU7UBP9g2eE/6T1duMfiHFG3CuWM53p7scYvBX1aKccdyrLN7A+3Wgv97g1PSv8kccnvBX9Z0486l7yLZkNp7Pb3BX9Z04wNI36Z3yG0ddQ5R73OufbB8yXR/BD+LVRB0JZ3UHJtuQ/o46WGc9NX921Yk/R9kKTt94oNIX91fdrSY/qbbTvAzSvrO+3+3IgXB/7OxPDnWvOvHZ9Vmlun19pDa484eyp6lefyj7175Y+4yUyKkb9X93Aqkf/Mt+Jcmx+PGUw2er+2C0lf6bFuR9F2zHiL4l+Ux8M7tbl4sCXID34+ZG2m6MaMcP3Y3RnkS7F9zk2mG1NX960w3RPAvU46/OjJWWRKkr+betALpr/tL9h9cQaYrSYL963zLND9akYx/F3zOrc4lS9/txq4kyPSN75C60mdq+XWwbSxb+lv9k1fATF95N61A+kofP05xD9K3+Xvy0EbK9Juet1D6DLHpvR/pq4GfjEqCTFt5h9RecZ5q3bgvmTEJMr3u3rQimV76bBv3KTMlwcTgq/y+/sl9h8Z9y4WToCP41q1A+ja+q8b9ywWTYGLw/Tgx38NG/iHHb4w7PJu3gjXTrztsGx9Hjj/E0OvhxWtOXf1Xb8zxcHX724jxx9x7ek7p8xGlOAlSvPrnvJubz8ef+s62anxMKUqCTO83rN6Y15h3k4dMP/Ys6zuwUKlJgiHjvbf6DxlnyHhDrP4cpCYJxlq9MZdPmcemwZPMmwTvrf49Xdxz2fjyf5kvCVbvzGGOd4BNg9fk8klwcuOZ+l9ef87qz/ty2SRYnzH+1FOlc2wanJLLJMGvK49v9ed8FwjCzZLGh8ognLT6pjYJVg3GKgrCyV3Xa48PFUHY9fUiBeOvG/ToCMKSzee1x4ep157Lvl/n2uPDlCBctULXHh/GBOG2XcC1x4enIHzvU1gX/bX0a48PT7c3f+bvnfxDQO4y06nLtccHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACW7T88UuSQgH7ncAAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function TwoCheckmarksIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};