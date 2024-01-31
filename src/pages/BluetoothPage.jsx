import styled from '@emotion/styled'
import {useState, useEffect} from "react";
import {Button, Dropdown, Menu} from "antd"
import {DownloadOutlined} from "@ant-design/icons"

export const BluetoothPage = () => {
  
  const [devices, setDevices] = useState([])
  
  const menu = (
    <Menu>
      {devices.map((device, index) => (
        <Menu.Item key={index}>{device}</Menu.Item>
      ))}
    </Menu>
  )
  
  
  const discoverBluetoothDevices = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });
      setDevices((prevDevices) => [...prevDevices, device.name]);
    } catch (error) {
      console.error("Erreur lors de la recherche d'appareils Bluetooth :", error);
    }
  };
  
  
  console.log(devices)
  
  return (
    <BluetoothPageWrapper>
      <DataForm>
        <Dropdown overlay={menu}>
          <Button>
            Device list
          </Button>
        </Dropdown>
        <Button type="primary" icon={<DownloadOutlined/>} onClick={() => discoverBluetoothDevices()}>
          Scan Devices
        </Button>
      </DataForm>
      <DataDisplay>
      
      </DataDisplay>
    </BluetoothPageWrapper>
  )
}


const DataForm = styled.div`
    width: 50%;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`

const BluetoothPageWrapper = styled.div`
    display: flex;
`

const DataDisplay = styled.div`
    border: 2px solid black;
    border-radius: 6px;
    min-height: 200px;
    width: 50%;
    padding: 10px;
    background-color: #fff6f0;
`
