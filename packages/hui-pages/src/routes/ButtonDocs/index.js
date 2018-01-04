import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Button from '@hixme-ui/button'

import Text from '@hixme-ui/text'

import { Code, DocsTitle } from '../../components'

const padded = {
  padding: '10px',
}

const ButtonDocs = () => (
  <div>
    <Grid fluid>

      <DocsTitle
        title='Button'
        subtitle='A button component, with five color gradients,
        and outline option. Outine buttons use the colorTheme'
      />

      <Row center='xs'>
        <Col>
          <div style={padded}>
            <Button>default</Button>
          </div>
          <div style={padded}>
            <Button secondary>secondary</Button>
          </div>
          <div style={padded}>
            <Button blue>blue</Button>
          </div>
          <div style={padded}>
            <Button red>red</Button>
          </div>
          <div style={padded}>
            <Button gold>gold</Button>
          </div>
        </Col>

        <Col>
          <div style={padded}>
            <Button mini light outline>mini light outline</Button>
          </div>
          <div style={padded}>
            <Button small green outline secondary>small green outline</Button>
          </div>
          <div style={padded}>
            <Button outline blue>blue button</Button>
          </div>
          <div style={padded}>
            <Button large outline red>large outline red</Button>
          </div>
          <div style={padded}>
            <Button jumbo outline purple>jumbo outline purple</Button>
          </div>
        </Col>

      </Row>


      <Code style={{ margin: '10px' }}>
        {`import Button from '@hixme-ui/button'

<Button blue>blue</Button>

<Button
  jumbo
  disabled
  purple
  outline
  block
>
  jumbo disabled purple outline block
</Button>
`}
      </Code>
    </Grid>
  </div>
)

export default ButtonDocs
