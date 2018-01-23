import StyledCard from './StyledCard'

const StyledTrigger = StyledCard.extend`
  user-select: none;
  cursor: pointer;
  border-radius: ${props => (props.open ? '6px 6px 0 0 !important' : '6px')};
`

StyledTrigger.displayName = 'StyledTrigger'

export default StyledTrigger
