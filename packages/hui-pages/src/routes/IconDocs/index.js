import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Icon from '@hixme-ui/icon'
import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const iconList = {
  actions: '',
  alert: 'red',
  arrowDown: 'black',
  arrowLeft: 'light',
  arrowRight: 'light',
  automated: 'light',
  bars: 'green',
  bars2: 'green',
  building: 'light',
  calendar: '',
  chat: 'blue',
  check: '',
  clock: 'primary',
  cloudUpload: '',
  cobra: '',
  cog: 'blue',
  addSubtract: '',
  concealed: 'light',
  creditCard: '',
  curveArrowRight: 'red',
  doctor: '',
  document: 'red',
  documentSign: '',
  dollar: 'green',
  download: '',
  group: 'purple',
  home: 'light',
  heart: 'red',
  heartOutline: 'red',
  info: 'blue',
  lineChart: '',
  list: '',
  lock: 'green',
  magnifyingGlass: 'purple',
  mapPin: 'blue',
  medicalInfo: '',
  menu: 'light',
  menuClosed: 'light',
  message: '',
  newWindow: '',
  noteAdd: '',
  paperclip: 'blue',
  pdf: '',
  pencil: '',
  phone: 'green',
  phoneCircle: 'green',
  plus: '',
  printer: '',
  profile: '',
  ribbon: 'blue',
  shield: '',
  shieldCross: 'red',
  signout: 'black',
  sliders: 'light',
  split: 'light',
  star: '',
  starCircle: 'yellow',
  summary: '',
  testUser: 'light',
  user: 'black',
  userPlus: 'black',
  visible: 'purple',
  checkMarkCircle: '',
  x: 'light',
  xCircle: '',
  xShield: 'red',
}

const IconDocs = () => (
  <div>
    <DocsTitle
      title='Icon'
      subtitle='A Hixme UI styled icon component'
    />
    <Grid fluid>
      <Row center='xs' style={{ marginBottom: '30px' }}>
        <Icon menu size={3} primary />
      </Row>
      <Row center='xs' style={{ marginBottom: '30px' }}>
        <Code>
          {'<Icon menu size={3} />'}
        </Code>
      </Row>
      <Row center='xs' style={{ marginBottom: '30px' }}>
        <Icon menu fontSize={42} building />
      </Row>
      <Row center='xs' style={{ marginBottom: '50px' }}>
        <Code>
          {'<Icon menu fontSize={42} building />'}
        </Code>
      </Row>
      <Row center='xs'>
        <Col xs={12} style={{ margin: '20px' }}>
          <Title smaller>Icon types</Title>
        </Col>
        {Object.keys(iconList).map((name) => {
          const color = iconList[name].length > 0 ? iconList[name] : undefined
          const props = { [name]: true }
          if (color) {
            props[color] = true
          }
          return (
            <Col xs={6} sm={3} style={{ margin: '15px 0' }}>
              <Icon {...props} size={2} />
              <br />
              <Text>{name}</Text>
            </Col>
          )
        })}
      </Row>
    </Grid>
  </div>
)

export default IconDocs
