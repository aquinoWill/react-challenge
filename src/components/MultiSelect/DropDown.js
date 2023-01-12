import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

import { Icon } from 'components'
import { dropdown } from 'assets'
import { ListItens } from './ListItens'
import { DropdownWrapper, Title, ListItensWrapper } from './MultiSelect.styled'

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(true)
  const dropRef = useRef(null)
  const iconRef = useRef(null)
  const tweenDrop = useRef(null)
  const tweenIcon = useRef(null)

  useEffect(() => {
    tweenDrop.current = gsap.timeline().to(
      dropRef.current, { height: 'auto', opacity: 1, duration: 0.3 }
    )

    tweenIcon.current = gsap.timeline().to(
      iconRef.current, { rotate: -180, duration: 0.3 }
    )
  }, [])

  useEffect(() => {
    tweenDrop.current.reversed(!tweenDrop.current.reversed())
    tweenIcon.current.reversed(!tweenIcon.current.reversed())
  }, [isOpen])

  return (
    <DropdownWrapper onClick={() => setIsOpen(!isOpen)}>
      <Icon name='check' alt='check' />
      <Title>All contacts</Title>
      <img ref={iconRef} src={dropdown} alt='icon dropdown' />
      <ListItensWrapper ref={dropRef}>
        <ListItens hasOpen={isOpen} />
      </ListItensWrapper>
    </DropdownWrapper>
  )
}
