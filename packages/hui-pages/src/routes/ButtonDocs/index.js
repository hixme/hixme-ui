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
        and outline option. Outine buttons use the colorTheme. Any button may
        be a submit button, just add submitting (bool) and submittingText (string)'
      />
      <Button split blue>SplitButton</Button>
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
          <div style={padded}>
            <Button gold>
              <Text bold blue>Gold button, blue text</Text>
            </Button>
          </div>
          <div style={padded}>
            <Button block submitting>default</Button>
          </div>
          <div style={padded}>
            <Button block submitting={false} submittingText='Processing...'>Not Processing</Button>
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
            <Button outline blue block submitting>Click to send</Button>
          </div>
          <div style={padded}>
            <Button outline blue block submitting submittingText='Processing request'>Click to send</Button>
          </div>
          <div style={padded}>
            <Button large outline red>large outline red</Button>
          </div>
          <div style={padded}>
            <Button jumbo outline purple>
              <Text blue>Purple outline, blue text</Text>
            </Button>
          </div>
        </Col>

      </Row>


      <div style={{ margin: '10px' }}>
        <Code>
          {`import Button from '@hixme-ui/button'
import Text from '@hixme-ui/text'

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

<Button
  jumbo
  type='submit'
  purple
  outline
  block
  submitting={false}
  submittingText='Doing that thing...'
>
  Update
</Button>

<Button gold>
  <Text bold blue>Gold button, blue text</Text>
</Button>`}
        </Code>
      </div>
    </Grid>
  </div>
)

export default ButtonDocs
