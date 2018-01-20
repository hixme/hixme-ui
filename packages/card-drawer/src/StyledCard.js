import Card from '@hixme-ui/card'

const StyledCard = Card.extends`
  border-radius: ${props => (props.open ? '6px 6px 0 0 !important' : 'inherit')};  
  transition: border-radius .25s;
`

StyledCard.displayName = 'StyledCard'

export default StyledCard
