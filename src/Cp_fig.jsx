import { Html } from "@react-three/drei"
import React, {useContext, useEffect, useState} from "react"
import { ToolContext } from "./FireModelGLTF.jsx"

export default function Cp_fig({nodes}){

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
            currentToolValues.flyOverTool = "cp"
            currentToolValues.focus = "cp"

            return {...currentToolValues}
        })
    }

    useEffect(() => {
        setHovering(toolValues.focus === "cp")
        setHoveringAlt(toolValues.focus === "tamb")
    }, [toolValues.flyOver, toolValues.focus])

    return<group position={[ nodes.cp_fig.position.x, nodes.cp_fig.position.y + 2, nodes.cp_fig.position.z ]}>
        <Html transform occlude>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"
                 viewBox="0 0 20.4 30.3"
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

                <g transform="matrix(1, 0, 0, 1, -1.14, -7.723)">
                    <path className={hoveringAlt ? `d_fig fill-highlight stroke-none ${hStyle}` : `d_fig fill-black stroke-none ${hStyle}`}
                          d="M 7.71 9.86 C 7.81 9.459 7.844 9.308 8.095 9.242 C 8.228 9.208 8.78 9.208 9.131 9.208 C 10.803 9.208 11.589 9.275 11.589 10.579 C 11.589 10.83 11.522 11.465 11.421 12.084 L 11.405 12.284 C 11.405 12.351 11.472 12.451 11.572 12.451 C 11.739 12.451 11.739 12.368 11.789 12.1 L 12.274 9.141 C 12.307 8.991 12.307 8.957 12.307 8.907 C 12.307 8.723 12.207 8.723 11.873 8.723 L 2.728 8.723 C 2.344 8.723 2.327 8.74 2.227 9.041 L 1.207 12.05 C 1.19 12.084 1.14 12.267 1.14 12.284 C 1.14 12.368 1.207 12.451 1.307 12.451 C 1.441 12.451 1.474 12.384 1.541 12.167 C 2.243 10.144 2.595 9.208 4.818 9.208 L 5.938 9.208 C 6.339 9.208 6.506 9.208 6.506 9.392 C 6.506 9.442 6.506 9.476 6.423 9.776 L 4.183 18.754 C 4.016 19.406 3.982 19.573 2.21 19.573 C 1.792 19.573 1.675 19.573 1.675 19.891 C 1.675 20.058 1.859 20.058 1.943 20.058 C 2.361 20.058 2.795 20.024 3.213 20.024 L 5.821 20.024 C 6.239 20.024 6.69 20.058 7.108 20.058 C 7.292 20.058 7.459 20.058 7.459 19.74 C 7.459 19.573 7.342 19.573 6.908 19.573 C 5.403 19.573 5.403 19.422 5.403 19.172 C 5.403 19.155 5.403 19.038 5.47 18.77 L 7.71 9.86 Z"></path>
                    <path className={hoveringAlt ? `d_fig fill-highlight stroke-none ${hStyle}` : `d_fig fill-black stroke-none ${hStyle}`}
                          d="M 16.351 19.512 C 15.694 18.72 15.605 18.631 15.214 18.341 C 14.702 17.951 14.022 17.65 13.286 17.65 C 11.927 17.65 10.991 18.843 10.991 20.169 C 10.991 21.473 11.916 22.677 13.242 22.677 C 14.156 22.677 15.226 22.198 16.151 20.816 C 16.808 21.607 16.897 21.696 17.287 21.986 C 17.8 22.376 18.48 22.677 19.216 22.677 C 20.575 22.677 21.511 21.484 21.511 20.158 C 21.511 18.854 20.586 17.65 19.26 17.65 C 18.346 17.65 17.276 18.13 16.351 19.512 Z M 16.686 19.924 C 17.109 19.222 18.023 18.074 19.338 18.074 C 20.531 18.074 21.199 19.155 21.199 20.158 C 21.199 21.239 20.375 22.075 19.394 22.075 C 18.413 22.075 17.756 21.261 16.686 19.924 Z M 15.816 20.403 C 15.393 21.105 14.479 22.253 13.164 22.253 C 11.971 22.253 11.303 21.172 11.303 20.169 C 11.303 19.088 12.127 18.252 13.108 18.252 C 14.089 18.252 14.746 19.066 15.816 20.403 Z"></path>
                    <path className={hovering ? `d_fig fill-highlight stroke-none ${hStyle}` : `d_fig fill-black stroke-none ${hStyle}`}
                          d="M 9.108 27.039 C 8.79 27.039 8.64 27.039 8.406 27.239 C 8.305 27.323 8.121 27.574 8.121 27.841 C 8.121 28.176 8.372 28.376 8.69 28.376 C 9.091 28.376 9.542 28.042 9.542 27.373 C 9.542 26.571 8.773 25.952 7.62 25.952 C 5.43 25.952 3.24 28.343 3.24 30.717 C 3.24 32.171 4.143 33.492 5.848 33.492 C 8.121 33.492 9.559 31.72 9.559 31.502 C 9.559 31.402 9.459 31.319 9.392 31.319 C 9.342 31.319 9.325 31.335 9.175 31.486 C 8.105 32.907 6.517 33.157 5.881 33.157 C 4.728 33.157 4.36 32.154 4.36 31.319 C 4.36 30.733 4.644 29.112 5.246 27.975 C 5.681 27.189 6.583 26.287 7.637 26.287 C 7.854 26.287 8.773 26.32 9.108 27.039 Z"></path>
                    <path className={hovering ? `d_fig fill-highlight stroke-none ${hStyle}` : `d_fig fill-black stroke-none ${hStyle}`}
                          d="M 10.196 37.181 C 10.107 37.537 10.084 37.627 9.638 37.627 C 9.482 37.627 9.349 37.627 9.349 37.838 C 9.349 37.939 9.449 37.994 9.505 37.994 C 9.616 37.994 9.661 37.961 10.485 37.961 C 11.288 37.961 11.522 37.994 11.6 37.994 C 11.645 37.994 11.812 37.994 11.812 37.783 C 11.812 37.627 11.656 37.627 11.522 37.627 C 10.987 37.627 10.987 37.56 10.987 37.459 C 10.987 37.381 11.188 36.59 11.522 35.286 C 11.667 35.542 12.012 35.944 12.614 35.944 C 13.985 35.944 15.412 34.361 15.412 32.745 C 15.412 31.642 14.698 30.917 13.807 30.917 C 13.138 30.917 12.603 31.374 12.28 31.709 C 12.046 30.917 11.299 30.917 11.188 30.917 C 10.786 30.917 10.508 31.174 10.329 31.519 C 10.073 32.021 9.95 32.589 9.95 32.622 C 9.95 32.723 10.028 32.767 10.118 32.767 C 10.263 32.767 10.274 32.723 10.352 32.433 C 10.497 31.865 10.697 31.229 11.154 31.229 C 11.433 31.229 11.511 31.486 11.511 31.753 C 11.511 31.865 11.466 32.132 11.444 32.221 L 10.196 37.181 Z M 12.246 32.4 C 12.302 32.21 12.302 32.188 12.469 31.987 C 12.893 31.486 13.372 31.229 13.773 31.229 C 14.33 31.229 14.542 31.775 14.542 32.277 C 14.542 32.689 14.297 33.882 13.963 34.539 C 13.673 35.141 13.138 35.632 12.614 35.632 C 11.856 35.632 11.678 34.762 11.678 34.684 C 11.678 34.662 11.7 34.539 11.711 34.506 L 12.246 32.4 Z"></path>
                </g>

            </svg>
        </Html>
    </group>

}
