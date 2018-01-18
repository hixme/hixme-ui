import React from 'react'
import Currency from '@hixme-ui/currency'

import { Code, DocsTitle } from '../../components'

const CurrencyDocs = () => (
  <div>
    <DocsTitle title='Currency' subtitle='A currency component providing formatting for money stuff' />
    <Currency>
      10.345
    </Currency>
    <br />
    <Code>
      {`<Currency>
  10.345
</Currency>`}
    </Code>

    <br />
    <br />
    <Currency hideCents defaultSymbol='$$'>
      10100.345
    </Currency>
    <br />
    <Code>
      {`<Currency hideCents defaultSymbol='$$'>
  10100.345
</Currency>`}
    </Code>

    <br />
    <br />
    <Currency hideCommas noSymbol>
      1010001.345
    </Currency>
    <br />
    <Code>
      {`<Currency hideCommas noSymbol>
  1010001.345
</Currency>`}
    </Code>
  </div>
)

export default CurrencyDocs

