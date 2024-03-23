import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const MoveImage = ({ idx, children }) => {
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

  return (
    <div $windowsize={windowSize}>
      {children}
      {clickPosition.x !== undefined && (
        <>
          <Div1
            $idx={idx}
            $clickposition={clickPosition}
            $windowsize={windowSize}
          >
            <StaticImage
              src="../images/saovn.png"
              height={100}
              placeholder="blurred"
              alt="YujiHorn"
            ></StaticImage>
          </Div1>
          <Div2
            $idx={idx}
            $clickposition={clickPosition}
            $windowsize={windowSize}
          >
            <StaticImage
              src="../images/yujihr.png"
              height={100}
              placeholder="blurred"
              alt="YujiHorn"
            ></StaticImage>
          </Div2>
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
    ${props => `rotate(${(props.$idx * 2 - 1) * 10}deg)`};
  transition: 2s;
`
const Div2 = styled.div`
  position: absolute;
  top: ${props => props.$clickposition.y}px;
  left: ${props => props.$clickposition.x + 20}px;
  transform: translate(-50%, -50%)
    ${props => `rotate(${(props.$idx * 2 - 1) * 10}deg)`};
  transition: 0.5s;
`
