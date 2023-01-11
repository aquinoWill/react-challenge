import React from 'react'
import { Card, Icon } from 'components'
import { Wrapper, Description, IconsWrapper } from './Home.styled'

export const Home = () => {
  return (
    <Wrapper>
      <Card
        title='Gmail'
        icon='google'
        subTitle='These Gmail contacts will sync to MailChimp'
      />
      <IconsWrapper>
        <Icon name='arrows' alt='Sync Contacts' />
        <Description>Sync Contacts</Description>
      </IconsWrapper>
      <Card
        title='Mailchimp'
        icon='mailship'
        subTitle='These Mailchimp contacts will sync to Gmail'
      />
    </Wrapper>
  )
}
