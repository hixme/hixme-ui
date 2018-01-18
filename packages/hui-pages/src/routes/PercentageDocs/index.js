import React from 'react'
import Percentage from '@hixme-ui/percentage'

import { Code, DocsTitle } from '../../components'

const CurrencyDocs = () => (
  <div>
    <DocsTitle title='Percentage' subtitle='A percentage component providing formatting for percent like things' />
    <Percentage>
      0.345
    </Percentage>
    <br />
    <Code>
      {`<Percentage>
  0.345
</Percentage>`}
    </Code>

    <br />
    <br />
    <Percentage hideDecimals>
      0.345
    </Percentage>
    <br />
    <Code>
      {`<Percentage hideDecimals>
  0.345
</Percentage>`}
    </Code>
  </div>
)

export default CurrencyDocs

