import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {LayoutPage} from './pages/LayoutPage.jsx'
import {BluetoothPage} from "./pages/BluetoothPage"
import {WifiPage} from "./pages/WifiPage"
import {EthernetPage} from "./pages/EthernetPage"

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