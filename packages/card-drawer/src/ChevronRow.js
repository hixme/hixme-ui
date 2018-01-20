import { Row } from 'react-flexbox-grid'

const ChevronRow = Row.extends`
  transform: ${props => (props.open ? 'rotate(270deg)' : 'rotate(90deg)')};
  transition: transform .25s ease;
`

ChevronRow.displayName = 'ChevronRow'

export default ChevronRow
