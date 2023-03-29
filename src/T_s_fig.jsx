import {Html} from "@react-three/drei";
import React, {useContext, useEffect, useState} from "react";
import {ToolContext} from "./FireModelGLTF.jsx";

export default function T_s_fig({nodes}){

    const [ toolValues, setToolValues ] = useContext(ToolContext)
    const [ hovering, setHovering ] = useState(false)
    const [ hoveringAlt, setHoveringAlt ] = useState(false)
    const hStyle = "[@media(any-hover:none)]:stroke-accent stroke-[0.5px]"
    const callSetToolValues = (cpReturn) => {
        setToolValues((currentToolValues) => {
            if (cpReturn){
                currentToolValues.flyOver = false
                currentToolValues.flyOverTool = null
                currentToolValues.focus = null

                return {...currentToolValues}
            }
            currentToolValues.flyOver = true
            currentToolValues.flyOverTool = "T_s_focus"
            currentToolValues.focus = "T_s"

            return {...currentToolValues}
        })
    }

    useEffect(() => {
        setHovering(toolValues.focus === 'T_s')
        setHoveringAlt(toolValues.focus === 'rho_s')
    }, [toolValues.flyOver, toolValues.focus])

    return <group position={nodes.T_s_fig.position}>
        <Html transform occlude>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3"
                 viewBox="0 0 14.1 32"
                 onClick={ ()=>{ callSetToolValues(toolValues.flyOver) } }
                 onMouseEnter={ ()=>{
                     setHovering(true)
                     setHoveringAlt(true)
                 } }
                 onTouchStart={ ()=>{
                     setHovering(true)
                     setHoveringAlt(true)
                 } }
                 onTouchEnd={ ()=>{
                     setHovering(false)
                     setHoveringAlt(false)
                 } }
                 onMouseLeave={ ()=>{
                     setHovering(false)
                     setHoveringAlt(false)
                 } }>

                <g transform="matrix(1, 0, 0, 1, -9.577, 6.578)">
                    <path  className={hovering ? `d_fig fill-highlight stroke-none ${hStyle}` : `d_fig fill-black stroke-none ${hStyle}`}
                          d="M 16.147 -5.441 C 16.247 -5.843 16.281 -5.993 16.531 -6.06 C 16.665 -6.093 17.217 -6.093 17.568 -6.093 C 19.24 -6.093 20.025 -6.027 20.025 -4.723 C 20.025 -4.472 19.959 -3.837 19.858 -3.218 L 19.842 -3.017 C 19.842 -2.951 19.908 -2.85 20.009 -2.85 C 20.176 -2.85 20.176 -2.934 20.226 -3.201 L 20.711 -6.16 C 20.744 -6.311 20.744 -6.344 20.744 -6.394 C 20.744 -6.578 20.644 -6.578 20.31 -6.578 L 11.165 -6.578 C 10.781 -6.578 10.764 -6.562 10.664 -6.261 L 9.644 -3.251 C 9.627 -3.218 9.577 -3.034 9.577 -3.017 C 9.577 -2.934 9.644 -2.85 9.744 -2.85 C 9.878 -2.85 9.911 -2.917 9.978 -3.134 C 10.68 -5.157 11.031 -6.093 13.255 -6.093 L 14.375 -6.093 C 14.776 -6.093 14.943 -6.093 14.943 -5.91 C 14.943 -5.859 14.943 -5.826 14.86 -5.525 L 12.62 3.452 C 12.452 4.104 12.419 4.271 10.647 4.271 C 10.229 4.271 10.112 4.271 10.112 4.589 C 10.112 4.756 10.296 4.756 10.379 4.756 C 10.797 4.756 11.232 4.723 11.65 4.723 L 14.258 4.723 C 14.676 4.723 15.127 4.756 15.545 4.756 C 15.729 4.756 15.896 4.756 15.896 4.439 C 15.896 4.271 15.779 4.271 15.345 4.271 C 13.84 4.271 13.84 4.121 13.84 3.87 C 13.84 3.853 13.84 3.736 13.907 3.469 L 16.147 -5.441 Z"></path>
                    <path  className={hovering ? `d_fig fill-highlight stroke-none ${hStyle}` : `d_fig fill-black stroke-none ${hStyle}`}
                          d="M 23.261 3.073 C 23.005 3.118 22.771 3.318 22.771 3.597 C 22.771 3.798 22.905 3.943 23.15 3.943 C 23.317 3.943 23.662 3.82 23.662 3.318 C 23.662 2.627 22.938 2.349 22.247 2.349 C 20.754 2.349 20.286 3.408 20.286 3.976 C 20.286 4.087 20.286 4.489 20.698 4.801 C 20.954 5.001 21.144 5.035 21.723 5.146 C 22.113 5.224 22.749 5.336 22.749 5.915 C 22.749 6.205 22.537 6.573 22.225 6.785 C 21.812 7.052 21.266 7.063 21.088 7.063 C 20.821 7.063 20.063 7.019 19.784 6.573 C 20.352 6.55 20.43 6.094 20.43 5.96 C 20.43 5.625 20.13 5.547 19.996 5.547 C 19.817 5.547 19.361 5.681 19.361 6.294 C 19.361 6.952 20.052 7.375 21.088 7.375 C 23.027 7.375 23.44 6.004 23.44 5.536 C 23.44 4.533 22.347 4.321 21.935 4.243 C 21.4 4.143 20.965 4.065 20.965 3.597 C 20.965 3.396 21.155 2.661 22.236 2.661 C 22.659 2.661 23.094 2.783 23.261 3.073 Z"></path>
                    <path  className={hoveringAlt ? `d_fig fill-highlight stroke-none ${hStyle}` : `d_fig fill-black stroke-none ${hStyle}`}
                          d="M 10.236 24.712 C 10.22 24.796 10.186 24.896 10.186 24.996 C 10.186 25.247 10.387 25.414 10.637 25.414 C 10.888 25.414 11.122 25.247 11.223 25.013 C 11.289 24.863 11.758 22.856 12.292 20.8 C 12.627 21.636 13.245 21.987 13.897 21.987 C 15.786 21.987 17.926 19.647 17.926 17.122 C 17.926 15.334 16.84 14.448 15.686 14.448 C 14.215 14.448 12.426 15.969 11.875 18.192 L 10.236 24.712 Z M 13.881 21.653 C 12.744 21.653 12.46 20.332 12.46 20.131 C 12.46 20.031 12.878 18.443 12.928 18.192 C 13.78 14.865 15.419 14.782 15.669 14.782 C 16.422 14.782 16.84 15.467 16.84 16.454 C 16.84 17.306 16.388 18.961 16.104 19.663 C 15.603 20.817 14.733 21.653 13.881 21.653 Z"></path>
                    <path  className={hoveringAlt ? `d_fig fill-highlight stroke-none ${hStyle}` : `d_fig fill-black stroke-none ${hStyle}`}
                          d="M 22.652 20.137 C 22.396 20.182 22.162 20.382 22.162 20.661 C 22.162 20.861 22.296 21.006 22.541 21.006 C 22.708 21.006 23.053 20.884 23.053 20.382 C 23.053 19.691 22.329 19.413 21.638 19.413 C 20.145 19.413 19.677 20.471 19.677 21.04 C 19.677 21.151 19.677 21.552 20.089 21.864 C 20.345 22.065 20.535 22.099 21.114 22.21 C 21.504 22.288 22.14 22.399 22.14 22.979 C 22.14 23.269 21.928 23.637 21.616 23.848 C 21.203 24.116 20.657 24.127 20.479 24.127 C 20.211 24.127 19.454 24.082 19.175 23.637 C 19.743 23.614 19.821 23.157 19.821 23.024 C 19.821 22.689 19.52 22.611 19.387 22.611 C 19.208 22.611 18.751 22.745 18.751 23.358 C 18.751 24.015 19.442 24.439 20.479 24.439 C 22.418 24.439 22.831 23.068 22.831 22.6 C 22.831 21.597 21.738 21.385 21.326 21.307 C 20.791 21.207 20.356 21.129 20.356 20.661 C 20.356 20.46 20.546 19.725 21.627 19.725 C 22.05 19.725 22.485 19.847 22.652 20.137 Z"></path>
                </g>

            </svg>
        </Html>
    </group>

}
