import * as THREE from "three"
import fireVertexShader from "./fireVertexShader.glsl"
import fireFragmentShader from "./fireFragmentShader.glsl"
import React, { useRef } from "react"
import { shaderMaterial } from "@react-three/drei"
import {extend, useFrame, useThree} from "@react-three/fiber"
import {useControls} from "leva"

const FireMaterial = shaderMaterial({
    fireTex: null,
    color: new THREE.Color(0xeeeeee),
    time: 0.0,
    seed: Math.random() * 19.19,
    invModelMatrix: new THREE.Matrix4(),
    scale: new THREE.Vector3( 1, 1, 1 ),
    meshPosition: new THREE.Vector3(0, 0, 0),
    noiseScale: new THREE.Vector4(0.75, 1.75, 4.25, 0.5),
    magnitude: 0.7,
    lacunarity: 1.5,
    gain: 0.9
}, fireVertexShader, fireFragmentShader)

extend({ FireMaterial })

export default function Fire({ fireGeometry, firePosition, fireScale }){

    const fireMaterial = useRef()
    const fireMesh = useRef()
    const fireTexture = new THREE.TextureLoader().load("/Fire.png")
    fireTexture.magFilter = fireTexture.minFilter = THREE.LinearFilter
    fireTexture.wrapS = fireTexture.wrapT = THREE.ClampToEdgeWrapping
    /*const { scale, nSx, nSy, nSz, nSw, lac, mag, gain } = useControls({
        scale: {value: 0.25, min: 0, max: 2, step: 0.05},
        nSx: {value: 1, min: 0, max: 20, step: 0.5},
        nSy: {value: 2, min: 0, max: 20, step: 0.5},
        nSz: {value: 4.5, min: 0, max: 20, step: 0.5},
        nSw: {value: 0.5, min: 0, max: 10, step: 0.1},
        lac: {value: 1.5, min: 0, max: 10, step: 0.1},
        mag: {value: 0.7, min: 0, max: 10, step: 0.1},
        gain: {value: 0.9, min: 0, max: 10, step: 0.1}
    })*/
    //fireScale = 1.5

    useFrame((state, delta)=>{
        const iMM = fireMaterial.current.uniforms.invModelMatrix.value
        fireMesh.current.updateMatrix()
        iMM.invert(fireMesh.current.matrix)
        fireMaterial.current.time += delta/*
        fireMesh.current.position.y += Math.sin(delta)
        fireMaterial.current.uniforms.meshPosition = fireMesh.current.position
        fireMaterial.current.uniforms.invModelMatrix.value = iMM
        fireMaterial.current.uniforms.scale.value = fireMesh.current.scale*/
    })

    return <>

        <mesh ref={ fireMesh } geometry={fireGeometry} position={firePosition} scale={fireScale}>
            <fireMaterial ref={ fireMaterial }
                          fireTex={ fireTexture }
                          scale={ fireScale }
                          meshPosition={ firePosition }
                          transparent={ true }
                          depthWrite={ false }
                          depthTest={ true }
            />
        </mesh>

    </>

}
