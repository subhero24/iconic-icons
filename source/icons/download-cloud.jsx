import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAmYSURBVHgB7d2NcdzWEcDxZSYFmBUYSgOW3UAuKiD2pIEwLiCS3YAuKSCSG4jtBqSkAZNpgJIbMOgGJFXAzVs+3PBIkxQWeDjsA/6/mTenGfKOp7td4OF9LEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDUjgSTUdVP0sMmtU9Te5xa0zXZe9z5kNrF3uOvqZ2l9vbo6OiDYBIkQEF7AW/tS/ltkA91ITkZ/muPJARCSYG/Se00tfd6GN+n9pUAc7GjfWrPDxj0d/kltb+m1ghwCBoj8G9rU3suwJRSkJ10wRbV1RlBgJJSUDWa+/i1eKV0i1BCCqSnGqu709c75WyAoTT39V9o/f4luBfzAHfQ3H14LXnyagnepPaXNH9wIbiBBLilC/5TKTeJFUWb2hOS4CYSYM+Cg3+HJLiFBOhMGPy2bOFtaj93j9Y+3A7C7u9b2y2n+Kx7LI0kwE2ahzlbLcdGjV5rXiLxiQyQnre7EP8qtR+0LJsvaAQwKRjeaBkW+FsdGPQPvL9dkpaciDsv/T5RIS0z1DlJ4N/zfqX7W62OxxDpmmk+oo5lXZ1GDkivzwhju0aXqT0TrE8XQGNmeN/PHTxdIjzTcf8PmzFuBOui+cg9VJtaiEmyLgke6bgu0U+C9dBxXZ9Wgx0xCySBdYVYN7QWIwKljRb8OwWSwIZGGRVaOs2bWRYV/DsFkmArWC4dPuH1Pnrw73RJ8LkOuzC2C+JVnQV+J+uykWFLHf5Ry9KB9D7twVZ//lP8jlNjWHSpBh79v5cKpfd9pMNGut4JlkfzmhqvVisdI9fr6wFvV8hGhDayEmvqAg2po/Njrasmu66Qrfz8TnzsiX8XLIfmVZXuo79UrjsLHA84C6zmYngtZ4CN+G2lct1Z4L34zwIW/EvZDvqgtSTAkO7P/2Q5LAE89UQtc74ULIP6R3+qHPm5jw4bEfpFUD8d1v9f1NFP87XAn9THRoMWfx2whi7QRvyW1P3ZudqLLD5/FNRH817clzps4utUFkhzN+hU/VrN5dg3gri0XNXml7JAXQK81HEoxx6Nli9XvsjRD83XAX/TMmye4LmSCPPSaQrXbmSB9HqVaEmUY5+DTluuvJEF0uu1QVOgztCh6MTlymXBNF8HTMW6RSylnpJOX668+vU/D9GcAK1Ox+YOqrpVUzXzAJpnZ6c+wpzJstkZ7keZji2h2Kbv6t+CcrRc6cKHtLrwfqxerw5tdXrngvE0T8JMrdWVXMRpmTpCfXEmGEOHV3Do62A1PSPRm6UVW51W6PqjYe8PkD64p+mh5KzsmeQ1Pvs1+r1rYxZH88CXHQCartk+AFsDtJEy7A98mz7rRc6wT0LH1+3cWeURfiwtX46d+qMeBT702QvXLoXmZCiRCNQf7UPHlyy3BV8c8QvSMuXYKcX+MTr+VkV8wBPqEuEbHW51ledcdPhMr3V5NoLJ6bjSi2Yr+C0dd+G7igoGUeiwLZY7oc4CkZZCbCQPx3l9k4bY3goOpiu3YjvnvhU/6o/eRVdUt3MpdPguM+qP7tO8h9erVcaWZ6XDK8+FqT8apQt0In5b7nY+r73Kc95S7BTe2qf+7s+i1+3XRnNXyHsWCFF4a/YzgOZuTCM+W0Ektt7HW3+00QBd2AhdoCFDmEssXFU7bwKYjcysxgQ4o+8fS3ctYCtrzzxPS+0zmVmEBPB+CBz94/pZfBqZWYQEaMTnjSAiuw7wHpw+lZlFSADv7O+vgqi8M/KzL4mYfUeYjYeJzzE7ueLpvkZb5uCZ5dX0Xc56EK4uAY66Ky7EY/MB6eHS85S5E2BtN8qenV4X8z3dmxSysi/U2Fwj9at2Q4V+fMNPG2FyaCj1l170nC0mEeEMcCE+Ne8osiXEzQM/t5+d1pjkmnuyjfhcyMxq7ALNPnkyRAqQE+kXIPY7ta6Xb8Rn9sGMCAngHTp7JHV66vjdWu/N5Z3VJwHEP65f6zJaT3BspD42AvRn8fHOHBdX4xlgU2Mfecn2+v8bz9PE/90XFyEBzsTvmS77Xha1saP/kPsCzH4GCDGplILZdhV5jurWd/witbaWeTHVZU74df8tuy7zbnCx7+4PMrMoo0DemzZYslipvUecCeazF/xDyh6eCTIdtil+N3F0lQTRE0GdJDgdd5+BMJviw9Bxd33cdl/GUdTYUScJSnPgj703c4j9wKHo+KK45k33OuESQZ0kEL0Z9Kc6jh39Wfd0F833my2h1a5rFIU6SRBa/pZKoY7+0ZZCfC1lNJIvzJgvGM9Go+yzbGS8q7vFSCChEiANi51JudsiNUINylG6E9GJlNu7+136jv8juJ/mvmaprtCpBKFOEoDma6lSt6i17zTcGTnkZIvmNfFX4/wyUpQJJW9QR3jf6t/hdR+r5PckYjmbkMuhuw/qieQPDnULG/wm7H6AQklACZXxzmS40MFvQm+I6T44W/Pzg+QRBK8h5fpwbUitnx0bzPiCKn6FaJ7gsgupy74XXRKIOkkAel3/v3W8dfuONoJpaL9EsJ83Eog6SRDafyLsXJnhPRzNC+hedB/8Zdd+0qB3htdKE2BHr2+YvT8sav+2WyRtpFIUmToQb1BTAOwwKIyFVSMBsGokAFaNBMCqkQBYNRIAq/Z7QS97o5i3hyd1jhHLaO+nVpwBetDru59sJS/TvuzaeWoH34Mc7f1g4XosBWj1I3uQtdBMsPZbmtBqsD3RqFQXcG2PmH0w6NTpgffSd4O6/Q57ojGO+sq12NqY43tex+We1zhW3xbFrQBjqH9P7GvNWwlvv47LHc8/6l7bI8yeaFRKh3lxO4bV6dZzpXtNNwHG0OG2+/GnTnvPk+61BhFgDB1fs3T3Ou7A1ZHBn5wLMMbIADQnXSB7laiXyg4tjKNlCnV9rn5DnrOPCsw9MGfeg44v1GV3tPGOyQ95zk74ciRRkAA9dUlgfepjic1uN0U5kp5IAIeUBHarU0uCqJ+bXTxb8M9+98VasBjOoQusUiXcp/A1wY/J6fiRoSlsBTgUjZUEWwEOTQcuTyjshQBzSQH4SufzSoA5aZ4oO9fDs7/Jen/MLwVio+Vu69RHuOK/WLkDJgHBj5i6JHin03lH8CO0FKCPtf9NPDzsNR8LEJ2OX8Z8lxMBaqFlJ8q2AtSmUBJsBaiVjpstZpYX9dNhs8XM8mIZ1D9bzCwvlkX7T5Qx0YVl2kuCS4Ifq6V5nqCK+xsDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACM9X+LdJiQYenTAwAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function DownloadCloudIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};