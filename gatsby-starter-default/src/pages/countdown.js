import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MoveImage from "../components/moveimage"
import styled from "styled-components"

const CountDownPage = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-31T00:00:00") - +new Date()
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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <Layout>
      <h1>カウントダウン</h1>
      <div>
        <MoveImage idx={timeLeft.seconds % 2}>
          {Object.keys(timeLeft).length > 0 ? (
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
          ) : (
            <p>The Day</p>
          )}
        </MoveImage>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Count Down" />

export default CountDownPage

const Span = styled.span`
  font-size: 2.5em;
`
