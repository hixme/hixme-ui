import React from 'react'
import { Link } from 'react-router-dom'
import Text from '@hixme-ui/text'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Sidebar = () => (
  <Grid fluid>
    <Row>
      <Col xs={12}>
        <Link to='/animate'>
          <Text primary cursor='pointer'>
            Animate
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/bullet-list'>
          <Text primary cursor='pointer'>
            BulletList
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/button'>
          <Text primary cursor='pointer'>
            Button
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/checkbox'>
          <Text primary cursor='pointer'>
            Checkbox
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/card'>
          <Text primary cursor='pointer'>
            Card
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/container'>
          <Text primary cursor='pointer'>
            Container
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/content-container'>
          <Text primary cursor='pointer'>
            ContentContainer
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/currency'>
          <Text primary cursor='pointer'>
            Currency
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/email'>
          <Text primary cursor='pointer'>
            Email
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/form-group'>
          <Text primary cursor='pointer'>
            Form Group
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/forms'>
          <Text primary cursor='pointer'>
            Form Components
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/icon'>
          <Text primary cursor='pointer'>
            Icon
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/input'>
          <Text primary cursor='pointer'>
            Input
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/label'>
          <Text primary cursor='pointer'>
            Label
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/percentage'>
          <Text primary cursor='pointer'>
            Percentage
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/phone'>
          <Text primary cursor='pointer'>
            Phone
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/price'>
          <Text primary cursor='pointer'>
            Price
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/radio-button'>
          <Text primary cursor='pointer'>
            Radio Button
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/select'>
          <Text primary cursor='pointer'>
            Select
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/separator'>
          <Text primary cursor='pointer'>
            Separator
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/social-security'>
          <Text primary cursor='pointer'>
            Social Security
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/table'>
          <Text primary cursor='pointer'>
            Table
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/text'>
          <Text primary cursor='pointer'>
            Text
          </Text>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Link to='/title'>
          <Text primary cursor='pointer'>
            Title
          </Text>
        </Link>
      </Col>
    </Row>
  </Grid>
)

Sidebar.displayName = 'Sidebar'

export default Sidebar
