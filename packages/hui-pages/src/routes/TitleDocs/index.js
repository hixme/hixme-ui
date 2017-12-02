import React from 'react'

import Title from '@hixme-ui/title'

const TitleDocs = () => (
  <div>
    <Title>Title</Title>
    <br />
    <br />
    <Title>Title default</Title>
    <br />
    {`<Title>Title default</Title>`}
    <br />
    <br />
    <Title jumbo>Title jumbo</Title>
    <br />
    {`<Title jumbo>Title jumbo</Title>`}
    <br />
    <br />
    <Title small>Title small</Title>
    <br />
    {`<Title small>Title small</Title>`}
    <br />
    <br />
    <Title smaller>Title smaller</Title>
    <br />
    {`<Title smaller>Title smaller</Title>`}
    <br />
    <br />
    <Title smallest>Title smallest</Title>
    <br />
    {`<Title smallest>Title smallest</Title>`}
  </div>
)

export default TitleDocs
