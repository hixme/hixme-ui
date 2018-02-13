import styled from 'styled-components'

const ChevronRow = styled.div`
  transform: ${props => (props.open ? 'rotate(270deg)' : 'rotate(90deg)')};
  transition: transform .25s ease;
  width: 20px;
`

ChevronRow.displayName = 'ChevronRow'

export default ChevronRow
