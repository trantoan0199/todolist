import React from "react"

export default function withFireBase(param1, param2) {
  return function (Component) {
    return function (props) {
      return <Component static={1} param1={param1} param2={param2} {...props} />
    }
  }
}
