import React, { useState } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const MoveImage = ({ idx, children }) => {
  const windowSize = { width: window.innerWidth, height: window.innerHeight }
  const [clickPosition, setClickPosition] = useState({
    x: windowSize.width / 2,
    y: windowSize.height / 2 + 150,
  })

  const handleClick = event => {
    setClickPosition({
      x: event.clientX,
      y: event.clientY,
    })
  }

  return (
    <Container onClick={handleClick}>
      {children}
      <Div1 $idx={idx} $clickposition={clickPosition} $windowsize={windowSize}>
        <StaticImage
          src="../images/saovn.png"
          height={100}
          placeholder="blurred"
          alt="YujiHorn"
        ></StaticImage>
      </Div1>
      <Div2 $idx={idx} $clickposition={clickPosition} $windowsize={windowSize}>
        <StaticImage
          src="../images/yujihr.png"
          height={100}
          placeholder="blurred"
          alt="YujiHorn"
        ></StaticImage>
      </Div2>
    </Container>
  )
}

export default MoveImage

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 240px);
`

const Div1 = styled.div`
  position: absolute;
  transform: translate(
      ${props => `${
        props.$clickposition.x - props.$windowsize.width / 2 + 100
      }px,
    ${props.$clickposition.y - props.$windowsize.height / 2 - 100}px`}
    )
    ${props => `rotate(${(props.$idx * 2 - 1) * 10}deg)`};
  transition: 2s;
`
const Div2 = styled.div`
  position: absolute;
  transform: translate(
      ${props => `${
        props.$clickposition.x - props.$windowsize.width / 2 + 150
      }px,
    ${props.$clickposition.y - props.$windowsize.height / 2 - 100}px`}
    )
    ${props => `rotate(${(props.$idx * 2 - 1) * 10}deg)`};
  transition: 0.5s;
`
