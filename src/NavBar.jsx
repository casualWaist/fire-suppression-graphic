import React, { useContext, useRef, useState } from "react"
import Tool from "./Tool.jsx"
import FlyOut from "./FlyOut.jsx"
import { ToolContext } from "./FireModelGLTF.jsx"


export default function NavBar(){

    const [ toolValues, setToolValues ] = useContext(ToolContext)
    const [ closed, setClosed ] = useState(true)
    const barRef = useRef()

    const updateFunction = (updates) => {
        setToolValues((currentToolValues) => {
            switch (updates.name){
                case "d": {
                    currentToolValues.z.value = 11 - updates.value
                    currentToolValues.d.value = updates.value
                    break
                }
                case "z": {
                    currentToolValues.d.value = 11 - updates.value
                    currentToolValues.z.value = updates.value
                    break
                }
                case "hrr": {
                    currentToolValues.hrr.value = updates.value
                    currentToolValues.hrr_c.value = (updates.value * currentToolValues.chi_c.value).toFixed(5)
                    currentToolValues.z_l.value = (currentToolValues.hrr_c.value ** 0.4 * 0.166).toFixed(5)
                    break
                }
                case "chi_c": {
                    currentToolValues.hrr_c.value = (updates.value * currentToolValues.hrr.value).toFixed(5)
                    currentToolValues.z_l.value = (currentToolValues.hrr_c.value ** 0.4 * 0.166).toFixed(5)
                }
                default: currentToolValues[updates.name].value = updates.value
            }

            return {...currentToolValues}
        })
    }
    const focusFunction = (updates) => {
        setToolValues((currentToolValues) => {

            return {...currentToolValues}
        })
    }

    return <>
        <button className="fixed top-0 h-[6%] z-[26745879] border-2 border-accent bg-accentTrans
                           [@media(any-hover:hover){&:hover}]:hover:bg-highlight
                           [@media(any-hover:none)]:text-highlight
                           shadow-inner m-4 w-1/12 rounded-2xl text-accent drop-shadow-md"
                onClick={()=>setClosed(!closed)}>•••</button>
        <div ref={ barRef } className={`fixed grid place-content-center top-[10%] z-[26745878] p-2 w-screen h-screen
                                     ${ closed ? '-translate-y-[420%]' : '' }
                                     transition ease-in-out duration-200`}>
            <div className="w-7/8 h-4/5 overflow-scroll">
                <Tool cols={ window.innerWidth > 600 ? 2 : 1 }/>
            </div>
            <FlyOut tool={ toolValues.flyOverTool }
                    toolValues={ toolValues }
                    updateFunction={ updateFunction }
                    focusFunction={ focusFunction }
                    active={ toolValues.flyOver }
                    side={ false }
            />
        </div>
    </>
}
