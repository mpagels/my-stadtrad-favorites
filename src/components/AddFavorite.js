import React from 'react'
import { RiBikeLine } from 'react-icons/ri'
import { IconContext } from 'react-icons'

import styled from 'styled-components'
import { Trans } from '@lingui/macro'

export default function AddFavorite() {
  return (
    <IconContext.Provider value={{ size: '10em' }}>
      <Wrapper>
        <Title>
          <Trans>Keine Favoriten gespeichert</Trans>
        </Title>
        <RiBikeLine size={'3em'} />
      </Wrapper>
    </IconContext.Provider>
  )
}

const Title = styled.h2`
  text-align: center;
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
