import styled from 'styled-components'
import Blog from 'assets/icons/Blob.svg'

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Blog});
  background-position: center 8rem;
  background-repeat: no-repeat;
`

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 28px;
`

export const Description = styled.p`
  color: #374A5E;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-top: 9px;
`
