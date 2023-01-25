import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUISURBVHgB7d3Rcds4EABQ6CpICSzBqeAmlTiu4K4DqwP7KnEJylXgXAVKB0kHe+RITpzEtgCCFCnyvRl+RVxoxrsTCgsCKQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxMRLxrr9v22sUPj+31McGStUnetNc+Xtf9W5NgiU4k//MieJdgSbpHnMi3TbAkx+f8XLvEWWwSZ9FldcnnN63E6P5IsGIKgFVTAKyaAmDVFACrpgBYNQXAqikAVk0BsGoKgFVTAJliZuv45/Z9WLAYYB1/FBr7+0C2yF/H37wRY5ACyEj+59/HewXUibJ1/I+vJV0UeiVG99jzuSDMNkGNKFvH33l4JU6RV2I8RBnvFVAn+rmrjfPC/XfRQ4Ia0d9tTZxf7r2NnhLUiJ+nGUvdPovTK3GjIvlbjwlqtEm0jTrXxzhFjvdcR52PCWrEYeZlH3Wuolyfe57bJ07y4nWGOMzvdzMqTernW3uVzsn3uefJl/b6sNlsviTepAAyHYuge6aee3OpK5z3kj+PAijQPZakQxHMWZf8nxNZLIYrcEysmzRfN5Kf0UX9zNAYtgnOJeZVBNsE59Ym3n1M7z7BVKJ8gdqQHhJMKQ6NstIVo0PolkVb78/0Iv8llaHswxtfzMkZi2Av+ZmlYxF8jfF8lfzMWtQvYnvLVYK5i7L3iHN9THApYthG2TbBpRmoCLYJLlXUdYt1ebl80a9brMvLMkR5t1iXl2WJsi0NmwRLEza1he99guePRLs4zBh57AEAAABIAAAAsAjx8snnpXqflJ45vvgT/X0WLYbfUmQfBYvKeoy/F7/KPiz6+yHG2U9nH5mLy6Lf+Hvxq+xjBov/Jj8fIA7/JTZpeE17/X3qQxXjN+JXaXLGH9scDsj4K43nz4zP1Iwvfp2c8Uc1+RFJ3f+FaUSbVhpxfPHrnBp/bI5IYtXmUACf0nhyzsv6lPoTv87k55nNoQD+TeP5J+MzNeOLXydn/GWLYU5if3GabeTxxa/jJPsnoRG2tPiDjr8a8ftuCaV2UbG7Qsb44k/49wEAAAAAAAAAZide3l3BbgksXzgiibUKh+SxVsfHns+R79GKSRYjHJTNWrWJfBf93SW4VHGY7al1m+DSDJT8ioDL0ybsdQzvOsHctYl6FeO5SjBXcZjr/xrj6WI3icHYGnEgx8TctdeY8/dd7J0iYFZi+H1zTtkrAmYhyru8Q9EtZnrRr8s7FN1iphN1Xd6h6BZzfjFso6uWRhnnE/NK/ieKgPHFOF3eoegWF5r8jLBLEodO7GOat/ebzWbyk1cuhQLIFId59y755z71+C0diuBL4iSd4AxR3+X9lsr1uaejW1xAAeTpkr9J/X1I5frc86RJhyLQKDtBAZwQ9Sel3/R5Jj/ec5P6a9IMTmLnwkXdkUDbZ3GKPLtvG/3tEtSI/rY1cX65t3cRJKgR/dzXxnnh/vvoIUGN+HkLwxwPr8SpTtwoX3g3957F5PwIPq3kpPT/Ut0P11O62CU/qJ3ETp3IPym9+0zzRpwib8TJ3mIxwRBigE1to9DY3weKxe8npe8i8+TzGLAAhvg+HFgLdCa5Sf2kbYT525yBH8GsmgJg1RQAq6YAWDUFwKopAFZNAbBqCoBVUwCsmgJg1RTA+Xwq+Kx9fc5EAZxPyXsF1vGzLFHwXkGCJQrr+ME6fgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYF3+ByClwOXbYxmUAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function FlipHorizontalIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};