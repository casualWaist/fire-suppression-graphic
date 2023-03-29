import { Canvas } from "@react-three/fiber"
import AtriumFireGraphic from "./AtriumFireGraphic.jsx"
import { OrbitControls } from "@react-three/drei"
import React, {useEffect, useRef, useState} from "react"
import NavBar from "./NavBar.jsx"
import SideBar from "./SideBar.jsx"

export const ToolContext = React.createContext(undefined)

export default function FireModelGLTF(){

    const [ width, setWidth ] = useState(window.innerWidth)
    const toolValues = useState({

        hrr: { value: 1000, units: 'kW', converts: ['kW']},
        chi_c: { value: 0.7, units: '', converts: ['']},
        z: { value: 5, units: 'm', converts: ['m']},
        tamb: { value: 20, units: '°C', converts: ['°C']},
        cp: { value: 1.005, units: 'kJ/kg/K', converts: ['kJ/kg/K']},
        d: { value: 6, units: 'm', converts: ['m']},
        gamma: { value: 1.0, units: '', converts: ['']},
        hrr_c: { value: 700.0, units: 'kW', converts: ['kW']},
        z_l: { value: 2.28112, units: 'm', converts: ['m']},
        mdot: { value: 10.4767, units: 'kg/s', converts: ['kg/s']},
        T_s: { value: 86.4825, units: '°C', converts: ['°C']},
        rho_s: { value: 0.981495, units: 'kg/m^3', converts: ['kg/m^3']},
        vdot: { value: 10.6742, units: 'm^3/s', converts: ['m^3/s']},
        vdot_max: { value: 7.92432, units: 'm^3/s', converts: ['m^3/s']},
        n: { value: 2, units: '', converts: ['']},
        s_min: { value: 2.07919, units: 'm', converts: ['m']},
        flyOver: false,
        flyOverTool: null,
        focus: null

    })

    useEffect(() => {
        function handleResize(){ setWidth(window.innerWidth) }
        window.addEventListener('resize', handleResize)

        return _ => { window.removeEventListener('resize', handleResize) }
    }, [])

    return <div className="w-screen h-screen">
        <ToolContext.Provider value={ toolValues }>
            <Canvas >
                <OrbitControls enableZoom={ false }
                               target={width > 1000 ? [-1.25, -0.75, 0] : [0, -0.25, 0]}/>
                <directionalLight />
                <ambientLight />
                <AtriumFireGraphic position={ [ 0, -0.75, 0 ] } />
            </Canvas>
            { width > 1000 ? <SideBar/> : <NavBar /> }
        </ToolContext.Provider>
    </div>

}
