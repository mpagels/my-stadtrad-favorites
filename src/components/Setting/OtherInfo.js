import { t, Trans } from '@lingui/macro'
import styled from 'styled-components'
import ContactIcons from './ContactIcons'
import SettingItem from './SettingItem'

export default function OtherInfo() {
  return (
    <Wrapper>
      <SettingTitle>
        <Trans>Weitere Infos</Trans>
      </SettingTitle>
      <SettingsList>
        <SettingItem title="Source-Code">
          <Trans>
            Das Project ist Open Source. <br />
            Für mehr Informationen, Bugs und/oder Feature-Anfragen schaue auf
            der
            <strong>
              {' '}
              <a
                href="https://github.com/mpagels/my-stadtrad-favorites"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Seite
              </a>{' '}
            </strong>
            vorbei.
          </Trans>
          <br />
          <Trans>Design von: </Trans>
          <strong>
            {' '}
            <a
              href="https://github.com/soerenstein"
              target="_blank"
              rel="noreferrer"
            >
              Sören Stein
            </a>{' '}
          </strong>
        </SettingItem>
        <SettingItem title={t`Datenquelle`}>
          <Trans>
            Diese App bezieht ihre Echtzeitdaten von iot.hamburg.de <br /> Viele
            Informationen zur API sind auch{' '}
            <strong>
              <a
                href="https://metaver.de/trefferanzeige?docuuid=D18F375E-FA5F-4998-AFF8-557969F44479"
                target="_blank"
                rel="noreferrer"
              >
                hier
              </a>{' '}
            </strong>
            zu finden.
          </Trans>
        </SettingItem>

        <SettingItem title={t`Kontakt`}>
          <Trans>
            {' '}
            Hi 👋, ich bin Martin Pagels, begeisterter Programmierer - und
            neuerdings Fahradfahrer. Mit dieser kleinen App optimiere ich die
            StadtRAD App nach meinen Bedürfnissen. Wenn du Lust hast, connecte
            dich gerne mit mir.
          </Trans>
          <ContactIcons />
          <WriteMe href="mailto:office@martinpagels.de">
            <Trans>Schreib mir</Trans>
          </WriteMe>
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

const WriteMe = styled.a`
  display: flex;
  justify-content: center;
  background-color: lightgray;
  font-size: 0.9em;
  font-weight: 700;
  color: #003063;
  padding: 10px;
  border-radius: 10px;
  width: 100px;
`
const Wrapper = styled.section`
  margin-bottom: 45px;
`
