import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAyWSURBVHgB7d2NmdzUFQbgs2kAXAFyGjDQAGNSAE4KiA0FxCYFhCUFYCcFZCEFgJ0CPEsDZikANG4Amwb85R5fidEu+zPn6Eo6kr73eW7G4dmdnZHuuef+SRIhIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIqKhHQkVB6BKL++n8l4qt1N5J5WqKdJ5vWiXyutOeZlKncqP+v+Pjo7OhIpiAPTUVPaN5Ar/keTK/a4MQ4NCg0AD4lT/nYJiJ+TGADBKFV4rt1b2e6l8Ile35mM5a8o3KRhOhUwYAAdKFX+TXu5LrvhDtfB9aYZ4msqzFAxPhW7EALhGqvTa0msr/0jiVvqr7CR3k75kN4lMtLVPZYvl2CJnMKKrYXkV/6KfU7kvRF1YfsW/iIHQWPUYAHkK80TyNOYafZfK39c8RviDrFCq+O+m8oXkRaaNrNefU9Fs8AXy9O7qrC4DIA8GtdWvhLq0MfhsbWsJq8kATav/OP1zK6z8l9EtG9t0jL6SFVlFBmj6+mNX/J3kFdqXzetr6ez1SS3t6+4PN12QbrkjuVLqfqJK8urzWDQbfLyGscHiA6CZ7Xgiwy9knabyvez36LyWQtJ30Jd2C8ZG8p6jjQzrVSr/TN/jidA8aZcHw3mFPHX6YOwBpAZE06XTv/0dhvMGebKA5qSpHFsMY5vKQwSZNcH5YNhiGN9G+b50g3SiqlR+QHknCL6dADkY3k/la5Sn06WVUFzIlb9GWSdzO/HIgaDHonQgMAiiQvnKv537ycYwgcAgiAZlK3+Nhe2cRA6Euyh3jBgEUaBs5T+WBUMOhGOUwSCYGvLsR43+auSLXxYPOQhuo8xxewHODk0HZebAn6ztJGI/dfoE/T0XGh/yDsa+HsmKIQfC5+hvVfuHJoe8ENWHruJuhNog+AD9ukS6YswLbMaAPOh9Bb8aHLydgzLjgl94XEfQ8yTVPEmXKxQEOjPEQfFQ0G9zW83Kf71CQcDxwBCQL1xn5R9YgSDQ8cBGqBz0m++vWfltOkHgHWuxK1QS+k15rmKBqzTst094HQv1hzzr47Xqef6+0G+dQLtClVA/8K/2hryUD80tWXD+4hW9fiHkPHr6XEfwrxhzlbgP5KucPGoE7IPi5o174TaYIWeBW/CNwTgg7gP+gW8lAR34fcINILFfLfZgFvCAv/U/loCM3+dYgoF/KzWzgAd8rX8tQRm/j24riNiFO3KeF2YBC/gXvTYSEHzZ7FiCgX9qlFnAAr7be5xIUPC1mpGzwBZ2zAKHgH/ev5KA4B/LqGMJBvtVYivNAlyUvAl8dzBYWuvfipwFPOfpWOh6zgpTSUDo1/qHrTTwZ4FfhK6WDtA92C219f+t0mA5WSDcYDja8wHuid2/JKB0oh9Imdux35L8mNZo9JbV34iN3o38r0KXg3377VaCQtm71C1pRijUdwmTAZBTo/XAfC0BoVzr34qcBf4nNu1zDqgLvlmFkBddoPwNelW4LID9Rjlr5n4sQUQaA9wx/vyzkk9hKQXlW/9WuCyQjr++6Dk4E5tPhPbgW/yKun++xnCiZoFPYRPmYpkoGcDTJ3wmwWC41r8VdSzwVOw2EkCUANiIzWnE7k8yxvO0/hYpC3S6QaeWXxN7l3cQUQLAejC+l2Ccrf9OcuWxiJgFdDbIek4+Espgn0XYSDDw9f3vw3eRSaixAHzbpLktQiE/1M0q2kDQs+enbn5XL5L33H/nWILAfjrUIsRAOEIXyFqZzwL2/z19/2P9n+a7eLZzhBkLdMYBO7GZfBwQIQCsM0AvJRA4+/6p0nT30egtXJYwFrCuB9yWiUUIgEpsdhKLu/VvLSELNCyNk6aN92RiEQLAehB2EkSh1r+lATDnLKAzQT+KzTsysVmOASSO3q1/xyuZfxawBnAlE5tjAIQYABdu/VtzzwI7salkYgwAv5KtfzuTMvcsEHF1PjbYTX6i0WPe/4b39W4vVscyITjXAmTtYCQBwLnqa3h/z+qwBs2kjQPyFWIWDAAYycQwUOt/4W/McnUYDAA7GMnEMHDr3/k7s8sCYADYwUgmhBFa/87fml0WAAPADnZTtnA17NxXrmFGWQAzHQRHmAbdic0kAYBh5v1v4tkjpMdnqnUB67nZycSi3RjrEFNlAM+8f4UeJK8LeL7vQ0yTKWe3pjPHDDD6BioMf61vaVNlAQaAg3V78y0Z3xjX+pY2RRawbm3/VSYWIQCsrYDnDhJuM2z9W2+zAMabOPNsb97JxObYBapkJE3lmWPr33oo446ZLAGgB3fyi5vmGAB3RmzVHsg8W//W2FmgEpvJt7YfycSQL4y2LhbdGvq64KbS6OeqZN70ON0e8ng1x0rHZpY7PegvfZg+16RBMHkGSAdgJzHHAQ9k/pVfjZUFrOfk9dSVX0VZB9iJzUYGtIC+/0VjjAWsN7oKcWVflAAw31Vs4BbtgSyj9W8NnQW0K20NAOv1w4OIEgDW1mAjA7VoC2z9W4NkgeZ46ftuLL8mtnuJDiZKAJyK3T0ZxgOxt/6YoFgNuTrsORchMkAYsO+03JZO6cg7GmvY3ZeRIchOUeQt0N/B5oXQeemgPIHNECfTs9//Z5kAAlwvAN8WaPUfofPSQdnArlhKx4xa/85nnjQLwP90mI3QefC1aFsU6gZhRq1/5zNPmgXgfEyq0OXge1LkRnrCDFt/2X/2SbJAc8w+gB27P1eBrxt0gp5ZADNs/VuYKAsgt/7WBku7P3xC5HWcJ7MSJ8y49W9h5CzQHLPbsAvRaITmPJkncGYBzLj1b2HkLABf66/Y/bkJfI9MUq6HLaTf+wF2YVr/FnwNx1aM4G/9wzwbODzYZxbenkw4sgDsQqZxOLOAGMHf+j8XOgx8g2F1V4xgF671b8GRBYzv73kapOLcvxV8WaA2nlPr3wk9iIM9C/xgfP8j+CYMwh63yPcF+lLsqlS0FbT8jmUrtuczjcbxrLEnh/4g9rtkK7HRXwx93MKCLwuoDw4NAuRW8+cD3nMWU3iG71Mb3tM78J3NcQsJ/rFADcMcd/rZCrnSvLnqJGJGMxgHfJ/60O+D/Ya3Gnb698OOmWYhHcDn8HkM+3hA1wReNCfuTfO3tUs11e0YeynxfZD7/Y/h861QP8itmdfniPFQmVlCbv0fwYfz/qXAt8jTussgsIN/s1vrWKgMHD6wu4xOC95mEBwO+0FvDR89V7PsNoYF/4AYzYlkEBygQOXnotdQ4B+MMQgOUKjyPxYaBvp1hRgE1yhQ+dVPQsNCnhX6BX41g+C8pvL/Ef0qv56TSmh48O3hvxgEB68WLxn2G9w81xO0tOvzUGg86DceaOk6wdEaAwG54ut3987zt7TyfyE0PvhXibs0kHSpX9YC++0NJRoRrvZOBXlQ/AL91VjJuAD7Ba4a/f0EzvdPC/uNXyXoivMiu0TYd3n6rKp3zWqD4KKhbBDUyIPCRQQC9hX/Lsq0+oqVPxqUDQJ1gtwtmmUgYF/x9TtsUQ4rf1QoHwTqBDMKBJyv+F+jLFb+6DBMEKgT5MHj20BAoGBoPw/2XZ3SFV+nOnWyoRKKD3l26FsMY4u8EKfTiJMFA85Xev0sj1C2q9PSyq/HkrM9c4M84/EGw9EHQ/wuGDBAQHTfG/tK/ylype+zinudxW9um/w5wUNDfobAPyQ/x3ZIp5LvMKFFn3nWffTr7yLi6Oj8ob8iaLo/pC2wPor0o6ZsZFivUvk8fc5vZMEWHwAKue+qdyZz3T7RSYNgl8rL5lWfifX6Qul6t1Oq5vVOKu9JrviVjEMjUe8Y8afmGc6LtooAaDXpXDdtrep7G2jl1/sKfTnkk+UjWV1FQL5aSe9SPGY2iE4r/i6VT1PFtz6zedYi3xluEOkEn6aXDyXfrYz7ofd3bvtwbZVfrbor0IwNvpL8nNu1HYv2YdWfraGvf5XVZYAuPfGp/CX98zPJA781ZAT9jttUPk7f/eM1V366oJnTv+6WgnPW3hluI0TXQb4Fy3MsIxBY8a/B6cBrII8R9HI/XXjSf8/leGk3R6cx/53K09TNORO6FAPgQCkYdKD8SVN0kSrasWsr/dNU/tvMdtENGAAOTXdCb/utK7XvN/957GPZDth3qTxrytlaFrBKYQD01HST2j06bUB0d072PcbdmSmt3DvJ+410a8UpZ3H6YQAMIAVFGwQaEJXk/TwX9/pcZtd51fKr7PcTnbGyExERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERHRHP0fdkd2WSz64KAAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function LetterACircleIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};