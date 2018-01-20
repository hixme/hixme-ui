import styled from 'styled-components'
import Card from '@hixme-ui/card'

const NewCard = styled.withComponent(Card)

const StyledCard = NewCard.extends`
  border-radius: ${props => (props.open ? '6px 6px 0 0 !important' : 'inherit')};  
  transition: border-radius .25s;
`

StyledCard.displayName = 'StyledCard'

export default StyledCard
