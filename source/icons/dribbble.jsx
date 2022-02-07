import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA8TSURBVHgB7Z3/lRNHEsdr793/xhF4uAQwJIDgAoBzAsYkADiAQ1wANr4AWLgAACfALAkYCMCMSAAvCfC9LnfLml20krq6e6al+X7eqyfYtyuNZupXV1d3ixBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghpDRHQrIDoHEv3zr5xsllJ185aYJI7/U8CyenPfngpHPyTv9/dHT0VkhWaACJBGWfiVf46+KV+5KUQY1CjUAN4kT/7YxiIcQMDSASp/Cq3Krst53ckou9+VC8DfLMGcOJkChoADviFH/mXr4Xr/ilPHwqGiFeOvnVGcNLIVuhAWzAKb16evXy96Vepb+Ihfg06RHTJBKFensnLQ6HFj6CEXIxODzFP897J98LIX1w+Ip/HhpCYNJjAPgS5rH4MuYUeeHkxymPEf4mE8Qp/iUnD8VPMs1kuvzLiUaDh/Dl3ckxuQgAPxhUr98I6aPO4O7U5hImEwGC1//Z/bMVKv86tGWjdffoJ5kQk4gAIdcfWvEX4mdoP4TXU+n1+jhPe9r/5ZCC9OWKeKXUfqJG/OzzUGg0uDmFscHBG0CodjyW8hNZJ05ey6pH51Qy4b6DvixbMGbie45mUpY/nPzHfY/HQvYTTXlQjj/gS6d3hh5AqkGElE4/+wXK8Rm+WED2iaAcLcrQOrmHSqomOGsMLcrwvJbvS7bgHlTj5A3yc4zK2wngjeFbJ0+RHy2XNkLqBV75O+TnxT49fHhD0HuR2xBoBLWCcsq/pMOetQ/AG8IceaER1AbKK3+fdh8UAF7576AMNIJawLDK36fa6gi88l+Fr1SVgkYwNvDVjw7j0aEyJcAwyr/kN+x5dWjfWyHG7ulpnHSoJBrAT5hddfJKhlnBpp/1XMjwwHcw1kSLEaMBhvX855lU/9DowE9EpbCcxc1NhxEqRRhX+ZXP4AKbYYAf9KY86A7BU8NXSTrkR1swBsmN4ZX/BtKV/zHS7sVHcFBcnsSH1J1/SPAG9Rj56VBYIZCv1DkP73UZafdXK0NsmSgF0prbOmxQSJRpoVCvfF8KgHyTXD+fe89UI+B4oATwC9etdNjRG6NMWvSzZAT5lP/5Be+dYgQ6HpgJyQfS6v0dIlMRlOmj6ZCYEsEr59fI0wJ9YQ0fKyOwjiuYCuUEaSVP80oq5I8GHYzeEXnSkyVbJ7CwGlxbmQtJB94bW0nOv1EmGkRNnCFfpUfZefY2fO4D2NBUqBGSBuzhPutSPuSPBjuNC9zvHSHfyrbo1oXw+dYq2SshdmAv8XUokIMifzTQqlOz4fM05WmRh1cw3BOsxh0d4uGAOAXYPW4jBXHvfx/56NZdr/vZbeSb2T2WBLCaabbAKGABdu8/lwFA3jbsDmGwjrB/EfKRpQQLe+mVUcACbMrVyYDAK2uuWWT19veQd5wxl4zAjwc6xMMoEAPsk14zGQH4lGisRrR1qNfNPgMNe2mUUSAG2AZ+SXluhmvOmRKloE1pMykEfBRoEQ+jwC7AXvdvZGTCtZfcqGobxZcpYjUhF4tGgSG3d9xPYCszjur9z4P8OzHsdA8wXAu2RgHLc5oL2QxsaUQjlYG8pdJNFMn3t3w3axT4KORi4GvfsVTl/fvA79JWemeGmYwAbFGAg+FNwBZWq8wrUf7csVH364S9IvREyHoQ7y1bqQiEo5dQ1utrlWfQlOciYKsI6fWzVfo8sNX+R1+IDa/0pb19n2pWXMHWLco0aB2wpT+jeBKslF5ngYeeAKtmz36sGuVi70HWFXIHAeLX476UAYGv8WurwguMP+s7qhFgdSaB3o8W8byXSvi7VAB8GTN2MPtCChKuaSb+um5JXQfr6dFWD1URj46OHskAYHVMk6adtyXtiCZ1Jk0NZ5BVYQBiOwDuV8kAfBrVhGtQuRJeax+oLY1g4RTpmRQiKP5MVoqf677MnDyVkanFAGYSx8LJ7fBwFlt+twmvXzn5Wvypi0ulb6R+Rd+EGsGxuw8fcp7v2/P295zckfzRT6/7ilRAFadEwpczZzJd3kraMah6ouO11JSi5+3V06vHL+kc3rjrvSYjU8vu0FNtkjpxcsMpgu6y/IPY0cj2CsaWkDConYk/S1lFPX/pyNgI+atdYGq0WFMLR/o2h1GL3hEUH8PNYfSpYteIGiLAVGYFT5384uSq8/g31uXs7mdP3csDsaORZOtEGb70+DMZh9HHATUMgg89/dH8XitWj3c5PV5PZg9e3Frn1yjyYV15FD7Hv+xE+3FmMj6XZWRqMIBGDg9VdJ2oe2apzri/mQdltRjBF+VRnK3q3Jc6oq5e5zcyMjUYwOg3ISMnTlTpXu7i7TcRjGCptNF/7kQjyetQGdKqjrYfNFIXX8nI1GAA+zwGUCU/EZ/iJCv9edz73Q9GYGn6079rNRJIvSXmRkZm9HkA94DeyH6NA06cvBOv8CdSmGAAOlCt9R6p0f8Z9Zx8cvJbxN927h7+Q0aEEWAzSw//Lry+ze3lt6Gf54zgX+KNoJF6OHHyaOkEegPsvaKGCAAZH1XqhfiKjcoH8cq+kEoINXONlmM6jGUp94uKVniMOiEXs+4X7n1GLcXvowFoeU+VYDmAarb8/mkQRRVb2wY+hZ+psp8O7dWt9Gr3Q3MiPW9/Ee76VJ8+y+6MbgCjg0hk4mC43SaUFhGrt+CXSMYQYyyHCSIRovcs5+a562hhWLYIGkA8iETIcjVWh/y0SFiviz00gFrWA+yMu2mX9iVnLwF8nq2zuY3kY+Hkh5SyLlazzSQGxHuyRiYIfAObethj5CPbFiuw7RY3+trgvYsAMkEvg1WJUc/1nUk+1OtnWVoaiH02o0fyGkpQC4njkHqHttJTft1efCZ5mUteaAAGPkT+/tcyEc4pf4lWCF2MNJd8xF7jJxmZGgwg1gvsU9+QmQGUf4nu7dNIOpb25oWMzD6mQI1MgyGUX9G05VjyEGMAauGx0T87+2gAV3Dg0wHwpc4hlH/JLFM1qJE43srI1GAAsTehkQOuBAXj1iWLQ6d6D2HcaxWrOYDYa+YgOHRcchwgfynSXPxmVOa3EVvDXMo6ZCVa+d2zZwQILCSOmRwYQfk1DUlRQu10/S5IJ/Foo91MbFyXOEZXfqUWA3gtcVw/pHFA+C66pUnKtuGq/DedV10uzbwrNqwL8WMN4J0QD2wbQh3MOCC0EHSws/Z4VNjbJnZeg4zVGQEx6KZYt4R4YDsb+I4cAEGBOti58Gxg+K7Rj4hH33MnBxOu/wfEUcWucFWBeCVosedpUFCeOex83KZIsC+gme/wFZYNerGHg8csnJ8G8McNxaCntOxtGgSv/Cl7gary71R5gW3vz62H2cGW/ig8KfI8sB2Sl6WVdwyQnvffjvgsy71V5lve15r+zIScBT5fjT4mFXuYBgXFiU0b+swlEtiWUW5MsWA8JlXIemA7KXImewS88t+DnbkYgM3BKE82fI+riIfpz0XAFqqPsUdRAL7iZT1l8rkkANuAe23FBt77xzoslj+3AZtyNLIHwHtNS5RT3qd+T9gX0z9Z8z1ilz/++R2EbAY2L3WMyqMA0qs+jWTAeA1nogBs3l9h+rMN2I9MqnpfSqRtZTKXjMBWFn0S/tbq/Tn5tSvGB9Si0iiAtAmvpLz/guuxjLVUgdWIrd7/lZDdgL1ufUMqBLZWDyU5799wTS3iUSO+gXhY+4/F+IA6VBYFkDbwtRyMset1WZzMH7ClcRz8xoKE2UtUZASwe/9c63Q3XVuL8qj3L2bIB03CA9IJGhkb2L2/etpGCgO7k4mB3t9KwgPqUEGjHAr14GS+xhbloPdPxd3AV7ChvS8yFvDev0U8g3pMlI0C2StYkwP2HFp5gJGMIOG6B/eYKLPVOuv+uUDaohEt28mQwJ77j1IrR/5TZ1T5Uxb3kz7wEzDvYUMHlDpzKUMBu/dvZATgF7VYG/TWsfOSSrIjSMtVOwxoBLB5/+Jlzw3Xmxpl+6j3j90hguwC0s7G6jCAEcC+yL2REYGPsqmo8qds7UI2gbRUSOlQ2Ahg67Yczfv3rjtHSfR3IWWBz68tW30s6VDICIISvUE8MxkRrDo8O9jZukMFyQTS+uoRHnT22WLYBr+jbhECr/xaKUsZBGvqc0/IcCDPWbk6T6DtvZID2Aa/o8yUYnXoXmoJlCXPsYB9lriPGpKWASUF2Aa/lg1sk8FqP58cToSzvWMBPyj+Del0SBwXwLigXwYGq90cOqTzO1jvHxf4vDulMtRHa+GmlAi29KeRgcAq5clV7y+2WIdEgrxG0MEPCnc2BNjSn1YGACvFv4F8PT9U/tpAXiNQjuHToq2GAFv6U3Twi5Xi63dokQ8qf60gvxEox9hiCLClFY0UAGcV35KWbYLKXzsoYwTKMfzg8U9DQDAG2GZQs6Y/y+vBKtXJrfha6tRiQyOkfuCrQ89RhhZ+Ik7LiEewbQ+enP7grNLrNdxHmdVdqvx6L1nt2TfgU5PPKIfu8DxI9Qcrhe8rvW5N3iJvK3Ofg29uO5IDB/4MgX+LP3m9BvR0xKtHR2dvPdaPL/q/tDyH93qQmZRFD9174K7zmRwwB28ASvC4utqqhu0Tnzr5Ub48G/lST5rwesXJN+IVv5FhUEvUGep/hjOcD5pJGMCSEM61aWtS3zsCVf5fnDwKR60ePJNTBPjWY93oterNdEdAvf5dp/gnMiFqOSh7MMIDvubkkXiPN3X0Hui9uDY15VcmnQqEscFPTvTAuandC1X8E/FefyETZXIRoI8+eCffuX/eFZ8CTCEi6HfUibib7rvfnLLyk3PAT3C9R9m5g7HQ76TrJ2ZCyCbgm9te4TAMgYq/AZYDNwA/RtDlfjrxpP/el/ulaY6WMf/r5KVLc94KWQsNYEfgT2a/FUQnqWq7d0ulf+nkf1Os6FigARgI6YQ2tOlM7bfhx0Pfy+WAfeHk1yBvpzKBlQsaQCIhTVr26CwNot85mXqP+5UpVe6Fk9dO3jk5YRUnDRpAAZxRLI1ADaIR389zvtdnHYveq8qn8PpBvHdfCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCyJ7xf5eUMa1QQrhSAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function DribbbleIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};