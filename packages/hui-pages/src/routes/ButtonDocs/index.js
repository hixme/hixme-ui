import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Button from '@hixme-ui/button'
import Card from '@hixme-ui/card'
import Text from '@hixme-ui/text'

import Code from 'components/Code'
import DocsTitle from 'components/DocsTitle'
import CategoryHeader from 'components/CategoryHeader'

const padded = {
  padding: '10px',
}

const SplitContent = () => (
  <Card style={{ position: 'absolute', left: '0', top: '100%', zIndex: 1 }}>
    I get rendered when the split button arrow is clicked
  </Card>
)

const ButtonDocs = () => (
  <Grid fluid>
    <DocsTitle
      title='Button'
      subtitle='A button component, with five color gradients,
      and outline option. Outine buttons use the colorTheme. Any button may
      be a submit button, just add loading (bool) and loadingText (string)'
    />
    <Row center='xs' style={{ marginBottom: '60px' }}>
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
          <Button block loading>default</Button>
        </div>
        <div style={padded}>
          <Button block loading={false} loadingText='Processing...'>Not Processing</Button>
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
          <Button outline blue block loading>Click to send</Button>
        </div>
        <div style={padded}>
          <Button outline blue block loading loadingText='Processing request'>Click to send</Button>
        </div>
        <div style={padded}>
          <Button large outline red>large outline red</Button>
        </div>
        <div style={padded}>
          <Button jumbo outline purple>
            <Text blue>Purple outline, blue text</Text>
          </Button>
        </div>
        <div style={padded}>
          <Button
            light
            split
            onClick={() => alert("It appears you've clicked the main button")}
            contentComponent={SplitContent}
          >
            Split Button light
          </Button>
        </div>
        <div style={padded}>
          <Button light menu contentComponent={SplitContent}>
            Menu Button light
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
  loading={false}
  loadingText='Doing that thing...'
>
  Update
</Button>

<Button gold>
  <Text bold blue>Gold button, blue text</Text>
</Button>`}
      </Code>
    </div>
    <CategoryHeader title='Menu Button and Split Button' />
    <Row>
      <Col xs={12} style={{ marginBottom: '20px' }}>
        <Text medium thin>
          These button options offer some additional functionality. This is an example of their usage.
        </Text>
      </Col>
      <Col xs={12}>
        <Code>
          {`// Component to be rendered by the split and menu button
const SplitContent = () => (
  <Card style={{ position: 'absolute', left: '0', top: '100%' }}>
    I get rendered when the split button arrow is clicked
  </Card>
)

<Button light menu contentComponent={SplitContent}>
  Menu Button light
</Button>

<Button
  light
  split
  onClick={() => alert("It appears you've clicked the main button")}
  contentComponent={SplitContent}
>
  Split Button light
</Button>`}
        </Code>
      </Col>
    </Row>
  </Grid>
)

export default ButtonDocs
