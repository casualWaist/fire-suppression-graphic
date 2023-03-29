import { Html } from "@react-three/drei";
import React, {useContext, useEffect, useState} from "react"
import { ToolContext } from "./FireModelGLTF.jsx"

export default function Z_fig({ nodes }){

    const [ toolValues, setToolValues ] = useContext(ToolContext)  // incoming range 1 - 9, default 5
    const [ hovering, setHovering ] = useState(false)
    const centerOffset = -0.5 * (toolValues.z.value - 1) * 0.125 + 0.25  // range -0.25 - 0.25
    const heightPx = 15 * (toolValues.z.value - 1) * 0.125 + 20  // range 20 - 35
    const callSetToolValues = (cpReturn) => {
        setToolValues((currentToolValues) => {
            if (cpReturn){
                currentToolValues.flyOver = false
                currentToolValues.flyOverTool = null
                currentToolValues.focus = null

                return {...currentToolValues}
            }
            currentToolValues.flyOver = true
            currentToolValues.flyOverTool = "z"
            currentToolValues.focus = "z"

            return {...currentToolValues}
        })
    }

    useEffect(() => {
        setHovering(toolValues.focus === 'z')
    }, [toolValues.flyOver, toolValues.focus])

    return <group position={[ nodes.z_fig.position.x + 1 + centerOffset * 0.25,
                             nodes.z_fig.position.y + 0.075 - centerOffset,
                             nodes.z_fig.position.z - 0.99 ]}
                 scale={[ 1 - centerOffset * 0.75, 0.95 - centerOffset * 0.75, 1 ]}
    >
        <Html transform occlude>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="w-5 h-[7.5rem] border-b-[0.75px] border-t-[0.75px] border-black
                            [@media(any-hover:none)]:bg-gradient-to-t from-accent to-accentTrans z-10"
                 viewBox={`${ -(Math.round(heightPx) - 20) * 0.5 } 
                           ${ -(Math.round(heightPx) - 20) * 0.5 }
                           ${ 7 + Math.round(heightPx) - 20  }
                           ${ 271.1 + Math.round(heightPx) - 20 }`}
                 onClick={ ()=>{ callSetToolValues(toolValues.flyOver) } }
                 onMouseEnter={ ()=>{ setHovering(true) } }
                 onTouchStart={ ()=>{ setHovering(true) } }
                 onTouchEnd={ ()=>{ setHovering(false) } }
                 onMouseLeave={ ()=>{ setHovering(false) } }>

                <g id="z_fig" transform="matrix(1.398344, 0, 0, 1.398344, -83.695084, 47.085045)">
                    <path className={hovering ? "d_fig fill-highlight stroke-none" : "d_fig fill-black stroke-none"}
                          d="M 60.858 64.785 C 61.372 64.199 61.79 63.829 62.388 63.291 C 63.105 62.669 63.416 62.37 63.583 62.191 C 64.42 61.366 64.839 60.672 64.839 60.577 C 64.839 60.481 64.743 60.481 64.719 60.481 C 64.635 60.481 64.612 60.529 64.552 60.613 C 64.253 61.127 63.966 61.378 63.655 61.378 C 63.404 61.378 63.273 61.27 63.045 60.983 C 62.794 60.684 62.591 60.481 62.244 60.481 C 61.372 60.481 60.846 61.569 60.846 61.82 C 60.846 61.856 60.858 61.928 60.965 61.928 C 61.061 61.928 61.073 61.88 61.109 61.796 C 61.312 61.318 61.886 61.234 62.113 61.234 C 62.364 61.234 62.603 61.318 62.854 61.426 C 63.308 61.617 63.5 61.617 63.619 61.617 C 63.703 61.617 63.751 61.617 63.811 61.605 C 63.416 62.071 62.77 62.645 62.232 63.135 L 61.025 64.247 C 60.296 64.988 59.853 65.694 59.853 65.777 C 59.853 65.849 59.913 65.873 59.985 65.873 C 60.057 65.873 60.069 65.861 60.152 65.718 C 60.344 65.419 60.726 64.976 61.168 64.976 C 61.419 64.976 61.539 65.06 61.778 65.359 C 62.005 65.622 62.209 65.873 62.591 65.873 C 63.763 65.873 64.432 64.355 64.432 64.08 C 64.432 64.032 64.42 63.96 64.301 63.96 C 64.205 63.96 64.193 64.008 64.157 64.128 C 63.894 64.833 63.189 65.12 62.723 65.12 C 62.472 65.12 62.232 65.036 61.981 64.929 C 61.503 64.737 61.372 64.737 61.216 64.737 C 61.097 64.737 60.965 64.737 60.858 64.785 Z"></path>
                    <line x1="62.346" y1="-31.772" x2="62.346" y2="56.666"
                          className="z_fig_diagram fill-none stroke-black"></line>
                    <line x1="62.346" y1="70.327" x2="62.346" y2="158.765"
                          className="z_fig_diagram fill-none stroke-black"></line>
                    <path className="z_fig_diagram fill-black stroke-none"
                          d="M 62.347 -33.672 L 64.408 -29.549 L 60.285 -29.549 L 62.347 -33.672 Z"></path>
                    <path transform="matrix(1, 0, 0, -1, 0, 0)" className="z_fig_diagram fill-black stroke-none"
                          d="M 62.347 -160.207 L 64.408 -156.084 L 60.285 -156.084 L 62.347 -160.207 Z"></path>
                </g>

            </svg>
        </Html>
    </group>

}
