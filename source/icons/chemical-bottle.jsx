import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaKSURBVHgB7d3tlRRFFMbxO0QAEdiLAcghABwwACUClwQEI3DNABLQNQFfEnAHAxAMQGZMADABHqt2eg/Ibs/ZWzPdVV31/51TZ78AOy/1dFXdO0ObAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAsS2sEpJuhh+Pw1j2A4f3Ioxni8XiJ6tEFQEIk78LP87C6AxTWIfxIARhYzNXSwDiG9IZphRf87shBG9txm7YzIXJf2xM/hyOwnhiMzf7ANh234887tnMzX4LFFYAGXJR2ALN+iJawwoAJKshACtDLi9t5moIwHNDDnHr+cxmroYzQGyAxQZNZ5jSOuz/b9vMzX4F6OvQ98PYGKZy3gizClRxCI4dyTBiXfqRVbAvLdgqjO9t2wDbWAWq+SzQWLxl1jAxRntNw0OJ//Y7z1+Ze5lybLw4aBoBQNMIAJpGANA0AoCmEQA0jQCgaQQATSMAaBoBQNMIAJpGANA0AoCmEQA0jQCgaQQATSMAaBoBQNMIAJpGANA0AoCmEQA0jQCgaQQATSMAaBoBQNMIAJpGANA0AoCmEYAd+ptveExxz1zX70h4Dk0hALvNPgDmfw5NIQC7deZT4l3TCcAOBOCwpgjAxnw+MQwiALvdMZ9/bXz/mM8twyACsJt3+7Cx8XlWmXhLpc8MgwjAbt7Js7FxxfuVeVeAzjCIAOzWmc8Ud6jcmA8rwA4EYDfvGWCKQ7A3ZB29gGEEYECYNEtzWiwWo64A/R1YN+YPmjfIzSAAw7yTZsobdG/MhwAMIADDPjefKQPwl+PPxmXD+1yaQQCGLc1nZdOIlSBPACICMIAAXKHf/3sPjt5JuY+V+dxMOdO0gABcbWk+b8c+AF/oD8Lxd3kbYkvDJQTgal+az3Ob3sp87hkuIQAfCVuFzvxVk19sWvEc8If5LPvnhg8QgMuemF+OFeBX84nboGMDdglXybV8XlgG4fcuwjiTz2vD/7ACfKCvlHTm85vlEbdB3pWHahCGhclxKr/OMgm/+478zgz4WJzI8suy/fnocZ/JrzOcYwv03on5PbX8UrZgKQd91Crx6l/ElTQ8hrivfyOf+Of5iLSxAlw4Mb/T0JXdWGbhMcSO8Mp84uT/zoA9rv5LK0R8LErTGdoVJkBq5ae4SorSDsNUhFoWJsBDpfnaCqP0VWBpaI+2V/+1/F5ZoZS2CqzFgbgt/eQ/UZrirv4XlL4KnBjaEd7wI6Up9up/QWmrQNQZ6qft1f+F0nxlhVP6KvC7oW795D9Wmh9tJuJklt+7MOgQ10zbmv9aaTqbif55ervD0WtxIK6T0mv+0YnNjNIP+T8Y6qP0mn/xB9+raPsZoVfyi1uhpaEeSq/5R8UffIco/UAcg8NWqAbar+Y/m4PvkPgclObEMH/ao+avCmrj2m6FXsvvXQ3Pv2nar+ZfbMfXKzyXJ0pDb2CutF/N/0+rjOgNtEWN1PyvS+nfe6A3MDdqrOZ/XaI30AY1VvO/LtEbqJ8arflfl+gN1EuN1/yvS/QG6qTGa/7XpbT/SiWiN1AqUfN3Eb2BeoiafxKlfXuM3kBpRM0/iegNzJ+o+e9F9AbmTdT896LtgXgtP3oDuYma/0GE1+K+0tAbyEXU/A9G29stsY2cE1HzPxhtLya3RG9gHkTN/+D61/RbpaE3MBVR8x+N0u48GZ33BuJ7g5GJmv9otL24pG4t6Q2MTdT8R6c9iwtiFRiPqPmPTu8PxGv5nfcGCMEIRM1/Mv1rzfcGSiFq/pPTnr0BsQocjqj5T070Bsogav7Z9K996vcGzsQqsB9R889O9AbyETX/7ERvIA9R8y+G6A1MT9T8iyF6A9MSNf/iiN7ANETNv1iiNzA+UfMvlugNjEvU/IsnegPjEDX/2VBFvYGFFULb5fEsjM78boexMUzpKIy/ze9NGLcXi8VbK0ARAeivCKdhsI1pw2kYj0IILLdSAvAw/PjZ0Ip4xXsQxip3CLIHoL/6ry1t64P5iu/53dxboRuW37Ex+VsUzxDZ/5PdEgLw2NCqe5ZZCVsgCsPtUtgCZb0Il7ACANmUEICVoVUvLbMSAvDc0KK49X1qmZVwBogfk40fZTgytORV2P9/apllXwH6OnBsisS6MAfi+sX3OH5p6QsrQDGfBYrih+HCj2/CuGOo0cq2W95npXwWCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjO8/iBCPs8eTrP4AAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ChemicalBottleIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};