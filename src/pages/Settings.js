import React from 'react'
import Love from '../components/Love'
import styled from 'styled-components'
import OtherInfo from '../components/Setting/OtherInfo'
import General from '../components/Setting/General'

export default function Settings() {
  return (
    <PageWrapper>
      <General />
      <OtherInfo />
      <Love />
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  background-color: #003063;
  color: white;
  padding: 20px 20px 140px 20px;
`
