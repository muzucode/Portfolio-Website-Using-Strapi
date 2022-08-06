/**
 * This file is for exporting styled-components that are commonly
 * used and shared among React components
 */
import styled from "styled-components";

export const C = styled.div`
  width: 100%;
  height: 100%;
`
export const CF = styled(C)`
  display: flex;
`
export const CFC = styled(CF)`
  display: flex;
  flex-direction: column;
`
export const CFR = styled(CF)`
  display: flex;
  flex-direction: row;
`
export const CFCC = styled(CFC)`
  align-items: center;
  justify-content: center;
`
export const CFRC = styled(CFR)`
  align-items: center;
  justify-content: center;
`
