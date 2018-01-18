import React from 'react'

import BulletList from '@hixme-ui/bullet-list'

import { Code, DocsTitle } from '../../components'

const BulletListDocs = () => {
  const myUnorderedList = [
    'One item',
    'Two item',
    'Red item',
    'Blue item',
  ]

  return (
    <div>
      <DocsTitle title='BulletList' subtitle='A styled unordered list' />
      <BulletList bulletArray={myUnorderedList} />
      <br />
      <Code>
        {'<BulletList bulletArray={myUnorderedList} />'}
      </Code>
    </div>
  )
}

export default BulletListDocs

