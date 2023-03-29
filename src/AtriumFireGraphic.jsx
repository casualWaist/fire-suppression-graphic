import React, {useContext, useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"
import Fire from "./Fire.jsx"
import * as THREE from "three"
import D_fig from "./D_fig.jsx"
import Z_fig from "./Z_fig.jsx"
import H_fig from "./H_fig.jsx"
import Cp_fig from "./Cp_fig.jsx"
import Z_l_fig from "./Z_l_fig.jsx"
import Hrr_fig from "./Hrr_fig.jsx"
import T_s_fig from "./T_s_fig.jsx"
import Mdot_fig from "./Mdot_fig.jsx"
import Gamma_10_fig from "./Gamma_10_fig.jsx"
import Gamma_05_fig from "./Gamma_05_fig.jsx"
import Smoke from "./Smoke.jsx"
import { ToolContext } from "./FireModelGLTF.jsx"

export default function AtriumFireGraphic(props) {

  const { nodes, materials } = useGLTF('/AtriumFireGraphic.glb')
  const [ toolValues ] = useContext(ToolContext)
  const fireHeight = 0.25 * (toolValues.z_l.value - 2) * 0.125 + 0.25  // range 0.25 - 0.5
  const smokeLayerHeight = (toolValues.d.value - 2) * 0.125 + 0.5 // range 0.5 - 1.5
  const plumeHeight = (smokeLayerHeight - 0.5) * -0.355 + 0.825 + 0.3525  // range 0.825 - 1.18 offset 0.3525
  const topFanBlades = useRef()
  const topFanBladesOutline = useRef()
  const sideFanBlades = useRef()
  const sideFanBladesOutline = useRef()

  useFrame((state, delta) => {
    if (toolValues.gamma.value === 1.0) {
      topFanBlades.current.rotation.y += delta * 3
      topFanBladesOutline.current.rotation.y += delta * 3
    }
    else {
      sideFanBlades.current.rotation.y += delta * 3
      sideFanBladesOutline.current.rotation.y += delta * 3
    }
  })

  return (
    <group {...props} dispose={null}>

      <group>
        <D_fig nodes={nodes} />
        <Z_fig nodes={nodes} />
        <H_fig nodes={nodes} />
        <Cp_fig nodes={nodes} />
        <Z_l_fig nodes={nodes} />
        <Hrr_fig nodes={nodes} />
        <T_s_fig nodes={nodes} />
        <Mdot_fig nodes={nodes} />
        <mesh geometry={new THREE.PlaneGeometry(2.49, 1.99, 1, 1)}
              position={[ 0, -1.875, 0 ]}
              rotation={[ -Math.PI * 0.5, 0, 0 ]}
              material={new THREE.MeshStandardMaterial({ wireframe: true, transparent: true, opacity: 0.25, color: "#000" })}
        />
        { toolValues.gamma.value === 1.0 ? <Gamma_10_fig nodes={nodes} /> : <Gamma_05_fig nodes={nodes} /> }
        <group>
          <mesh geometry={nodes.Mesh.geometry} material={materials.ClearWalls} />
          <mesh geometry={nodes.Mesh_1.geometry} material={materials.BlackOutlines} />
        </group>
        <mesh geometry={nodes.FireSubstrate.geometry}
              material={nodes.FireSubstrate.material}
              position={[0, -1.99, 0]}
        />
        <Fire fireGeometry={nodes.FireEmitter.geometry}
              firePosition={[0, -1.87, 0]}
              fireScale={[0.25, fireHeight, 0.25]}
        />
        <Smoke smokeGeometry={nodes.SmokeLayerEmitter.geometry}
               smokePosition={[ 0.02, 1.99, 0 ]}
               smokeScale={[ 1, smokeLayerHeight, 1 ]}
               uBigWavesElevation={ 0.001 }
               uBigWavesFrequency={ new THREE.Vector2(1.5, 1.5) }
               uBigWavesSpeed={ 1.75 }
               uSmallWavesElevation={ 0.04 }
               uSmallWavesFrequency={ 27.0 }
               uSmallWavesSpeed={ 0.75 }
               uSmallIterations={ 5.0 }
               uAlphaA={ 0.5 }
               uAlphaB={ -0.5 }
               uColorOffset={ 0.82 }
               uColorMultiplier={ 0.65 }
        />
        <Smoke smokeGeometry={nodes.PlumeEmitter.geometry}
               smokePosition={[ 0, -1.87, 0 ]}
               smokeScale={[ 1, plumeHeight, 1 ]}
               uBigWavesElevation={ 0.08 }
               uBigWavesFrequency={ new THREE.Vector2(10.5, 1.0) }
               uBigWavesSpeed={ 0.7 }
               uSmallWavesElevation={ 0.01 }
               uSmallWavesFrequency={ 20.0 }
               uSmallWavesSpeed={ 1.45 }
               uSmallIterations={ 5.0 }
               uAlphaA={ 0.5 }
               uAlphaB={ 0.25 }
               uColorOffset={ 1.0 }
               uColorMultiplier={ 0.9 }
        />
        <group position={[0.01, 0, 0]}>
          <mesh geometry={nodes.Cube005.geometry} material={materials.ClearWalls} />
          <mesh geometry={nodes.Cube005_1.geometry} material={materials.BlackOutlines} />
        </group>
        <group position={[0.01, -0.63, 0]}>
          <mesh geometry={nodes.Cube005_2.geometry} material={materials.ClearWalls} />
          <mesh geometry={nodes.Cube005_3.geometry} material={materials.BlackOutlines} />
        </group>
        <group position={[0.01, -1.25, 0]}>
          <mesh geometry={nodes.Cube005_4.geometry} material={materials.ClearWalls} />
          <mesh geometry={nodes.Cube005_5.geometry} material={materials.BlackOutlines} />
        </group>
        <group position={[-0.01, 0, 0]} rotation={[-Math.PI, 0, 0]} scale={-1}>
          <mesh geometry={nodes.Cube006.geometry} material={materials.ClearWalls} />
          <mesh geometry={nodes.Cube006_1.geometry} material={materials.BlackOutlines} />
        </group>
        <group position={[-0.01, -0.63, 0]} rotation={[-Math.PI, 0, 0]} scale={-1}>
          <mesh geometry={nodes.Cube006_2.geometry} material={materials.ClearWalls} />
          <mesh geometry={nodes.Cube006_3.geometry} material={materials.BlackOutlines} />
        </group>
        <group position={[-0.01, -1.25, 0]} rotation={[-Math.PI, 0, 0]} scale={-1}>
          <mesh geometry={nodes.Cube006_4.geometry} material={materials.ClearWalls} />
          <mesh geometry={nodes.Cube006_5.geometry} material={materials.BlackOutlines} />
        </group>
        { toolValues.gamma.value !== 1.0 ? null : <>
          <group position={[0, 2.14, 0]}>
            <mesh geometry={nodes.Cube007.geometry} material={materials.ClearWalls} />
            <mesh geometry={nodes.Cube007_1.geometry} material={materials.BlackOutlines} />
          </group>
          <Smoke smokeGeometry={nodes.TopSmokeEmitter.geometry}
                 smokePosition={[0, 2.4, 0]}
                 smokeScale={0.38}
                 uBigWavesElevation={ 0.06 }
                 uBigWavesFrequency={ new THREE.Vector2(10.5, 1.0) }
                 uBigWavesSpeed={ 0.75 }
                 uSmallWavesElevation={ 0.04 }
                 uSmallWavesFrequency={ 3.0 }
                 uSmallWavesSpeed={ 0.75 }
                 uSmallIterations={ 5.0 }
                 uAlphaA={ 0.8 }
                 uAlphaB={ -0.85 }
                 uColorOffset={ 0.62 }
                 uColorMultiplier={ 1.15 }
          />
          <group position={[0, 2.07, 0]} scale={0.05}>
            <mesh ref={topFanBlades} geometry={nodes.Cylinder002.geometry} material={materials.ClearWalls} />
            <mesh ref={topFanBladesOutline} geometry={nodes.Cylinder002_1.geometry} material={materials.BlackOutlines} />
          </group></>
        }
        { toolValues.gamma.value === 1.0 ? null : <>
          <group position={[1.39, 1.35, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh geometry={nodes.Cube008.geometry} material={materials.ClearWalls} />
            <mesh geometry={nodes.Cube008_1.geometry} material={materials.BlackOutlines} />
          </group>
          <Smoke smokeGeometry={nodes.SideSmokeEmitter.geometry}
                 smokePosition={[ 1.69, 1.35, 0 ]}
                 smokeRotation={[ 0, 0, -Math.PI / 2 ]}
                 smokeScale={ 0.38 }
                 uBigWavesElevation={ 0.04 }
                 uBigWavesFrequency={ new THREE.Vector2(12.0, 2.5) }
                 uBigWavesSpeed={ 0.75 }
                 uSmallWavesElevation={ 0.03 }
                 uSmallWavesFrequency={ 3.0 }
                 uSmallWavesSpeed={ 0.75 }
                 uSmallIterations={ 5.0 }
                 uAlphaA={ -1.2 }
                 uAlphaB={ 1.0 }
                 uColorOffset={ 0.36 }
                 uColorMultiplier={ 1.26 }
          />
          <group position={[1.34, 1.35, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.05}>
            <mesh ref={sideFanBlades} geometry={nodes.Cylinder004.geometry} material={materials.ClearWalls} />
            <mesh ref={sideFanBladesOutline} geometry={nodes.Cylinder004_1.geometry} material={materials.BlackOutlines} />
          </group></>
        }
      </group>

    </group>
  )
}

useGLTF.preload('/AtriumFireGraphic.glb')
