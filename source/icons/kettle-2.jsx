import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVTSURBVHgB7d3dURxHFAbQi8sBKAOvIpAUgSAC4wiEIpAcgaQIVERgMhAZCEcgFAGbgZ3BuKd2qcJIFMzCbt/Ze05V1/DEw2x/0z/T3RMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABs20EQwzActstxK69bWbTyLNiGy1ZODw4OziKJ0gFoFf+kXT7EqtKzO8tWjloQltFZyQC0ir9ol/NWXgS9LFt51ULwb3T0SxTTKv+bdvkWKn9vi1beR2e/RiGt8o/9/LMgi9fRWZku0LrbMz75DXATaV2grnWwUgCuwmA3nd4BKDEGWM/2LIJsLqOzKoPgD0FGp9HZ3neB1i+5vgbZLFvv53l0VqEFOA4y+hQJVAiA+f58zjIth9hrrQv0zzDNWSumSu8xTiuPM2vDdFfrKWl2YZhuEdxr/aDYRPe3v6UMEwX3arfpZNjMVSRTYRZoUqXu/WJmDobNXyo+z7AC9KZZrAUaVn3ycTbnZSu/heUM3bTfYtPl42fZKn967WYftvJ12KHgTsNq4LuJq8HY6uHazXrWyuehg+BO7fZ8GTZzEjzMsPn02pMIfmrYfOD7JRJLNeAbVs3kuGxhEZ0YBP/okb9LuoHvTWneBGeo/NzpY2z2u3zKPvBN87RrAThrlzfRmRbg/9YPpk3m71MsdrtPihZgWA2Suld+fmrTlbQpFrvdJ0sX6F2QTnswjb/LIqabzWK37s19u8njy61vkYQu0MojxmTLSHLmz0NkaAGs18/pY2z29D+d0xvfDC3A+JQ5jCS0AI/aRTeLge9NGdYCLWKa77F6Oj30RDHbIafbdA/1UTDNMN1im/8/ihs2X+/zV8zQ7LZEWlG4dZuMyZYxk2nP28qdDcq9fo/p0r/xvYsAcNsipjmf8wb3DLNAW92xte3/v2+m3q9IvtjtPgLwyP+/b6rdL10gShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMAShMASptdAIZheBbwRDIE4KGfO732eeqXIuEuGb4Q861dXkYSvhDjCzG79ndAJxkCcB7QSYrmq7W6VzH985xboQukC9TDLL8yzvylSW+WwbAWQAvQyx8xfUoUHiVNANZfG/8zYIdSvQluITgLLQE7lLL/tn7T+zU6zAwZAxgDdDd2h1p53v5828oyYEtmkd72UDpsl+NWXsRqpmhrC+K0ALVagL3/sav9oI+lCwSFCAClCQClCQClCQClCQClCQClCQClCQClCcAtlc8dqnjcTIUAOHfoAdbB/xDTzH7ZeoW1QKnOHdozFwcHB0cxYxVaAOcObc/3mLkKAXDu0PbM/t6WWPqb6dyhPXK9aWnWqswCOXfo6e3FPS2z+cNg+EntxdN/VOk9gNMmnsZ4D2c983NTmQA4d+jJvF3fy71Q6k2wc4ceZbxnY+Xfq1m1khvAe547NFPjfP/xPj35r5VcC+TcoQdbxuqp/3IfK/+o9BEg13Z57lByYzdnGau35+et0l8EAAAAAAAAAADADFTaEjkucHvXyuG6sHuXrZyu92WkUOVUiEVY/5/JspWjDEusHYtCL8tWXrUQdN2dt/cbYlrlPwmVP6NFK++jswo7wt4FWb2Oznwom656f2jb9wEorUIALoKsLqMzx6PT02l0VmEMML4AG88FXQSZpDhfdO9bgPU883iW5TLIYhlJzhctMQi+dRBW935nYRexOlb91b4etAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPzoPzrpTh8VS9ZmAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Kettle2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};