import React, { useContext } from "react"
import ToolInput from "./ToolInput.jsx"
import { ToolContext } from "./FireModelGLTF.jsx"

export default function Tool({ nav = true, cols }){

    const [ toolValues, setToolValues ] = useContext(ToolContext)
    const callSetToolValues = (updates) => {
        setToolValues((currentToolValues) => {
            console.log(updates, currentToolValues)
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
    const focusSetToolValues = (update) => {
        setToolValues((currentToolValues) => {
            if (update.name === "reset"){
                currentToolValues.flyOver = false
                currentToolValues.flyOverTool = null
                currentToolValues.focus = null

                return {...currentToolValues}
            }
            currentToolValues.flyOver = true
            currentToolValues.flyOverTool = null
            currentToolValues.focus = update.name

            return {...currentToolValues}
        })
    }

    return <div className={`grid gap-2 p-2 grid-rows-[repeat(4, auto-fit)] place-content-center
                            ${nav ? 'bg-liteTrans backdrop-blur rounded-2xl' : 'bg-white'} overflow-scroll`}>
        <h2 className="text-2xl p-2 font-bold">Inputs</h2>
        <div className={`grid gap-2 grid-cols-${ cols } p-2`}>
            <ToolInput
                header="Fire Parameters"
                updateFunction={ callSetToolValues }
                focusFunction={ focusSetToolValues }
                inputs={{
                   'Heat Release Rate': {
                       symbol: 'hrr_fig',
                       type: 'number',
                       value: toolValues.hrr.value,
                       units: toolValues.hrr.units,
                       min: '0',
                       max: '1050'
                   },
                   'Convective Fraction': {
                       symbol: 'chi_c_fig',
                       type: 'number',
                       value: toolValues.chi_c.value,
                       units: toolValues.chi_c.units,
                       min: '0',
                       max: '28'
                   }
                }}/>
            <ToolInput
                header="Spatial Parameters"
                updateFunction={ callSetToolValues }
                focusFunction={ focusSetToolValues }
                inputs={{
                   'Smoke Layer Interface Height': {
                       symbol: 'z_fig',
                       type: 'number',
                       value: toolValues.z.value,
                       units: toolValues.z.units,
                       min: '1',
                       max: '9'
                   }
                }}/>
            <ToolInput
                header="Ambient Parameters"
                updateFunction={ callSetToolValues }
                focusFunction={ focusSetToolValues }
                inputs={{
                    'Ambient Temperature': {
                        symbol: 'tamb_fig',
                        type: 'number',
                        value: toolValues.tamb.value,
                        units: toolValues.tamb.units,
                        min: '',
                        max: ''
                    },
                    'Specific Heat of Air': {
                        symbol: 'cp_fig',
                        type: 'number',
                        value: toolValues.cp.value,
                        units: toolValues.cp.units,
                        min: '',
                        max: ''
                    }
                }}/>
            <ToolInput
                header="Plugholing Parameters"
                updateFunction={ callSetToolValues }
                focusFunction={ focusSetToolValues }
                inputs={{
                    'Smoke Layer Depth Below Inlet': {
                        symbol: 'd_fig',
                        type: 'number',
                        value: toolValues.d.value,
                        units: toolValues.d.units,
                        min: '2',
                        max: '10'
                    },
                    'Vent Location': {
                        symbol: 'gamma_fig',
                        type: 'checkbox',
                        value: toolValues.gamma.value,
                        units: toolValues.gamma.units,
                        min: '',
                        max: ''
                    }
                }}/>
        </div>
        <h2 className="text-2xl p-2 font-bold">Outputs</h2>
        <div  className={`grid gap-2 grid-cols-${ cols } p-2`}>
            <ToolInput
                header="Fire"
                updateFunction={ callSetToolValues }
                focusFunction={ focusSetToolValues }
                inputs={{
                    'Convective Heat Release Rate': {
                        symbol: 'hrr_c_fig',
                        type: 'number',
                        value: toolValues.hrr_c.value,
                        units: toolValues.hrr_c.units,
                       min: 'ro',
                       max: ''
                    },
                }}/>
            <ToolInput
                header="Mass Production of Smoke"
                updateFunction={ callSetToolValues }
                focusFunction={ focusSetToolValues }
                inputs={{
                   'Limiting Elevation': {
                       symbol: 'z_l_fig',
                       type: 'number',
                       value: toolValues.z_l.value,
                       units: toolValues.z_l.units,
                       min: 'ro',
                       max: 10.0
                   },
                   'Mass Production Rate': {
                       symbol: 'mdot_fig',
                       type: 'number',
                       value: toolValues.mdot.value,
                       units: toolValues.mdot.units,
                       min: 'ro',
                       max: ''
                   },
                }}/>
            <ToolInput
                header="Volumetric Flow Rate"
                updateFunction={ callSetToolValues }
                focusFunction={ focusSetToolValues }
                inputs={{
                    'Smoke Temperature': {
                        symbol: 'T_s_fig',
                        type: 'number',
                        value: toolValues.T_s.value,
                        units: toolValues.T_s.units,
                        min: 'ro',
                        max: ''
                    },
                    'Density of Smoke': {
                        symbol: 'rho_s_fig',
                        type: 'number',
                        value: toolValues.rho_s.value,
                        units: toolValues.rho_s.units,
                        min: 'ro',
                        max: ''
                    },
                    'Volumetric Flow Rate': {
                        symbol: 'vdot_fig',
                        type: 'number',
                        value: toolValues.vdot.value,
                        units: toolValues.vdot.units,
                        min: 'ro',
                        max: ''
                    },
                }}/>
            <ToolInput
                header="Plugholing"
                updateFunction={ callSetToolValues }
                focusFunction={ focusSetToolValues }
                inputs={{
                    'Max Volumetric Flow Rate per Vent': {
                        symbol: 'vdot_max_fig',
                        type: 'number',
                        value: toolValues.vdot_max.value,
                        units: toolValues.vdot_max.units,
                        min: 'ro',
                        max: ''
                    },
                    'Exhaust Inlets Required': {
                        symbol: 'n_fig',
                        type: 'number',
                        value: toolValues.n.value,
                        units: toolValues.n.units,
                        min: 'ro',
                        max: ''
                    },
                    'Minimum Edge to Edge Separation': {
                        symbol: 's_min_fig',
                        type: 'number',
                        value: toolValues.s_min.value,
                        units: toolValues.s_min.units,
                        min: 'ro',
                        max: ''
                    },
                }}/>
        </div>
    </div>

}
