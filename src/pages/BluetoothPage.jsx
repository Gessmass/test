import styled from '@emotion/styled'
import {useState, useEffect} from "react";
import {Button, Dropdown, Menu} from "antd"
import {DownloadOutlined, RedoOutlined} from "@ant-design/icons"
import {discoverBluetoothDevices} from "../connections/bluetooth";
import React from "react";


export const BluetoothPage = () => {
  
  const [devices, setDevices] = useState([])
  
  const menu = (
    <Menu>
      {devices.map((device, index) => (
        <Menu.Item key={index}>{device}</Menu.Item>
      ))}
    </Menu>
  )
  
  
  return (
    <BluetoothPageWrapper>
      <DataForm>
        <DeviceListWrapper>
          <Button type="primary" icon={<RedoOutlined/>} onClick={() => discoverBluetoothDevices()}>
            Scan Devices
          </Button>
          <Dropdown overlay={menu}>
            <Button>
              Device list
            </Button>
          </Dropdown>
        </DeviceListWrapper>
        <FetchDataWrapper>
          <Button type="primary" icon={<DownloadOutlined/>}>
            Fetch data
          </Button>
        </FetchDataWrapper>
      </DataForm>
      <DataDisplay>
      </DataDisplay>
    </BluetoothPageWrapper>
  )
}

const DeviceListWrapper = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const FetchDataWrapper = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`


const DataForm = styled.div`
    width: 50%;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    gap: 10px;
    min-height: 300px;
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
