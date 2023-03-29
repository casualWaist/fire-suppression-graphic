import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import FireModelSVG from "./FireModelSVG.jsx"
import FireModelGLTF from "./FireModelGLTF.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className="grid place-content-center w-screen h-screen">
          <FireModelGLTF />
      </div>
  </React.StrictMode>
)
