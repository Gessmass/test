import styled from '@emotion/styled'
import {Button} from "antd"
import {DownloadOutlined} from "@ant-design/icons"
import React from "react";

export const WifiPage = () => {
  return (
    <WifiPageWrapper>
      <DataForm>
        <Button type="primary" icon={<DownloadOutlined/>}>Fetch Data</Button>
      </DataForm>
      <DataDisplay>
      </DataDisplay>
    </WifiPageWrapper>
  )
}

const DataForm = styled.div`
    width: 50%;
    padding: 5px;
    display: flex;
    align-items: end;
    justify-content: center;
`

const WifiPageWrapper = styled.div`
    display: flex;

`

const DataDisplay = styled.div`
    border: 2px solid black;
    border-radius: 6px;
    min-height: 100px;
    width: 50%;
    padding: 5px;
`
