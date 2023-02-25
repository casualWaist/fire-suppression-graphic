import * as Paper from "paper"
import React, {useEffect, useLayoutEffect, useRef, useState} from "react"
import { gsap } from "gsap"

export default function FireModelSVG(){

    const sideFan = <g stroke="#000" transform="matrix(0 1 1 0 -20.549 17.022)">
        <path
            fill="#D2D8C0"
            d="M41.976-1.938L158.758-.564s28.947 12.893 23.882 27.056c-4.104 11.477 2.294 26.007 11.104 26.697 16.152 1.264 9.065 24.15 8.646 24.495l-117.344.999s2.739-19.507.773-28.964c-2.295-11.047-13.067-25.471-24.581-27.495C46.314 19.602 41.976-1.938 41.976-1.938z"
        ></path>
        <path
            fill="#D2D8C0"
            d="M81.694 73.159H205.714V93.05000000000001H81.694z"
        ></path>
        <ellipse
            cx="143.179"
            cy="82.831"
            fill="#9F9C9C"
            rx="3.351"
            ry="3.351"
        ></ellipse>
        <ellipse
            cx="168.284"
            cy="82.804"
            fill="#9F9C9C"
            rx="20.413"
            ry="3.351"
        ></ellipse>
        <ellipse
            cx="118.253"
            cy="82.804"
            fill="#9F9C9C"
            rx="20.413"
            ry="3.351"
        ></ellipse>
    </g>

    const topFan = <g stroke="#000">
        <path
            fill="#D2D8C0"
            d="M41.976-1.938L158.758-.564s28.947 12.893 23.882 27.056c-4.104 11.477 2.294 26.007 11.104 26.697 16.152 1.264 9.065 24.15 8.646 24.495l-117.344.999s2.739-19.507.773-28.964c-2.295-11.047-13.067-25.471-24.581-27.495C46.314 19.602 41.976-1.938 41.976-1.938z"
        ></path>
        <path
            fill="#D2D8C0"
            d="M81.694 73.159H205.714V93.05000000000001H81.694z"
        ></path>
        <ellipse
            cx="143.179"
            cy="82.831"
            fill="#9F9C9C"
            rx="3.351"
            ry="3.351"
        ></ellipse>
        <ellipse
            cx="168.284"
            cy="82.804"
            fill="#9F9C9C"
            rx="20.413"
            ry="3.351"
        ></ellipse>
        <ellipse
            cx="118.253"
            cy="82.804"
            fill="#9F9C9C"
            rx="20.413"
            ry="3.351"
        ></ellipse>
    </g>

    const smokeRef = useRef()
    const fireRef = useRef()
    const boxRef = useRef()
    const floorRef = useRef()
    const plumeSlider = useRef()
    const smokeSlider = useRef()
    const fireSlider = useRef()
    const [ fanOnTop, setFanOnTop ] = useState(true)
    const [ fireHeight, setFireHeight ] = useState('1')
    const [ plumeHeight, setPlumeHeight ] = useState('5')
    const [ smokeLayer, setSmokeLayer ] = useState('5')
    const [ showPlumHeight, setShowPlumHeight ] = useState(false)
    const [ showSmokeLayerHeight, setShowSmokeLayerHeight ] = useState(false)
    const [ showFireHeight, setShowFireHeight ] = useState(false)
    const updateFireHeight = (newValue) => {
        setFireHeight(newValue)
        gsap.to(fireRef.current, {
            scaleY: newValue,
            y: -(newValue - 1) * 40
        })
    }
    const updatePlumeHeight = (newValue) => {
        setPlumeHeight(newValue)
        gsap.to(smokeRef.current, {y: newValue})
        console.log(smokeSlider.current)
    }
    const updateSmokeLayer = (newValue) => {
        setSmokeLayer(newValue)
        gsap.to(smokeRef.current, {
            scaleY: newValue,
            y: newValue * (1 / newValue * newValue) + (10 / newValue)
        })
    }
    const pointPara = (event) => {
        const xMove = -(event.clientX - (window.innerWidth * 0.5))
        const yMove = -(event.clientY - (window.innerHeight * 0.5))
        console.log(plumeHeight)
        gsap.to(smokeRef.current,{
            x: xMove * 0.015,
            y: yMove * 0.015 - plumeHeight
        })
        gsap.to(fireRef.current, {
            x: xMove * 0.01,
            y: yMove * 0.01,
        })
        gsap.to(boxRef.current, {
            x: xMove * 0.01,
            y: yMove * 0.01,
        })
        gsap.to(floorRef.current, {
            x: xMove * 0.015,
            y: yMove * 0.015,
        })
    }

    return <>
        <div className="grid place-content-center w-screen">
        <svg className="border-2 border-primary w-[500px] h-[500px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        onMouseMove={ pointPara }
        >
        <defs>
            <mask id="mask-0">
                <path
                    fill="#BADA55"
                    stroke="#000"
                    d="M146.274 147.676H305.115V306.517H146.274z"
                ></path>
            </mask>
            <radialGradient
                id="gradient-0"
                cx="226.957"
                cy="262.779"
                r="19.502"
                gradientTransform="matrix(.97775 .25758 -.2429 .922 69.274 -21.369)"
                gradientUnits="userSpaceOnUse"
                spreadMethod="pad"
            >
                <stop offset="0" stopColor="rgba(249, 174, 103, 1)"></stop>
                <stop offset="1" stopColor="rgba(240, 121, 9, 1)"></stop>
            </radialGradient>
        </defs>
        <path
            fill="#BADA55"
            stroke="#000"
            d="M61.263 83.103H431.15V452.99H61.263z"
        ></path>
        <g
            mask="url(#mask-0)"
            transform="matrix(2.32867 0 0 2.32867 -279.36 -260.786)"
        >
            <path ref={ boxRef }
                fill="#FFF"
                stroke="#000"
                d="M212.733 277.645H244.269V302.229H212.733z"
                paintOrder="fill"
            ></path>
            <path ref={ floorRef }
                fill="#FFF"
                stroke="#000"
                d="M137.902 291.948H312.602V309.85999999999996H137.902z"
                paintOrder="fill"
            ></path>
            <path ref={ smokeRef }
                fill="#D8D8D8"
                stroke="#000"
                className="hover:stroke-dark"
                d="M121.11 186.001s7.936-15.572 18.51-11.411c7.399 2.912 15.344-6.339 22.191-5.7 7.38.689 14.055 6.653 20.875 4.555 19.064-5.865 22.229-3.218 28.92 3.838 4.344 4.581 3.006 11.471 1.572 19.237-1.393 7.548-2.877 15.923.677 23.81 6.788 15.064-8.186 29.624 2.884 43.91 2.978 3.843 22.716-2.864 25.032-3.495 6.084-1.657 8.703-17.989 6.226-30.993-2.211-11.607 15.01-25.012 10.306-36.576-4.958-12.19 10.272-21.98 19.159-23.086 5.406-.673 11.97 3.569 16.153.197 8.195-6.607 21.141 3.775 30.71 2.835 14.339-1.409 22.012-15.754 22.012-15.754l-11.415-37.49-208.451 10.456-5.361 55.667z"
            ></path>
            <path ref={ fireRef }
                fill="url(#gradient-0)"
                stroke="#A12F2F"
                className="hover:stroke-highlight"
                d="M212.74 279.369c9.392 10.735 24.539 7.945 31.102-.747 3.519-4.66 9.093-29.831-2.557-30.551 0 0 2.396 7.849-3.063 7.056-5.865-.852-3.472-10.856-1.803-17.404 0 0-11.961 7.016-10.931 15.546 1.031 8.531-3.196 6.716-3.196 6.716s.497-11.906-4.77-14.769c-2.544 12.352-13.787 23.858-4.782 34.153z"
            ></path>
        </g>
        { showPlumHeight ? <g
            fill="#D8D8D8"
            stroke="#000"
            transform="matrix(2.32867 0 0 2.32867 -279.36 -260.786)"
        >
            <text
                style={{ whiteSpace: "pre" }}
                x="214.485"
                y="208.946"
                fill="#333"
                stroke="none"
                fontFamily="Arial, sans-serif"
                fontSize="14"
            >
                Plume
            </text>
            <path d="M163.356 282.15L208.805 282.064"></path>
            <path d="M179.553 175.797L180.375 279.423"></path>
            <path d="M180.256 280.524l2.392-4.785h-4.785l2.393 4.785zM179.571 175.478l2.392 4.785h-4.785l2.393-4.785z"></path>
        </g> : null}
            { showSmokeLayerHeight ? <g transform="matrix(2.32867 0 0 2.32867 -66.992 -385.416)">
                <path
                    fill="#D8D8D8"
                    stroke="#000"
                    d="M185.377 203.4L185.481 221.095"
                ></path>
                <path
                    fill="#D8D8D8"
                    stroke="#000"
                    d="M185.524 222.178l2.392-4.785h-4.785l2.393 4.785zM185.393 202.836l2.392 4.785H183l2.393-4.785z"
                ></path>
                <text
                    style={{ whiteSpace: "pre" }}
                    x="86.12"
                    y="221.703"
                    fill="#333"
                    stroke="none"
                    fontFamily="Arial, sans-serif"
                    fontSize="14"
                >
                    Smoke Layer
                </text>
            </g> : null }
            { showFireHeight ? <g transform="matrix(2.32867 0 0 2.32867 -66.992 -100)">
                <path
                    fill="#D8D8D8"
                    stroke="#000"
                    d="M165.377 173.4L165.481 211.095"
                ></path>
                <path
                    fill="#D8D8D8"
                    stroke="#000"
                    d="M165.524 212.178l2.392-4.785h-4.785l2.393 4.785zM165.393 172.836l2.392 4.785H163l2.393-4.785z"
                ></path>
                <text
                    style={{ whiteSpace: "pre" }}
                    x="46.12"
                    y="211.703"
                    fill="#333"
                    stroke="none"
                    fontFamily="Arial, sans-serif"
                    fontSize="14"
                >
                    Fire Height
                </text>
            </g> : null}
        { fanOnTop ? topFan : sideFan }
        </svg>
            <div className="grid grid-rows-4 gap-3 p-5">
                <label className="text-white text-right gap-3 grid grid-cols-2 place-content-center"
                       onMouseEnter={ event => setShowPlumHeight(true) }
                       onMouseLeave={ event => setShowPlumHeight(false) }
                > Plume Height:
                    <input
                        ref={ plumeSlider }
                        type="range"
                        min="0.75"
                        max="1.0"
                        step="0.01"
                        onChange={ event => updateSmokeLayer(event.target.value) }
                        className="w-1/4 flex content-center text-center bg-white text-dark rounded-full accent-accent"
                        defaultValue="15"
                    />
                </label>
                <label className="text-white text-right gap-3 grid grid-cols-2 place-content-center "
                       onMouseEnter={ event => setShowSmokeLayerHeight(true) }
                       onMouseLeave={ event => setShowSmokeLayerHeight(false) }
                > Smoke Layer
                    Height:
                    <input
                        ref={ smokeSlider }
                        type="range"
                        min="1"
                        max="10"
                        onChange={e => updatePlumeHeight(e.target.value)}
                        className="w-1/4 flex content-center text-center bg-white text-dark rounded-full accent-accent"
                        defaultValue="1.0"
                    />
                </label>
                <label className="text-white text-right gap-3 grid grid-cols-2 place-content-center "
                       onMouseEnter={ event => setShowFireHeight(true) }
                       onMouseLeave={ event => setShowFireHeight(false) }
                > Fire Height:
                    <input
                        ref={ fireSlider }
                        type="range"
                        min="1.0"
                        max="1.5"
                        step="0.01"
                        onChange={e => updateFireHeight(e.target.value)}
                        className="w-1/4 flex content-center text-center bg-white text-dark rounded-full accent-accent"
                        defaultValue="1.0"
                    />
                </label>
                <label className="text-white text-right gap-3 grid grid-cols-2 place-content-center "> Fan On Top:
                    <input
                        type="checkbox"
                        onChange={e => setFanOnTop(fanOnTop => !fanOnTop)}
                        className="w-1/4 flex content-center text-center bg-white text-dark rounded-full accent-accent"
                        defaultChecked={ true }
                    />
                </label>
            </div>
        </div>
    </>
}
