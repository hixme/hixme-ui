import styled from 'styled-components'

const Wrapper = styled.div`
  ${props => props.topOffset && `
    height: calc(100% - ${props.topOffset}px);
    margin-top: ${props.topOffset}px;
  `}
  position: fixed;
  margin-right: ${props => (props.open ? `-${props.sidebarWidth}` : '0')};
  background: #fff;
  background-color: #fff;
  box-shadow: 0 1px 3px #b9c5cd;
  height: 100%;
  overflow-x: auto;
  padding-bottom: 10px;
  right: 0;
  transition: margin-right 0.5s;
  top: 0;
  ${props => props.sidebarWidth && `width: ${props.sidebarWidth};`}
`

Wrapper.displayName = 'Wrapper'

export default Wrapper
