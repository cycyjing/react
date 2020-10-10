import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import QUESTIONCONFIG from '../questionConfig'
import { useQ1Action, useQ2Action, useQ3Action, useQ4Action, useQ5Action, useConfirmAction, useInitData } from '../store/actions'
export const HarryPotter = () => {
  const initDispatch = useInitData('http://localhost:8080/data')
  const [loading, setLoading] = useState(true)
  const initData = useSelector((state) => state.answerReducer.initData)
  useEffect(() => {
    if (!initData["q1"]) {
      initDispatch()
      setLoading(true)
      console.log(initData)
      console.log('loading', loading)
    } else {
      setLoading(false)
      console.log(initData)
      console.log('loading', loading)
    }
  }, [initDispatch, initData, loading])

  const dispatch1 = useQ1Action()
  const q1Value = useSelector((state) => state.answerReducer.q1Answer)
  const dispatch2 = useQ2Action()
  const q2Value = useSelector((state) => state.answerReducer.q2Answer)
  const dispatch3 = useQ3Action()
  const q3Value = useSelector((state) => state.answerReducer.q3Answer)
  const dispatch4 = useQ4Action()
  const q4Value = useSelector((state) => state.answerReducer.q4Answer)
  console.log('q4Value', q4Value)
  const dispatch5 = useQ5Action()
  let q5Value = useSelector((state) => state.answerReducer.q5Answer)
  const dispatchConfirm = useConfirmAction()
  const correctValue = useSelector((state) => state.answerReducer.correct)
  console.log("correct: ", correctValue + "/5")
  if (loading) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <div>
          <header>Welcome to Harry Potter web quiz</header>

          <p>{initData.q1.question}</p>
          <input placeholder="Type your answer" value={q1Value} onChange={(e) => {
            dispatch1(e.target.value)
          }} />

          <p>{initData.q2.question}</p>
          {initData.q2.selection.map((item) => {
            return (
              <div key={item} >
                <input type="radio" name="radio" value={item} defaultChecked={item === q2Value} onChange={() => {
                  dispatch2(item)
                }} />{item}
                <br />
              </div>
            )
          })}

          <p>{initData.q3.question}</p>
          <select placeholder="Select your answer" defaultValue={q3Value} onChange={(e) => {
            dispatch3(e.target.value);
          }}>
            {initData.q3.selection.map((item) => {
              return (
                <option key={item} value={item}>{item}</option>
              )
            })}
          </select>

          <p>{initData.q4.question}</p>
          {initData.q4.selection.map((item) => {
            return (
              <div key={item} defaultValue={q4Value} >
                <input type="checkbox" name="checkbox" value={item} onChange={(e) => {
                  if (e.target.checked) {
                    dispatch4(Array.from(new Set([...q4Value, e.target.value])))
                  } else {
                    q4Value.splice(q4Value.indexOf(e.target.value), 1)
                    dispatch4(q4Value)
                  }

                }}
                />{item}
                <br />
              </div>
            )
          })}

          <p>{initData.q5.question}</p>
          <input type="number" value={q5Value} onChange={(e) => { dispatch5(e.target.value) }} />

          <br />
          <br />
          <button onClick={() => {
            dispatchConfirm()
          }}>Submit</button>
        </div>
      </>
    )
  }
}

