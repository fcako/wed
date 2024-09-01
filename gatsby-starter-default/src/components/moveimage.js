import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const MoveImage = ({ idx, children, thread }) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    if (typeof window.visualViewport !== "undefined") {
      setWindowSize({
        width: window.visualViewport.width,
        height: window.visualViewport.height,
      })
    } else {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
  }, [])
  const [clickPosition, setClickPosition] = useState({
    x: undefined,
    y: undefined,
  })
  useEffect(() => {
    setClickPosition({
      x: windowSize.width / 2,
      y: windowSize.height / 2 + 150,
    })
  }, [windowSize])

  const handleClick = event => {
    setClickPosition({
      x: event.clientX,
      y: event.clientY,
    })
  }

  useEffect(() => {
    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  const start = useRef(null)
  const end = useRef(null)

  return (
    <div>
      {children}
      {clickPosition.x !== undefined && (
        <>
          <Div1 ref={start} $idx={idx} $clickposition={clickPosition}>
            <StaticImage
              src="../images/saovn.png"
              height={100}
              placeholder="blurred"
              alt="YujiHorn"
            ></StaticImage>
          </Div1>
          <Div2 ref={end} $idx={idx} $clickposition={clickPosition}>
            <StaticImage
              src="../images/yujihr.png"
              height={100}
              placeholder="blurred"
              alt="YujiHorn"
            ></StaticImage>
          </Div2>
          {thread && <ConnectingLine start={start} end={end} />}
        </>
      )}
    </div>
  )
}

export default MoveImage

const Div1 = styled.div`
  position: absolute;
  top: ${props => props.$clickposition.y}px;
  left: ${props => props.$clickposition.x - 20}px;
  transform: translate(-50%, -50%)
    rotate(${props => (props.$idx * 2 - 1) * 10}deg);
  transition: 2s;
  //   z-index: 3;
`
const Div2 = styled.div`
  position: absolute;
  top: ${props => props.$clickposition.y}px;
  left: ${props => props.$clickposition.x + 20}px;
  transform: translate(-50%, -50%)
    rotate(${props => (props.$idx * 2 - 1) * 10}deg);
  transition: 0.5s;
  //   z-index: 3;
`

function ConnectingLine({ start, end }) {
  const [position, setPosition] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 })
  const [topPosition, setTopPosition] = useState("")
  useEffect(() => {
    const checkTopPosition = () => {
      if (start.current) {
        const newTop = window.getComputedStyle(start.current).top
        if (newTop !== topPosition) {
          setTopPosition(newTop)
        }
      }
    }

    const intervalId = setInterval(checkTopPosition, 10)
    return () => {
      clearInterval(intervalId)
    }
  }, [topPosition, start])

  useEffect(() => {
    const startRect = start.current.getBoundingClientRect()
    const endRect = end.current.getBoundingClientRect()

    setPosition({
      x1: startRect.left + 20,
      y1: startRect.top + 40,
      x2: endRect.left + 30,
      y2: endRect.top + 40,
    })
  }, [topPosition, start, end])

  return (
    <svg
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <path
        d={`M${position.x1},${position.y1} Q${
          (position.x1 + position.x2) / 2
        },${position.y1 + 30} ${position.x2},${position.y2}`}
        stroke="red"
        strokeWidth="2"
        fill="transparent"
        strokeOpacity="0.4"
      />
    </svg>
  )
}
