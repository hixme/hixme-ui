import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Container from '@hixme-ui/container'
import CardDrawer from '@hixme-ui/card-drawer'
import Text from '@hixme-ui/text'

import { Code, DocsTitle } from '../../components'

const CardDrawerDocs = () => (
  <Grid fluid>
    <DocsTitle title='Card Drawer' subtitle='An accordion component implemented using Card and react-collapsible' />
    <Row style={{ margin: '20px 0 50px 0' }}>
      <Col xs={12}>
        <Container lightest rounded padding='30px 50px'>
          <CardDrawer cardHeader='Card Drawer Title' collapsible>
            <Container>
              <Text>I am in a card drawer</Text>
            </Container>
          </CardDrawer>
        </Container>
      </Col>
    </Row>
    <Row center='xs'>
      <Col xs={12} sm={8}>
        <Code>
          {`<CardDrawer cardHeader='Card Drawer Title' collapsible>
  <Container>
    <Text>I am in a card drawer</Text>
  </Container>
</CardDrawer>`}
        </Code>
      </Col>
    </Row>
    <Row style={{ margin: '20px 0 50px 0' }}>
      <Col xs={12}>
        <Container lightest rounded padding='30px 50px'>
          <CardDrawer open cardHeader='Card Drawer Title'>
            <Container>
              <Text>I am in a card drawer</Text>
            </Container>
          </CardDrawer>
        </Container>
      </Col>
    </Row>
    <Row center='xs'>
      <Col xs={12} sm={8}>
        <Code>
          {`<CardDrawer open cardHeader='Card Drawer Title'>
  <Container>
    <Text>I am in a card drawer</Text>
  </Container>
</CardDrawer>`}
        </Code>
      </Col>
    </Row>
  </Grid>
)

export default CardDrawerDocs

