import React, { useState } from 'react'
import Class from './Class'

const SCHOOL_INFO = [
  {
    "className": "Class 1",
    "students": [
      {
        "userName": "a",
        "userId": 11
      },
      {
        "userName": "b",
        "userId": 22
      },
      {
        "userName": "c",
        "userId": 33
      },
      {
        "userName": "d",
        "userId": 44
      }
    ]
  },
  {
    "className": "Class 2",
    "students": []
  },
  {
    "className": "Class 3",
    "students": [
      {
        "userName": "a",
        "userId": 11
      },
      {
        "userName": "b",
        "userId": 22
      },
      {
        "userName": "c",
        "userId": 33
      },
      {
        "userName": "d",
        "userId": 44
      }
    ]
  },
]
const SchoolInfo = () => {

  return (<>
    {SCHOOL_INFO.map((clas) => {
      return <Class clas={clas} />
    })}
  </>)
}

export default SchoolInfo