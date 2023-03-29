import { Html } from "@react-three/drei"
import React, {useContext, useEffect, useState} from "react"
import * as THREE from 'three'
import ToolInput from "./ToolInput.jsx";
import { ToolContext } from "./FireModelGLTF.jsx"

export default function D_fig({nodes}){

    const [ toolValues, setToolValues ] = useContext(ToolContext)  // incoming range 2 - 10, default 6
    const [ hovering, setHovering ] = useState(false)
    const centerOffset = -0.5 * (toolValues.d.value - 2) * 0.125 + 0.25  // range -0.25 - 0.25
    const heightPx = 15 * (toolValues.d.value - 2) * 0.125 + 20  // range 20 - 35
    const callSetToolValues = (cpReturn) => {
        setToolValues((currentToolValues) => {
            if (cpReturn){
                currentToolValues.flyOver = false
                currentToolValues.flyOverTool = null
                currentToolValues.focus = null

                return {...currentToolValues}
            }
            currentToolValues.flyOver = true
            currentToolValues.flyOverTool = "d"
            currentToolValues.focus = "d"

            return {...currentToolValues}
        })
    }

    useEffect(() => {
        setHovering(toolValues.focus === 'd')
    }, [toolValues.flyOver, toolValues.focus])

    return <group position={[ nodes.d_fig.position.x + 2 + centerOffset * 0.5,
                              nodes.d_fig.position.y - 0.01 + centerOffset,
                              nodes.d_fig.position.z + 1 ]}
                  scale={[ 1 - centerOffset * 2, 1 - centerOffset * 2, 1 ]}
    >
        <Html transform occlude>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="w-5 h-10 border-t-[0.75px] border-b-[0.75px] border-black
                            [@media(any-hover:none)]:bg-gradient-to-t from-accent to-accentTrans z-10"
                 viewBox={`${ -(Math.round(heightPx) - 20) * 0.5 } 
                           ${ -(Math.round(heightPx) - 20) * 0.5 }
                           ${ 5.6 + Math.round(heightPx) - 20  }
                           ${ 79.5 + Math.round(heightPx) - 20 }`}
                 onClick={ ()=>{ callSetToolValues(toolValues.flyOver) } }
                 onMouseEnter={ ()=>{ setHovering(true) } }
                 onTouchStart={ ()=>{ setHovering(true) } }
                 onTouchEnd={ ()=>{ setHovering(false) } }
                 onMouseLeave={ ()=>{ setHovering(false) } }>

                <g id="d_fig">
                    <path className={hovering ? "d_fig fill-highlight stroke-none" : "d_fig fill-black stroke-none"}
                          d="M 5.536 35.71 C 5.548 35.663 5.572 35.591 5.572 35.531 C 5.572 35.412 5.452 35.412 5.428 35.412 C 5.416 35.412 4.83 35.459 4.771 35.471 C 4.567 35.483 4.388 35.507 4.173 35.519 C 3.874 35.543 3.79 35.555 3.79 35.77 C 3.79 35.89 3.886 35.89 4.053 35.89 C 4.639 35.89 4.651 35.997 4.651 36.117 C 4.651 36.189 4.627 36.284 4.615 36.32 L 3.886 39.225 C 3.754 38.914 3.432 38.436 2.81 38.436 C 1.459 38.436 0 40.182 0 41.951 C 0 43.135 0.694 43.828 1.507 43.828 C 2.164 43.828 2.726 43.314 3.061 42.919 C 3.18 43.625 3.742 43.828 4.101 43.828 C 4.46 43.828 4.747 43.613 4.962 43.182 C 5.153 42.776 5.32 42.047 5.32 41.999 C 5.32 41.939 5.273 41.891 5.201 41.891 C 5.093 41.891 5.081 41.951 5.034 42.13 C 4.854 42.836 4.627 43.589 4.137 43.589 C 3.79 43.589 3.766 43.278 3.766 43.039 C 3.766 42.991 3.766 42.74 3.85 42.405 L 5.536 35.71 Z M 3.121 42.286 C 3.061 42.489 3.061 42.513 2.894 42.74 C 2.631 43.075 2.105 43.589 1.543 43.589 C 1.052 43.589 0.778 43.147 0.778 42.441 C 0.778 41.784 1.148 40.445 1.375 39.943 C 1.782 39.106 2.344 38.675 2.81 38.675 C 3.599 38.675 3.754 39.656 3.754 39.751 C 3.754 39.763 3.718 39.919 3.707 39.943 L 3.121 42.286 Z"></path>
                    <line x1="2.786" y1="2.377" x2="2.786" y2="31.144" className="d_fig_diagram fill-none stroke-black"></line>
                    <line x1="2.786" y1="48.466" x2="2.786" y2="77.232" className="d_fig_diagram fill-none stroke-black"></line>
                    <path className="d_fig_diagram fill-black stroke-none" d="M 2.787 0 L 4.848 4.123 L 0.725 4.123 L 2.787 0 Z"></path>
                    <path className="d_fig_diagram fill-black stroke-none"
                          d="M 2.787 79.479 L 4.848 75.356 L 0.725 75.356 L 2.787 79.479 Z"></path>
                </g>

            </svg>
        </Html>
    </group>

}
