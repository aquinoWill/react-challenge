import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { Card, Icon, MultiSelect } from 'components'
import { arrows } from 'assets'
import { googleData, mailchimpData } from 'utils/constants'
import { Wrapper, CenterPage, Description, IconsWrapper, Title, SubTitle } from './Home.styled'

export const Home = () => {
  const [syncContacts, setSyncContacts] = useState(true)
  const syncRef = useRef(null)
  const tween = useRef(null)

  useEffect(() => {
    tween.current = gsap.timeline().to(
      syncRef.current, { rotate: -180, duration: 0.5 }
    )
  }, [])

  useEffect(() => {
    tween.current.reversed(!tween.current.reversed())
  }, [syncContacts])

  return (
    <Wrapper>
      <CenterPage>
        <Card>
          <Icon name='google' alt='Icon google' />
          <Title>Gmail</Title>
          <SubTitle>These Gmail contacts will sync to MailChimp</SubTitle>
          <MultiSelect options={googleData} />
        </Card>
        <IconsWrapper onClick={() => setSyncContacts(!syncContacts)}>
          <img ref={syncRef} src={arrows} alt='Sync Contacts' />
          <Description>
            { syncContacts ? 'Sync Contacts' : 'All done!' }
          </Description>
        </IconsWrapper>
        <Card>
          <Icon name='mailchimp' alt='Icon mailchimp' />
          <Title>Mailchimp</Title>
          <SubTitle>These Mailchimp contacts will sync to Gmail</SubTitle>
          <MultiSelect options={mailchimpData} />
        </Card>
      </CenterPage>
    </Wrapper>
  )
}
