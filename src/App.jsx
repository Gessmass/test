import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {LayoutPage} from '../../medeo/electron/app/src/pages/LayoutPage.jsx'
import {BluetoothPage} from "../../medeo/electron/app/src/pages/BluetoothPage"
import {WifiPage} from "../../medeo/electron/app/src/pages/WifiPage"
import {EthernetPage} from "../../medeo/electron/app/src/pages/EthernetPage"
import React from "react";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPage/>}>
          <Route index path="/bluetooth" element={<BluetoothPage/>}/>
          <Route path="/wifi" element={<WifiPage/>}/>
          <Route path="/ethernet" element={<EthernetPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}