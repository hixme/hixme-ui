import styled from 'styled-components'

const ContentContainer = styled.div`
  max-width: ${(props) => {
    if (props.contentWidth) return props.contentWidth
    return '900px'
  }}; 
  padding: ${(props) => {
    if (props.contentPadding) return props.contentPadding
    return '20px'
  }};
  margin: ${(props) => {
    if (props.contentMargin) return props.contentMargin
    return '0 auto'
  }};
  ${props => props.height && `height: ${props.height};`}
`

export default ContentContainer
