import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVeSURBVHgB7d3hcdtGGATQUypwCXIpSSNJJ1Fl0qQBuwNDlXhDSsxYUaQYgO4OB/C9mRv9Isgb78Ii8QksBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgGqSnNen0/rztB7yw5fT+r3AUV3C//m0przv22ndFjiSmeFXAo5nYfiVgONYGX4lYP8+GH4lYL8qhV8J2J/K4VcC9qNR+JWA8TUOvxIwrk7hVwLG0zn8SsA4Ngq/ErC9jcN/mBLcFHbnHP6Tz6d1f1q3Zb3Hy8/bst50Wr/d3Nw8Fmit4pn/6exd81gFWkrl8Lc6JlTXMqhRAkbWI6C50hL8Uhha6r3h/V+nN7HnH09vaMuPN8drPL3WPZWAQWWDwbb4dYgRZMPBtigBW0q/wbZPHV6DEjBf+l7hvev0WpSAedJ3vOF+xutRAvrI85XZKf18n/m6lIC20j/8Z7MKcHl9SkAbqRP+KcuP8WXh61QC6kqd8K8ZbPueFfcDTd0SfCpcr1QM/+V4i26BWFZKvRLcFa5TKof/xXG73AQ3dUpwX7g+aRT+V89xXn+c1tcXj3k4rbtU+tUjHy/B7DfhHEQ6hL/jXhSA+YT/PxZ9CsWORfhfW/UpFDuUehe5Ni9AKn4MWji+1L/Cu1kJ4kIYS6TdeEP3AEX4WSLtZ3u6XUmN8LNE+g223ZXGIvwskb5TnU2vpEb4WSKDzvOv3IvwM18Gn+dfuBfhZ77sZJ5/5l6En/lSL/y3C49V/UpqhJ8lUjH8L47ZfJ7/nb0IP/OlQfgvx+0yz7/iOecQ/muQRuF/9RzN5/lfPI/wM086hL/jXoSf+SL8bxH+axDhf8vuw+/7AWa4/CM/lIb35+8l9b5vwJfjXYPUv8I7bXXWjDM/S6TdeMPUO0ARfpZI+9meKeb5GVHM879F+K9B+k51PpSGIvwskQ1GmksjEX6WyDbz/E0KEOFniWw3z/+1VBbhZ4lsN89/Vv3OaMlx7kBHY2kw3rDgmFOpLMLPXEm72Z4Zx37zcQPsR/ivQdJnsC0d5vl77ocDOFpYjrYfGjpaWI62Hxo6WliOtp+tXMXfA+RA8/xnlfbzeFq/muc/uEpnymHOmnHmZ67kOPP8FfczRfiPL2k+2zPFPD+jqRiWOe5KYxF+5krf8J+Z52cM6R/+J6WRCD9zZaPwn5UGIvzMVTks35Y9xP352VDtsFzWkhK4Pz/baBWWzC+B+/OzjdZhyY8SfF/yuFH3w4H0DEue5/m/5LkI53Uf9+dnK0cLy9H2Q0NHC8vR9kNDFcMyjRCWCP8whv97gNS7n/0/btLuAu5PVdyP+/MfXdpc4Z0uxyy9xZmfudJ2vGFK5xJE+JkrfWZ7ppjnZzSJef53CP/RJd2nOs3zM4Zkm5Hm0kiEn7myUfjPSgMRfpaIef739nNbOLZLYKZ8jHl+9inPE5fVwhLz/OxJ/n378CphiXl+9iLrTT8LS8zzM7qsN2WjmZ4Xr134+Zg8f2vKWlMMtvEBI4xD/1XWuy3PY8XdB9uKkWZqOIXpU5Z/fv/alE7/E8SZn9qy/PP7t0xpXIIIP61k8BJE+Gktg5Ygwk8vGawEEX56yyAliPCzlWxcggg/W8tGJYjwM4p0LkGEn9GkUwki/IwqjUsQ4Wd0aVSCCD97kcoliPCzN6lbAuG/Yjdlpy6BexqFLus9Xn7elvWMNLON1PmfwJmf/dqwBMLPGDYogfAzlo4lEH7G1KEEws/YGpZA+NmHBiUQfvalYgmEn32qUALhZ98+UALh5xhWlED4OZYFJRB+jimdvzcAhpQO3xsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAs78BlnRI46VqhQMAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function RulerIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};