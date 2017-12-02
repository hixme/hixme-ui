import { TextBase } from '@hixme-ui/text'

export const TitleDefault = TextBase.withComponent('h1')

const Title = ({ children, ...props }) => <TitleDefault>{children}</TitleDefault>
