import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 253px;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  flex-direction: column;
  border: 2px solid #DFE3EB;
  border-radius: 2px;
  padding: 33px;

  & > img {
    background-color: #FFFFFF;
    border: 1px solid #D1DBE6;
    border-radius: 100px;
    padding: 20px;
    display: block;
    overflow: initial;
  }
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
