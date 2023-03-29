import { Html } from "@react-three/drei"
import React, { useContext, useEffect, useState } from "react"
import { ToolContext } from "./FireModelGLTF.jsx"

export default function Z_l_fig({nodes}){

    const [ toolValues, setToolValues ] = useContext(ToolContext)  // incoming range 2 - 10, default 2
    const [ hovering, setHovering ] = useState(false)
    const centerOffset = 0.1875 * (toolValues.z_l.value - 2) * 0.125  // range 0.0 - 0.1875
    const heightPx = 15 * (toolValues.z_l.value - 2) * 0.125 + 20  // range 20 - 35
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
            currentToolValues.flyOverTool = "z_l_focus"
            currentToolValues.focus = "z_l"

            return {...currentToolValues}
        })
    }

    useEffect(() => {
        setHovering(toolValues.focus === 'z_l')
    }, [toolValues.flyOver, toolValues.focus])

    return <group position={[ nodes.z_l_fig.position.x,
                              nodes.z_l_fig.position.y + centerOffset,
                              nodes.z_l_fig.position.z ]}
                  scale={[ 1 + centerOffset * 4, 1 + centerOffset * 4, 1 ]}
    >
        <Html transform occlude>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className={`w-[${heightPx * 0.5}px] h-5 border-t-[0.75px] border-b-[0.75px] border-black
                            [@media(any-hover:none)]:bg-gradient-to-t from-accent to-accentTrans z-10`}
                 viewBox={`${ -(Math.round(heightPx) - 20) * 0.5 } 
                           ${ -(Math.round(heightPx) - 20) * 0.5 }
                           ${ 26.8 + (Math.round(heightPx) - 20) }
                           ${ 38 + (Math.round(heightPx) - 20) }`}
                 onClick={ ()=>{ callSetToolValues(toolValues.flyOver) } }
                 onMouseEnter={ ()=>{ setHovering(true) } }
                 onTouchStart={ ()=>{ setHovering(true) } }
                 onTouchEnd={ ()=>{ setHovering(false) } }
                 onMouseLeave={ ()=>{ setHovering(false) } }>

                <g id="z_l_fig" transform="matrix(1.398344, 0, 0, 1.398344, -71.595215, -70.568832)">
                    <path transform="matrix(1, 0, 0, 1, 56.413265228271484, 65.75342559814453)"
                          className={hovering ? "d_fig fill-highlight stroke-none" : "d_fig fill-black stroke-none"}
                          d="M1.518306-.968369C2.032379-1.554172 2.450809-1.924782 3.048568-2.462765C3.765878-3.084433 4.076712-3.383313 4.244085-3.56264C5.080946-4.387547 5.499377-5.080946 5.499377-5.176588S5.403736-5.272229 5.379826-5.272229C5.296139-5.272229 5.272229-5.224408 5.212453-5.140722C4.913574-4.62665 4.62665-4.375592 4.315816-4.375592C4.064757-4.375592 3.93325-4.483188 3.706102-4.770112C3.455044-5.068991 3.251806-5.272229 2.905106-5.272229C2.032379-5.272229 1.506351-4.184309 1.506351-3.93325C1.506351-3.897385 1.518306-3.825654 1.625903-3.825654C1.721544-3.825654 1.733499-3.873474 1.769365-3.957161C1.972603-4.435367 2.546451-4.519054 2.773599-4.519054C3.024658-4.519054 3.263761-4.435367 3.514819-4.327771C3.969116-4.136488 4.160399-4.136488 4.27995-4.136488C4.363636-4.136488 4.411457-4.136488 4.471233-4.148443C4.076712-3.682192 3.431133-3.108344 2.893151-2.618182L1.685679-1.506351C.956413-.765131 .514072-.059776 .514072 .02391C.514072 .095641 .573848 .119552 .645579 .119552S.729265 .107597 .812951-.035866C1.004234-.334745 1.3868-.777086 1.829141-.777086C2.080199-.777086 2.199751-.6934 2.438854-.394521C2.666002-.131507 2.86924 .119552 3.251806 .119552C4.423412 .119552 5.092902-1.398755 5.092902-1.673724C5.092902-1.721544 5.080946-1.793275 4.961395-1.793275C4.865753-1.793275 4.853798-1.745455 4.817933-1.625903C4.554919-.920548 3.849564-.633624 3.383313-.633624C3.132254-.633624 2.893151-.71731 2.642092-.824907C2.163885-1.016189 2.032379-1.016189 1.876961-1.016189C1.75741-1.016189 1.625903-1.016189 1.518306-.968369Z"></path>
                    <path transform="matrix(1, 0, 0, 1, 61.851158142089844, 67.54668426513672)"
                          className={hovering ? "d_fig fill-highlight stroke-none" : "d_fig fill-black stroke-none"}
                          d="M2.088169-5.292154C2.096139-5.308095 2.12005-5.411706 2.12005-5.419676C2.12005-5.459527 2.088169-5.531258 1.992528-5.531258L1.187547-5.467497C.892653-5.443587 .828892-5.435616 .828892-5.292154C.828892-5.180573 .940473-5.180573 1.036115-5.180573C1.41868-5.180573 1.41868-5.132752 1.41868-5.061021C1.41868-5.037111 1.41868-5.021171 1.378829-4.877709L.390535-.924533C.358655-.797011 .358655-.67746 .358655-.669489C.358655-.175342 .765131 .079701 1.163636 .079701C1.506351 .079701 1.689664-.191283 1.777335-.366625C1.920797-.629639 2.040349-1.099875 2.040349-1.139726C2.040349-1.187547 2.016438-1.243337 1.912827-1.243337C1.841096-1.243337 1.817186-1.203487 1.817186-1.195517C1.801245-1.171606 1.761395-1.028144 1.737484-.940473C1.617933-.478207 1.466501-.143462 1.179577-.143462C.988294-.143462 .932503-.326775 .932503-.518057C.932503-.669489 .956413-.757161 .980324-.860772L2.088169-5.292154Z"></path>
                    <line x1="59.872" y1="58.999" x2="59.872" y2="53.339"
                          className="z_l_fig_diagram fill-none stroke-black"></line>
                    <line x1="59.872" y1="67.522" x2="59.872" y2="74.475"
                          className="z_l_fig_diagram fill-none stroke-black"></line>
                </g>

            </svg>
        </Html>
    </group>

}
