import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 2px;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #F5F8FA;
  border: 1px solid #CBD6E2;
`

export const DropdownWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Title = styled.h2`
  color: #33475B;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`

export const ListItensWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`

export const List = styled.ul`
  width: 100%;
  max-height: 82px;
  list-style: none;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    height: 1px;
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #CBD6E2;
    border-radius: 3px;
    width: 10px;
  }
`

export const Item = styled.li`
  color: #33475B;
  display: flex;
  font-size: 16px;
  position: relative;
  flex-direction: column;
`

export const Label = styled.label`
  padding: 0.75rem 0 0 2rem;
  display: inline-block;
  width: 100%;
  user-select: none;
  cursor: pointer;
`

export const Checkbox = styled.input`
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border: 1.7px solid #7C99B6;
  border-radius: 2px;
  vertical-align: sub;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  outline: none;

  &:checked {
    background-color: #7C99B6;
    border-color: #7C99B6;

    &:after {
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background-size: 30px;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==");

      &:focus,
      &:hover {
        border-color: #7C99B6;
      }
    }
  }
`
