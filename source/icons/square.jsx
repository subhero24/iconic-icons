import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUUSURBVHgB7dv7kRRVFMDhM0YAETiaAI8EHAxA0QCEIgHBAGTXBMQEeJgAlAHAkgCPCHZNQDYC2nPt3oI/1KKnFub2nO+rutVFFVRR3ffXj9s9EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMe2igUbhuFCbjbT+DzH5RwXpsH5O81xMm1f5zhqY7VancZCLTKAnPib3NyNdxOe3XqS41GG8CQWZlEB5MS/nptfc6yDHh3nOMwQHsVCLCKAnPjr3DyI8VaH/r3M8X2GcBKd+yw6l5P/xxh36CZYiis5XuSxux2d6/oKkDuw3ecfBEs1xHhLdBid6jYAk39vdB1BlwGY/Hun2wi6C2C6578X7JsWwU8ZQVfHtqsAptWe9sBrbX8/vclxtafVod5WgR6Hyb/PLua4Hx3pJoA8+9+M8c0u+20zvdDsQje3QLlT2lvEdWynfYvS3j4e5Xi1hBcwS5PHp23aCWqdo03gG7G94zxGXwajdkYYtvd4+iiOT6TF0J7XcjwctvN2GL/nopkm8Ta6f9O4z6YQDobtPA3GT5qH7RwEOzdFcGeY76/BlXvr258HQTfyeKyG+Vfxdhv0bexYD6tAm5iv229LimpPyLdiXIz4UG0BZhM71kMAl2Keh1Z5+pLHo23OVuLmWMeO9RDA3PvAxf3qqIh2FXge88w9+Z27HgJYxzyvg169inl2/hC88xdh7Wlozt9fTddb+tMehnPzds4/ycO505Nw978Ig49JAJQmAEoTAKUJgNIEQGkCoDQBUJoAKE0AlCYAShMApQmA0gRAaQKgNAFQmgAoTQCUJgBKEwClCYDSBEBpAqA0AVCaAChNAJQmAEoTAKUJgNIEQGkCoDQBUJoAKE0AlCYAShMApQmA0gRAaQKgNAFQmgAoTQCUJgBKEwClCYDSBEBpAqA0AVCaAChNAJQmAEoTAKUJgNIEQGkCoDQBUJoAKE0AlCYAShMApQmA0gRAaQKgNAFQmgAoTQCUJgBKEwClCYDSBEBpAqA0AVCaAChNAJQmAEoTAKUJgNIEQGkCoDQBUJoAKE0AlCYAShMApS0ugGEYAs5LDwGcxjzroDvTielyzDP32J+7JQZwKejVOuY5iR3rIYBXMc81t0FdWuW4HvO4AqQ/Y54bOS4G3ZhOSOscP8Q8r2PHegjgKOa5kOO+q0BX2tn/IOZpB/BZVJcT+UKON8N8d0Swe3kMVjkOhvnetmMf/LMTnw3bOZgOQPBptX0+7fvbw3YeB6PcGZthew9yfHEWghg+nrP9O+3rizmeDNtpZ/9vogOr6ETukBe5uRLbe5jjjxiX1uauLPFh1jGu9W9ifODd9hbmeLVafRkd6CmAtoTmsrj/2iX6Zgbwe3SgmwCajOBpbq4F++xZTv6voxO9BbDOTbsVss6/n97kuJoBnEQnuvoYbtoxvwT7qN36HPY0+ZvuvgbNHXQvN4fBPjmb/L9FZ7q6BXpf3g4d5OZusHRnk7/Lk1q3ATRTBD9H5/9P/lPXk7/pfmJlBLdjjMCD8bK0B94ub3vet4gz67Q6dD/GFzCuBn1rZ/2jHLd6e+D9N4v4SWTbkdPa8a0cxzHuZPrSjsnLHN+1Y7WEyd8s8mw6vTVur+LPfoDhqrAbbdK3H7W0T0/a7c7zWJhFT5xh/Jx2k+OrGH8q2f68ju2/UeH/nca7Cd9+yHSU43lO/J3/sgsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOjX3zgTVZkdnhURAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SquareIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};