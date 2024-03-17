import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const CountDownPage = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-31T15:30:00") - +new Date()
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
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <Layout>
      <h1>カウントダウン</h1>
      <div>
        {Object.keys(timeLeft).length > 0 ? (
          <div>
            <p>
              残り時間: {timeLeft.days}日 {timeLeft.hours}時間{" "}
              {timeLeft.minutes}分 {timeLeft.seconds}秒
            </p>
          </div>
        ) : (
          <p>カウントダウン終了！</p>
        )}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Count Down" />

export default CountDownPage
