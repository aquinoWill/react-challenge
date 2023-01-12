import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { Card } from 'components'
import { arrows } from 'assets'
import { Wrapper, Description, IconsWrapper } from './Home.styled'

export const Home = () => {
  const [syncArrows, setSyncArrows] = useState(true)
  const syncRef = useRef(null)
  const tween = useRef(null)

  useEffect(() => {
    tween.current = gsap.timeline().to(
      syncRef.current, { rotate: -180, duration: 0.5 }
    )
  }, [])

  useEffect(() => {
    tween.current.reversed(!tween.current.reversed())
  }, [syncArrows])

  return (
    <Wrapper>
      <Card
        title='Gmail'
        icon='google'
        subTitle='These Gmail contacts will sync to MailChimp'
      />
      <IconsWrapper onClick={() => setSyncArrows(!syncArrows)}>
        <img ref={syncRef} src={arrows} alt='Sync Contacts' />
        <Description>
          { syncArrows ? 'Sync Contacts' : 'All done!' }
        </Description>
      </IconsWrapper>
      <Card
        title='Mailchimp'
        icon='mailship'
        subTitle='These Mailchimp contacts will sync to Gmail'
      />
    </Wrapper>
  )
}
