import {Html} from "@react-three/drei";
import React, {useContext, useEffect, useState} from "react";
import {ToolContext} from "./FireModelGLTF.jsx";

export default function Mdot_fig({nodes}){

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
            currentToolValues.flyOverTool = "mdot_focus"
            currentToolValues.focus = "mdot"

            return {...currentToolValues}
        })
    }

    useEffect(() => {
        setHovering(toolValues.focus === 'mdot')
    }, [toolValues.flyOver, toolValues.focus])

    return <group position={nodes.mdot_fig.position} >
        <Html transform occlude>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-5"
                 viewBox="0 0 23 43.3"
                 onClick={ ()=>{ callSetToolValues(toolValues.flyOver) } }
                 onMouseEnter={ ()=>{ setHovering(true) } }
                 onTouchStart={ ()=>{ setHovering(true) } }
                 onTouchEnd={ ()=>{ setHovering(false) } }
                 onMouseLeave={ ()=>{ setHovering(false) } }>

                <g id="mdot_fig" transform="matrix(1.398344, 0, 0, 1.398344, -74.336014, -48.827393)">
                    <path d="M2.199751-7.364384C2.199751-7.723039 1.912827-7.950187 1.625903-7.950187C1.291158-7.950187 1.0401-7.687173 1.0401-7.364384C1.0401-7.053549 1.303113-6.790535 1.613948-6.790535C1.972603-6.790535 2.199751-7.07746 2.199751-7.364384Z"
                          transform="matrix(1, 0, 0, 1, 59.90707778930664, 65.75342559814453)"
                          className={hovering ? `d_fig fill-highlight stroke-none ${hStyle}` : `d_fig fill-black stroke-none ${hStyle}`}/>
                    <path transform="matrix(1, 0, 0, 1, 56.413265228271484, 65.75342559814453)"
                          className={hovering ? `d_fig fill-highlight stroke-none ${hStyle}` : `d_fig fill-black stroke-none ${hStyle}`}
                          d="M2.462765-3.502864C2.486675-3.574595 2.785554-4.172354 3.227895-4.554919C3.53873-4.841843 3.945205-5.033126 4.411457-5.033126C4.889664-5.033126 5.057036-4.674471 5.057036-4.196264C5.057036-4.124533 5.057036-3.88543 4.913574-3.323537L4.614695-2.092154C4.519054-1.733499 4.291905-.848817 4.267995-.71731C4.220174-.537983 4.148443-.227148 4.148443-.179328C4.148443-.011955 4.27995 .119552 4.459278 .119552C4.817933 .119552 4.877709-.155417 4.985305-.585803L5.702615-3.443088C5.726526-3.53873 6.348194-5.033126 7.663263-5.033126C8.141469-5.033126 8.308842-4.674471 8.308842-4.196264C8.308842-3.526775 7.84259-2.223661 7.579577-1.506351C7.47198-1.219427 7.412204-1.06401 7.412204-.848817C7.412204-.310834 7.782814 .119552 8.356663 .119552C9.468493 .119552 9.886924-1.637858 9.886924-1.709589C9.886924-1.769365 9.839103-1.817186 9.767372-1.817186C9.659776-1.817186 9.647821-1.78132 9.588045-1.578082C9.313076-.621669 8.870735-.119552 8.392528-.119552C8.272976-.119552 8.081694-.131507 8.081694-.514072C8.081694-.824907 8.225156-1.207472 8.272976-1.338979C8.488169-1.912827 9.026152-3.323537 9.026152-4.016936C9.026152-4.734247 8.607721-5.272229 7.699128-5.272229C6.898132-5.272229 6.252553-4.817933 5.774346-4.112578C5.738481-4.758157 5.34396-5.272229 4.447323-5.272229C3.383313-5.272229 2.82142-4.519054 2.606227-4.220174C2.570361-4.901619 2.080199-5.272229 1.554172-5.272229C1.207472-5.272229 .932503-5.104857 .705355-4.65056C.490162-4.220174 .32279-3.490909 .32279-3.443088S.37061-3.335492 .454296-3.335492C.549938-3.335492 .561893-3.347447 .633624-3.622416C.812951-4.327771 1.0401-5.033126 1.518306-5.033126C1.793275-5.033126 1.888917-4.841843 1.888917-4.483188C1.888917-4.220174 1.769365-3.753923 1.685679-3.383313L1.350934-2.092154C1.303113-1.865006 1.171606-1.327024 1.111831-1.111831C1.028144-.800996 .896638-.239103 .896638-.179328C.896638-.011955 1.028144 .119552 1.207472 .119552C1.350934 .119552 1.518306 .047821 1.613948-.131507C1.637858-.191283 1.745455-.609714 1.80523-.848817L2.068244-1.924782L2.462765-3.502864Z"/>
                    <path d="M 54.023 53.345 C 55.454 54.966 60.543 44.417 56.685 40.048"
                          className="mdot_fig_diagram fill-none stroke-black"/>
                    <polyline points="53.16 34.918 61.51 42.069 69.608 34.918"
                              transform="matrix(-1, 0, 0, -1, 122.768033, 76.987012)"
                              className="mdot_fig_diagram fill-none stroke-black"/>
                    <path d="M 61.219 40.216 C 62.65 38.596 67.739 49.145 63.881 53.513"
                          transform="matrix(-1, 0, 0, -1, 129.965447, 93.56139)"
                          className="mdot_fig_diagram fill-none stroke-black"/>
                </g>

            </svg>
        </Html>
    </group>

}
