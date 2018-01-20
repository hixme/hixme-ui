import styled from 'styled-components'
import { Row } from 'react-flexbox-grid'

const StyledRow = styled.withComponent(Row)

const ChevronRow = StyledRow.extends`
  transform: ${props => (props.open ? 'rotate(270deg)' : 'rotate(90deg)')};
  transition: transform .25s ease;
`

ChevronRow.displayName = 'ChevronRow'

export default ChevronRow
