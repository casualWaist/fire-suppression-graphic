import {Html} from "@react-three/drei";
import React, {useContext, useEffect, useState} from "react";
import {ToolContext} from "./FireModelGLTF.jsx";

export default function Gamma_05_fig({nodes}){

    const [ toolValues, setToolValues ] = useContext(ToolContext)
    const [ hovering, setHovering ] = useState(false)
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
            currentToolValues.flyOverTool = "gamma"
            currentToolValues.focus = "gamma"

            return {...currentToolValues}
        })
    }

    useEffect(() => {
        setHovering(toolValues.focus === 'gamma')
    }, [toolValues.flyOver, toolValues.focus])

    return <group position={nodes.gamma_05_fig.position}>
        <Html transform occlude>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3"
                 viewBox="0 0 11.7 15.7"
                 onClick={ ()=>{ callSetToolValues(toolValues.flyOver) } }
                 onMouseEnter={ ()=>{ setHovering(true) } }
                 onTouchStart={ ()=>{ setHovering(true) } }
                 onTouchEnd={ ()=>{ setHovering(false) } }
                 onMouseLeave={ ()=>{ setHovering(false) } }>

                <g id="page1" transform="matrix(1.398344, 0, 0, 1.398344, -79.787895, -76.603027)">
                    <path className={hovering ? `d_fig fill-highlight stroke-none ${hStyle}` : `d_fig fill-black stroke-none ${hStyle}`}
                          d="M2.199751-7.364384C2.199751-7.723039 1.912827-7.950187 1.625903-7.950187C1.291158-7.950187 1.0401-7.687173 1.0401-7.364384C1.0401-7.053549 1.303113-6.790535 1.613948-6.790535C1.972603-6.790535 2.199751-7.07746 2.199751-7.364384Z"
                          transform="matrix(1, 0, 0, 1, 59.50027847290039, 62.7314338684082)"></path>
                    <path className={hovering ? `d_fig fill-highlight stroke-none ${hStyle}` : `d_fig fill-black stroke-none ${hStyle}`}
                          d="M7.400249-6.838356C7.806725-7.483935 8.177335-7.770859 8.787049-7.81868C8.9066-7.830635 9.002242-7.830635 9.002242-8.045828C9.002242-8.093649 8.978331-8.16538 8.870735-8.16538C8.655542-8.16538 8.141469-8.141469 7.926276-8.141469C7.579577-8.141469 7.220922-8.16538 6.886177-8.16538C6.790535-8.16538 6.670984-8.16538 6.670984-7.938232C6.670984-7.830635 6.77858-7.81868 6.826401-7.81868C7.268742-7.782814 7.316563-7.567621 7.316563-7.424159C7.316563-7.244832 7.149191-6.969863 7.137235-6.957908L3.383313-1.004234L2.546451-7.44807C2.546451-7.79477 3.16812-7.81868 3.299626-7.81868C3.478954-7.81868 3.58655-7.81868 3.58655-8.045828C3.58655-8.16538 3.455044-8.16538 3.419178-8.16538C3.21594-8.16538 2.976837-8.141469 2.773599-8.141469H2.10411C1.231382-8.141469 .872727-8.16538 .860772-8.16538C.789041-8.16538 .645579-8.16538 .645579-7.950187C.645579-7.81868 .729265-7.81868 .920548-7.81868C1.530262-7.81868 1.566127-7.711083 1.601993-7.412204L2.558406-.035866C2.594271 .215193 2.594271 .251059 2.761644 .251059C2.905106 .251059 2.964882 .215193 3.084433 .02391L7.400249-6.838356Z"
                          transform="matrix(1, 0, 0, 1, 56.413265228271484, 65.75342559814453)"></path>
                </g>

            </svg>
        </Html>
    </group>

}
