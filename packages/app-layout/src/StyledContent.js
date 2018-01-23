import styled from 'styled-components'

const StyledContent = styled.div`
  ${props => props.fixed && 'padding: 56px 0 0 0;'}
  @media print {
    padding: 0;
  }
`

StyledContent.displayName = 'StyledContent'

export default StyledContent
