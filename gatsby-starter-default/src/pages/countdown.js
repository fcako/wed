import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MoveImage from "../components/moveimage"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const CountDownPage = () => {
  const difference = +new Date("2024-08-31T00:00:00") - +new Date()
  const calculateTimeLeft = () => {
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  const [showThread, setShowThread] = useState(false)
  const handleCheckboxChange = event => {
    setShowThread(event.target.checked)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <Layout>
      <h1>Count Down</h1>
      <Div>画面をタップしてみてね</Div>
      {difference > 0 ? (
        <div>
          <MoveImage idx={timeLeft.seconds % 2} thread={showThread}>
            <div>
              to　<Span>2024/8/31</Span>
              <br />
              <br />
              <Span>{timeLeft.days}</Span> days
              <br />
              <Span>{timeLeft.hours}</Span> hours
              <br />
              <Span>{timeLeft.minutes}</Span> minutes
              <br />
              <Span>{timeLeft.seconds}</Span> seconds
            </div>
          </MoveImage>
        </div>
      ) : (
        <div>
          <MoveImage idx={timeLeft.seconds % 2} thread={showThread}>
            <Span>The Day</Span>
            <StaticImage
              src="../images/playing.jpg"
              alt="playing"
            ></StaticImage>
          </MoveImage>
        </div>
      )}
      <label>
        <input
          type="checkbox"
          checked={showThread}
          onChange={handleCheckboxChange}
        />
        赤い糸
      </label>
    </Layout>
  )
}

export const Head = () => <Seo title="Count Down" />

export default CountDownPage

const Span = styled.span`
  font-size: 2.5em;
`

const Div = styled.div`
  font-size: 1em;
  //   text-align: right;
`
