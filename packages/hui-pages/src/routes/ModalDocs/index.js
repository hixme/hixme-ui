import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Button from '@hixme-ui/button'
import Container from '@hixme-ui/container'
import Modal from '@hixme-ui/modal'
import Table from '@hixme-ui/table'
import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

/* eslint-disable no-trailing-spaces */
class ModalDocs extends React.Component {
  state = { 
    openDefault: false,
    openSmall: false,
    openMedium: false,
    openLarge: false,
    openDialog: false,
    openErrorDialog: false,
  }

  handleClose(key) {
    this.setState({ [key]: false })
  }

  handleOpen(key) {
    this.setState({ [key]: true })
  }

  render() {
    return (
      <div>
        <DocsTitle title='Modal' subtitle='A hixme-styled modal component built on react-modal' />
        <Container padding='20px 0'>
          <Text medium thin>By default, the modal component renders a full screen modal with a close button.</Text>
        </Container>
        <Row center='xs'>
          <Col xs={12}>
            <Container noPadding marginBottom='20px'>
              <Button outline large light onClick={() => this.handleOpen('openDefault')}>Open modal</Button>
            </Container>
          </Col>
        </Row>
        <Modal 
          title='Mr. Modal' 
          isOpen={this.state.openDefault} 
          handleClose={() => this.handleClose('openDefault')}
          ariaHideApp={false}
        >
          <Container margin='80px 20px' textCenter>
            <Text medium thin>{"Mr. Modal's children"}</Text>
          </Container>
        </Modal>
        <Code>
          {`<Modal 
  title='Mr. Modal' 
  isOpen={this.state.openDefault} 
  handleClose={() => this.handleClose('openDefault')}
  ariaHideApp={false}
>
  <Container margin='80px 20px' textCenter>
    <Text medium thin>{"Mr. Modal's children"}</Text>
  </Container>
</Modal>`}
        </Code>

        <Container padding='20px 0' marginTop='60px'>
          <Text medium thin>
            However, there are preset <Text bold blue>small</Text>, <Text bold blue>medium</Text>, 
            and <Text bold blue>large</Text> style options for more flexibility. Each is a 
            boolean prop on the modal component.
          </Text>
        </Container>
        <Row center='xs'>
          <Col xs={12} sm={4}>
            <Container noPadding marginBottom='20px'>
              <Button large outline primary onClick={() => this.handleOpen('openSmall')} block>Open small modal</Button>
            </Container>
          </Col>
          <Col xs={12} sm={4}>
            <Container noPadding marginBottom='20px'>
              <Button large outline blue onClick={() => this.handleOpen('openMedium')} block>Open medium modal</Button>
            </Container>
          </Col>
          <Col xs={12} sm={4}>
            <Container noPadding marginBottom='20px'>
              <Button large outline danger onClick={() => this.handleOpen('openLarge')} block>Open large modal</Button>
            </Container>
          </Col>
        </Row>
        
        {/* Modal sizes */}
        <Modal 
          title='Small modal' 
          small
          isOpen={this.state.openSmall} 
          handleClose={() => this.handleClose('openSmall')}
          ariaHideApp={false}
        >
          <Container margin='80px 20px' textCenter>
            <Text medium thin>Small modal content</Text>
          </Container>
        </Modal>
        <Modal 
          title='Medium modal' 
          medium
          isOpen={this.state.openMedium} 
          handleClose={() => this.handleClose('openMedium')}
          ariaHideApp={false}
        >
          <Container margin='80px 20px' textCenter>
            <Text medium thin>Medium modal content</Text>
          </Container>
        </Modal>
        <Modal 
          title='Large modal' 
          large
          isOpen={this.state.openLarge} 
          handleClose={() => this.handleClose('openLarge')}
          ariaHideApp={false}
        >
          <Container margin='80px 20px' textCenter>
            <Text medium thin>Large modal content</Text>
          </Container>
        </Modal>

        <Code>
          {`<Modal 
  title='Small modal' 
  small
  isOpen={this.state.openSmall} 
  handleClose={() => this.handleClose('openSmall')}
  ariaHideApp={false}
>
  <Container margin='80px 20px' textCenter>
    <Text medium thin>Small modal content</Text>
  </Container>
</Modal>`}
        </Code>

        <Container padding='20px 0' marginTop='60px'>
          <Text medium thin>
            In addition to the size options, there are preset dialog modal options: 
            {' '}
            <Text bold blue>dialog</Text> and <Text bold blue>errorDialog</Text>. You can pass in labels and 
            click handlers for the cancel and confirm actions. If no cancel handler is specified, the 
            handleClose function will be used.
          </Text>
        </Container>
        <Row center='xs'>
          <Col xs={12} sm={4}>
            <Container noPadding marginBottom='20px'>
              <Button large primary onClick={() => this.handleOpen('openDialog')} block>Open dialog modal</Button>
            </Container>
          </Col>
        </Row>
        <Modal 
          title='Dialog modal' 
          dialog
          small
          isOpen={this.state.openDialog} 
          handleClose={() => this.handleClose('openDialog')}
          ariaHideApp={false}
        >
          <Container padding='80px 20px' textCenter>
            <Text medium thin>{"Mr. Modal's children"}</Text>
          </Container>
        </Modal>
        <Code>
          {`<Modal 
  title='Mr. Modal' 
  isOpen={this.state.openDialog} 
  handleClose={() => this.handleClose('openDialog')}
  ariaHideApp={false}
>
  <Container margin='80px 20px' textCenter>
    <Text medium thin>{"Mr. Modal's children"}</Text>
  </Container>
</Modal>`}
        </Code>
        <Row center='xs'>
          <Col xs={12} sm={4}>
            <Container noPadding margin='60px 0 20px 0'>
              <Button 
                large 
                danger 
                onClick={() => this.handleOpen('openErrorDialog')}
                block
              >
                Open error dialog modal
              </Button>
            </Container>
          </Col>
        </Row>
        <Modal 
          title='Error dialog modal' 
          errorDialog
          small
          cancelLabel='If it bleeds, we can kill it'
          confirmLabel="Kill me, I'm here!"
          isOpen={this.state.openErrorDialog} 
          handleClose={() => this.handleClose('openErrorDialog')}
          ariaHideApp={false}
        >
          <Container padding='80px 20px' textCenter>
            <Text medium thin>{"Mr. Modal's children"}</Text>
          </Container>
        </Modal>
        <Code>
          {`<Modal 
  title='Error dialog modal' 
  errorDialog
  small
  isOpen={this.state.openErrorDialog} 
  handleClose={() => this.handleClose('openErrorDialog')}
  ariaHideApp={false}
>
  <Container padding='80px 20px' textCenter>
    <Text medium thin>{"Mr. Modal's children"}</Text>
  </Container>
</Modal>`}
        </Code>
        <Row>
          <Col xs={12}>
            <Container padding='20px 0'>
              <Text medium thin>
                <Text bold warning>NOTE:</Text>
                {' '}
                The 
                {' '}
                <Text href='http://reactcommunity.org/react-modal/accessibility/#app-element'>
                  ariaHideApp prop
                </Text> 
                {' '}
                is only necessary when using the modal without setting the appElement. This can be done with the 
                {' '}
                <Text href='https://www.npmjs.com/package/@hixme/modal'>
                  MrModalManager in @hixme/modal
                </Text>
              </Text>.
            </Container>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Container padding='20px 0'>
              <Text medium thin>
                Because this modal component is built on top of 
                {' '}
                <Text href='http://reactcommunity.org/react-modal/'>
                  react-modal
                </Text>, you can use any props available there as well.
              </Text>
            </Container>
          </Col>
        </Row>

        <Row style={{ margin: '20px 0' }}>
          <Title smaller>Props</Title>
        </Row>
        <Row center='xs'>
          <Col xs={12}>
            <Table striped>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Required</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>backgroundColor</td>
                  <td>string</td>
                  <td>N/A</td>
                  <td>Yes</td>
                  <td>Easy way to change the modal color</td>
                </tr>
                <tr>
                  <td>handleClose</td>
                  <td>function</td>
                  <td>N/A</td>
                  <td>Yes</td>
                  <td>Close handler</td>
                </tr>
                <tr>
                  <td>hideCloseButton</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Yes</td>
                  <td>Hide the default close button</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>object</td>
                  <td>N/A</td>
                  <td>No</td>
                  <td>Override modal styles</td>
                </tr>
                <tr>
                  <td>title</td>
                  <td>string</td>
                  <td>N/A</td>
                  <td>No</td>
                  <td>Modal title header</td>
                </tr>
                <tr>
                  <td>zIndex</td>
                  <td>number</td>
                  <td>1001</td>
                  <td>No</td>
                  <td>Modal z-index value</td>
                </tr>
                <tr>
                  <td>small</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>No</td>
                  <td>Modal with 568px max-width</td>
                </tr>
                <tr>
                  <td>medium</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>No</td>
                  <td>Modal with 800px max-width</td>
                </tr>
                <tr>
                  <td>large</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>No</td>
                  <td>Modal with 1024px max-width</td>
                </tr>
                <tr>
                  <td>middle</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>No</td>
                  <td>Vertically align content in the center of the modal</td>
                </tr>
                <tr>
                  <td>bottom</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>No</td>
                  <td>Vertically align content on the bottom of the modal</td>
                </tr>
                <tr>
                  <td>contentCenter</td>
                  <td>`boolean`</td>
                  <td>false</td>
                  <td>No</td>
                  <td>Horizontally align content center</td>
                </tr>
                <tr>
                  <td>contentEnd</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>No</td>
                  <td>Horizontally align content right</td>
                </tr>
                <tr>
                  <td>contentPadding</td>
                  <td>string</td>
                  <td>null</td>
                  <td>No</td>
                  <td>Padding for the modal content</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row style={{ margin: '40px 0 20px 0' }}>
          <Title smaller>Dialog props</Title>
        </Row>
        <Row center='xs'>
          <Col xs={12}>
            <Table striped>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Required</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>cancelProcessing</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>No</td>
                  <td>Show processing state on cancel button</td>
                </tr>
                <tr>
                  <td>cancelSubmittingText</td>
                  <td>string</td>
                  <td>N/A</td>
                  <td>No</td>
                  <td>Text shown on the cancel button when cancelProcessing is true</td>
                </tr>
                <tr>
                  <td>cancelHandler</td>
                  <td>function</td>
                  <td>handleClose()</td>
                  <td>No</td>
                  <td>When `dialog = true`, function called on cancel</td>
                </tr>
                <tr>
                  <td>cancelLabel</td>
                  <td>string</td>
                  <td>{"'Cancel'"}</td>
                  <td>No</td>
                  <td>When `dialog = true`, label on the cancel button</td>
                </tr>
                <tr>
                  <td>confirmProcessing</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>No</td>
                  <td>Show processing state on confirm button</td>
                </tr>
                <tr>
                  <td>confirmSubmittingText</td>
                  <td>string</td>
                  <td>N/A</td>
                  <td>No</td>
                  <td>Text shown on the confirm button when confirmProcessing is `true`</td>
                </tr>
                <tr>
                  <td>confirmHandler</td>
                  <td>function</td>
                  <td>N/A</td>
                  <td>No</td>
                  <td>When `dialog = true`, function called on confirm</td>
                </tr>
                <tr>
                  <td>confirmLabel</td>
                  <td>string</td>
                  <td>{"'Ok'"}</td>
                  <td>No</td>
                  <td>When `dialog = true`, label on the confirm button</td>
                </tr>
                <tr>
                  <td>dialog</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>No</td>
                  <td>Show dialog modal</td>
                </tr>
                <tr>
                  <td>errorDialog</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>No</td>
                  <td>Show error dialog modal</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ModalDocs

