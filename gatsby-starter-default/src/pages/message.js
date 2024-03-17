import React, { useState, useEffect } from "react"
import * as styles from "../components/invitation.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

class DataEntry {
  constructor(timestamp, message, name = "匿名希望") {
    this.timestamp = timestamp
    this.message = message
    this.name = name
  }
}

const MessagePage = () => {
  const [submitted, setSubmitted] = useState(false)
  const [jsonData, setJsonData] = useState(null)
  const [displayIndex, setDisplayIndex] = useState(4)

  useEffect(() => {
    const apiKey = process.env.GATSBY_GOOGLE_SHEETS_API_KEY
    const sheetId = process.env.GATSBY_GOOGLE_SHEETS_ID
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1/?key=${apiKey}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const dataEntries = data.values.slice(1).map(row => {
          return new DataEntry(row[0], row[1], row[2] || "匿名希望")
        })
        setJsonData(dataEntries)
      })
      .catch(error => console.error("Error fetching data:", error))
  }, [submitted])

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayIndex(prevIndex => {
        const numRows = jsonData.length
        return Math.max((prevIndex + 1) % numRows, 4)
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [jsonData])

  return (
    <Layout>
      <h1>メッセージ</h1>
      <div>
        二人へのメッセージを募集しています
        <br />
        皆さんからのメッセージが順番に
        <br />
        このページに表示されます
        <br />
        ※何回でもメッセージを送ることができます
        <br />
        ※間違えて送っちゃった場合は新郎に言ってくれればメッセージ消します
      </div>
      <div>
        {!jsonData ? (
          <p>Loading...</p>
        ) : (
          <Div>
            <div>投稿日: {jsonData[displayIndex].timestamp}</div>
            <Message>{jsonData[displayIndex].message}</Message>
            <div>{jsonData[displayIndex].name} さんより</div>
          </Div>
        )}
      </div>
      <form
        className={styles.cForm}
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdfXmCVYyeIE9qhRyyn9XytjLRvyc70Gw9F3KhIreCgQAYx5w/formResponse"
        method="POST"
        target="hidden_iframe"
        onSubmit={event => {
          setSubmitted(true)
        }}
      >
        <div className={styles.cFormItem}>
          <label className={styles.cFormLabel} htmlFor="message">
            メッセージ<Sup>*</Sup>
          </label>
          <textarea
            className={styles.cFormInput}
            id="message"
            placeholder="メッセージ"
            type="textarea"
            name="entry.2099992949"
          />
        </div>
        <div className={styles.cFormItem}>
          <label className={styles.cFormLabel} htmlFor="who">
            名前
          </label>
          <input
            className={styles.cFormInput}
            id="who"
            placeholder="名前（匿名やニックネームでもok）"
            type="text"
            name="entry.32716079"
          />
        </div>
        <div className={styles.cFormSubmit}>
          <button type="submit">送信する</button>
        </div>
        <script type="text/javascript">let submitted = false;</script>
        <iframe
          title="after-submit"
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: "none" }}
          onLoad={() => {
            if (submitted) {
              alert("ありがとうございます")
              window.location = "/message"
            }
          }}
        ></iframe>
      </form>
    </Layout>
  )
}

export const Head = () => <Seo title="Message" />

export default MessagePage

const Sup = styled.sup`
  color: red;
`
const Div = styled.div`
  border: double 5px #999999;
  margin: 1em 0em 1em 0em;
  padding: 1em;
`

const Message = styled.div`
  margin: 1em 0em 1em 0em;
  font-size: larger;
`
