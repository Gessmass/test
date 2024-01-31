import styled from '@emotion/styled'
import {Button, Dropdown, Menu} from "antd"
import {DownloadOutlined} from "@ant-design/icons"


export const BluetoothPage = () => {
  
  const devices = ["device1", "device2"]
  
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
        <Dropdown overlay={menu}>
          <Button>
            Select Device
          </Button>
        </Dropdown>
        <Button type="primary" icon={<DownloadOutlined/>}>
          Fetch Data
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
