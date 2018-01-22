import styled from 'styled-components'
import { Row } from 'react-flexbox-grid'

const ChevronRow = styled(Row)`
  transform: ${(props) => {
    console.log('props --- ', props)
    return (props.open ? 'rotate(270deg)' : 'rotate(90deg)')
  }};
  transition: transform .25s ease;
`

ChevronRow.displayName = 'ChevronRow'

export default ChevronRow
