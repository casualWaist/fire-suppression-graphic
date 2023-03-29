import Tool from "./Tool.jsx"
import FlyOut from "./FlyOut.jsx"
import React, { useContext } from "react"
import { ToolContext } from "./FireModelGLTF.jsx"

export default function SideBar(){

    const [ toolValues, setToolValues ] = useContext(ToolContext)
    const updateFunction = (updates) => {
        setToolValues((currentToolValues) => {

        })
    }
    const focusFunction = (updates) => {
        setToolValues((currentToolValues) => {

        })
    }

    return <div className="fixed top-0 left-0 z-[26745878] w-1/3 h-screen overflow-scroll">

        <Tool nav={ false } cols={ 1 }/>
        <FlyOut tool={ `${toolValues.focus}_focus` }
                updateFunction={ updateFunction }
                focusFucntion={ focusFunction }
                active={ toolValues.flyOver }
        />

    </div>

}
