import { Html } from "@react-three/drei";
import React, { useContext, useEffect, useState } from "react"
import { ToolContext } from "./FireModelGLTF.jsx"

export default function Hrr_fig({nodes}){

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
            currentToolValues.flyOverTool = "hrr"
            currentToolValues.focus = "hrr"

            return {...currentToolValues}
        })
    }

    useEffect(() => {
        setHovering(toolValues.focus === 'hrr')
    }, [toolValues.flyOver, toolValues.focus])

    return <group position={nodes.hrr_fig.position}>
        <Html transform occlude>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3"
                 viewBox="0 0 11.3 18.6"
                 onClick={ ()=>{ callSetToolValues(toolValues.flyOver) } }
                 onMouseEnter={ ()=>{ setHovering(true) } }
                 onTouchStart={ ()=>{ setHovering(true) } }
                 onTouchEnd={ ()=>{ setHovering(false) } }
                 onMouseLeave={ ()=>{ setHovering(false) } }>

                <g id="hrr_fig" transform="matrix(1.398344, 0, 0, 1.398344, -79.687592, -76.603027)">
                    <path transform="matrix(1, 0, 0, 1, 60.39856719970703, 62.7314338684082)"
                          className={hovering ? `d_fig fill-highlight stroke-none ${hStyle}` : `d_fig fill-black stroke-none ${hStyle}`}
                          d="M2.199751-7.364384C2.199751-7.723039 1.912827-7.950187 1.625903-7.950187C1.291158-7.950187 1.0401-7.687173 1.0401-7.364384C1.0401-7.053549 1.303113-6.790535 1.613948-6.790535C1.972603-6.790535 2.199751-7.07746 2.199751-7.364384Z"></path>
                    <path transform="matrix(1, 0, 0, 1, 56.413265228271484, 65.75342559814453)"
                          className={hovering ? `d_fig fill-highlight stroke-none ${hStyle}` : `d_fig fill-black stroke-none ${hStyle}`}
                          d="M5.092902-.071731C7.149191-.896638 8.679452-3.072478 8.679452-5.236364C8.679452-7.208966 7.388294-8.416438 5.71457-8.416438C3.156164-8.416438 .573848-5.66675 .573848-2.905106C.573848-1.028144 1.817186 .251059 3.550685 .251059C3.957161 .251059 4.351681 .191283 4.734247 .071731C4.662516 .789041 4.662516 .848817 4.662516 1.075965C4.662516 1.422665 4.662516 2.319303 5.618929 2.319303C7.041594 2.319303 7.567621 .083686 7.567621 .011955S7.519801-.107597 7.460025-.107597C7.388294-.107597 7.364384-.047821 7.328518 .083686C7.065504 .836862 6.443836 1.267248 5.917808 1.267248C5.308095 1.267248 5.152677 .848817 5.092902-.071731ZM2.940971-.131507C1.996513-.454296 1.542217-1.446575 1.542217-2.546451C1.542217-3.383313 1.853051-4.97335 2.642092-6.180822C3.526775-7.543711 4.710336-8.153425 5.642839-8.153425C6.886177-8.153425 7.723039-7.149191 7.723039-5.595019C7.723039-4.710336 7.304608-1.745455 5.057036-.430386C4.99726-1.0401 4.829888-1.75741 4.040847-1.75741C3.395268-1.75741 2.84533-1.111831 2.84533-.526027C2.84533-.394521 2.893151-.215193 2.940971-.131507ZM4.758157-.274969C4.327771-.083686 3.957161-.011955 3.622416-.011955C3.502864-.011955 3.084433-.011955 3.084433-.537983C3.084433-.968369 3.502864-1.518306 4.040847-1.518306C4.638605-1.518306 4.770112-1.111831 4.770112-.514072C4.770112-.442341 4.770112-.3467 4.758157-.274969Z"></path>
                </g>

            </svg>
        </Html>
    </group>

}
