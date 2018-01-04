import React from 'react'
import { Button, OutlineButton } from '@hixme-ui/button'

import Text from '@hixme-ui/text'

import { Code, DocsTitle } from '../../components'

const ButtonDocs = () => (
  <div>
    <DocsTitle
      title='Button'
      subtitle='A gradient button component, with five color gradients'
    />

    <Text>Color options:</Text>
    <br />
    <br />

    <Button>DEFAULT</Button>
    <br />
    <br />

    <Button secondary>SECONDARY</Button>
    <br />
    <br />

    <Button red >RED</Button>
    <br />
    <br />

    <Button blue>BLUE</Button>
    <br />
    <br />

    <Button gold>GOLD</Button>
    <br />
    <br />

    <Text>Size options</Text>
    <br />
    <br />

    <Button mini blue>Mini</Button>
    <br />
    <br />

    <Button small blue>Small</Button>
    <br />
    <br />

    <Button blue>Default</Button>
    <br />
    <br />

    <Button large blue>Large</Button>
    <br />
    <br />

    <Button jumbo blue>Jumbo</Button>
    <br />
    <br />

    <Button jumbo disabled blue>Jumbo Disabled</Button>
    <br />
    <br />

    <DocsTitle
      title='Outline Button'
      subtitle='An Outline button component, using colorTheme'
    />

    <OutlineButton>DEFAULT</OutlineButton>
    <br />
    <br />
    <OutlineButton red>RED</OutlineButton>
    <br />
    <br />
    <OutlineButton blue>BLUE</OutlineButton>
    <br />
    <br />
    <OutlineButton green>GREEN</OutlineButton>
    <br />
    <br />
    <OutlineButton primary>PRIMARY</OutlineButton>
    <br />
    <br />
    <OutlineButton purple>PURPLE</OutlineButton>
    <br />
    <br />
    <OutlineButton mini purple>Mini</OutlineButton>
    <br />
    <br />
    <OutlineButton small purple>Small</OutlineButton>
    <br />
    <br />
    <OutlineButton purple>Default</OutlineButton>
    <br />
    <br />
    <OutlineButton large purple>Large</OutlineButton>
    <br />
    <br />
    <OutlineButton jumbo purple>Jumbo</OutlineButton>
    <br />
    <br />
    <OutlineButton jumbo disabled purple>Jumbo Disabled</OutlineButton>
    <br />
    <br />
    <OutlineButton jumbo light>Light Jumbo Disabled</OutlineButton>
    <br />
    <br />

    <Code>
      {`<Button blue>Blue</Button>
<OutlineButton jumbo disabled purple>Jumbo Disabled</OutlineButton>
`}
    </Code>
  </div>
)

export default ButtonDocs
