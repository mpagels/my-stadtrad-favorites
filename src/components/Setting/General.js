import styled from 'styled-components'
import Availability from './Availability'
import SettingItem from './SettingItem'

export default function General() {
  return (
    <Wrapper>
      <SettingTitle>Allemein</SettingTitle>
      <SettingsList>
        <SettingItem title="Hinweis bei geringer Verfügbarkeit">
          Ab wie vielen Fahrrädern soll eine Warnung (gelbe Nummer) angezeigt
          werden?
          <Availability />
        </SettingItem>
      </SettingsList>
    </Wrapper>
  )
}

const SettingsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
`

const SettingTitle = styled.header`
  padding: 0 20px;
  font-weight: 500;
`

const Wrapper = styled.section`
  margin-bottom: 45px;
`
