import * as THREE from "three"
import smokeVertexShader from "./smokeVertexShader.glsl"
import smokeFragmentShader from "./smokeFragmentShader.glsl"
import React, { useRef } from "react"
import { shaderMaterial } from "@react-three/drei"
import {extend, useFrame, useThree} from "@react-three/fiber"

const SmokeMaterial = shaderMaterial({

    uTime: 0,
    uBigWavesElevation: 0.02,
    uBigWavesFrequency: new THREE.Vector2(4, 1.5),
    uBigWavesSpeed: 0.75,

    uSmallWavesElevation: 0.07,
    uSmallWavesFrequency: 3,
    uSmallWavesSpeed: 0.2,
    uSmallIterations: 4,

    uDepthColor: new THREE.Color("#222"),
    uSurfaceColor: new THREE.Color("#888"),
    uAlphaA: 0.75,
    uAlphaB: 0.5,
    uColorOffset: 0.08,
    uColorMultiplier: 5,
    uYPos: 0

}, smokeVertexShader, smokeFragmentShader)

extend({ SmokeMaterial })

export default function Smoke({ smokeGeometry, smokePosition, smokeScale, smokeRotation,
                              uBigWavesElevation, uBigWavesFrequency, uBigWavesSpeed,
                              uSmallWavesElevation, uSmallWavesFrequency, uSmallWavesSpeed,
                              uSmallIterations, uAlphaA, uAlphaB,
                              uColorOffset, uColorMultiplier}){

    const smokeMaterial = useRef()
    const smokeMesh = useRef()
    const smokeTexture = new THREE.TextureLoader().load("/Fire.png")
    const gl = useThree(state => state.gl)
    const pointsRef = useRef()
    /*const { bEle, bFreqX, bFreqY, bSpd, sEle, sFreq, sSpd, sIt, dCol, sCol, cOff, cM } = useControls({
        bEle: {value: 0.02, min: 0, max: 1, step: 0.01},
        bFreqX: {value: 4, min: 0, max: 20, step: 0.5},
        bFreqY: {value: 20.0, min: 0, max: 20, step: 0.5},
        bSpd: {value: 0.75, min: 0, max: 4, step: 0.05},
        sEle: {value: 0.07, min: 0, max: 1, step: 0.01},
        sFreq: {value: 3, min: 0, max: 20, step: 0.5},
        sSpd: {value: 0.75, min: 0, max: 4, step: 0.05},
        sIt: {value: 4, min: 0, max: 5, step: 0.05},
        dCol: {value: 0.3, min: -10.0, max: 10.0, step: 0.05},
        sCol: {value: 0.15, min: -10.0, max: 10.0, step: 0.05},
        cOff: {value: 0.17, min: -1, max: 1, step: 0.001},
        cM: {value: 4.9, min: -20, max: 20, step: 0.01}
    })*/

    useFrame((state, delta)=>{
        smokeMaterial.current.uTime += delta
        //if (smokeMaterial.current.uTime > 10) smokeMaterial.current.uTime = 0
    })

    return <>

        {/*<points ref={ pointsRef } geometry={ smokeGeometry } position={ smokePosition } scale={ smokeScale }>
            <pointsMaterial color="#5786F5" size={0.015} sizeAttenuation />
        </points>*/}
        <mesh ref={ smokeMesh }
              frustumCulled={ false }
              geometry={ smokeGeometry }
              rotation={smokeRotation}
              position={ smokePosition }
              scale={ smokeScale }>
            <smokeMaterial ref={ smokeMaterial }
                           transparent={ true }
                           depthWrite={ false }
                           depthTest={ true }
                           uBigWavesElevation={ uBigWavesElevation }
                           uBigWavesFrequency={ uBigWavesFrequency }
                           uBigWavesSpeed={ uBigWavesSpeed }
                           uSmallWavesElevation={ uSmallWavesElevation }
                           uSmallWavesFrequency={ uSmallWavesFrequency }
                           uSmallWavesSpeed={ uSmallWavesSpeed }
                           uSmallIterations={ uSmallIterations }
                           uAlphaA={ uAlphaA }
                           uAlphaB={ uAlphaB }
                           uColorOffset={ uColorOffset }
                           uColorMultiplier={ uColorMultiplier }
                           uYPos={ smokePosition[1] }/>
        </mesh>

    </>

}
