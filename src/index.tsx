import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/index";
// import  'antd/dist/antd.less'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);