import { Trans, t } from '@lingui/macro'
import styled from 'styled-components'
import Availability from './Availability'
import Language from './Language'
import SettingItem from './SettingItem'

export default function General() {
  return (
    <Wrapper>
      <SettingTitle>
        <Trans>Allemein</Trans>
      </SettingTitle>
      <SettingsList>
        <SettingItem title={t`Hinweis bei geringer Verfügbarkeit`}>
          <Trans>
            Ab wie vielen Fahrrädern soll eine Warnung (gelbe Nummer) angezeigt
            werden?
          </Trans>
          <Availability />
        </SettingItem>
        <SettingItem title={t`Spracheinstellung`}>
          <Language />
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
