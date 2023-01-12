import styled from 'styled-components'
import Blog from 'assets/icons/Blob.svg'

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(${Blog});
  background-position: center 8rem;
  background-repeat: no-repeat;
`

export const CenterPage = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 16.4rem;
`

export const IconsWrapper = styled.div`
  display: flex;
  margin: 70px 28px 0;
  align-items: center;
  flex-direction: column;
`

export const Description = styled.p`
  color: #374A5E;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-top: 9px;
`

export const Title = styled.h2`
  color: #374A5E;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  margin-top: 7px;
`

export const SubTitle = styled.p`
  color: #33475B;
  font-style: normal;
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  margin-top: 14px;
`
