import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./components/App"
import reducer from "./redux/reducers/index"

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
