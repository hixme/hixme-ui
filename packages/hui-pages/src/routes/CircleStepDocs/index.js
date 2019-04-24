import React from 'react'
import theme from '@hixme-ui/theme'
import CircleStep from '@hixme-ui/circle-step'

import { Code, DocsTitle } from '../../components'

const CircleStepDocs = () => (
  <div>
    <DocsTitle
      title='CircleStep'
      subtitle='A component for checklist-type UX'
    />
    <CircleStep>1</CircleStep>
    <br />
    <Code>{`<CircleStep display='flex'>
  1
</CircleStep>`}</Code>

    <br />
    <br />
    <CircleStep completed>1</CircleStep>
    <br />
    <Code>{`<CircleStep completed>
  1
</CircleStep>`}</Code>

    <br />
    <br />
    <CircleStep uncompletedColor={theme.colors.yellow} openCircle />
    <br />
    <Code>
      {'<CircleStep openCircle uncompletedColor={theme.colors.yellow} />'}
    </Code>

    <br />
    <br />
    <CircleStep uncompletedColor={theme.colors.purple}>1</CircleStep>
    <br />
    <Code>
      {`<CircleStep uncompletedColor={theme.colors.purple}>
  1
</CircleStep>`}
    </Code>
  </div>
)

export default CircleStepDocs
