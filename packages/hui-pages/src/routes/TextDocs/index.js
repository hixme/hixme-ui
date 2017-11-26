import React from 'react'

import Text from '@hixme-ui/text'

const TextDocs = () => (
  <div>
    <h1>Text</h1>
    <div>
      A fun text wrapper for applying various colors, sizes, and styles with ease
    </div>
    <br />
    <br />
    <Text primary>Primary text</Text>
    <br />
    {`<Text primary>Primary text</Text>`}
    <br />
    <br />
    <Text warning>Warning text</Text>
    <br />
    {`<Text warning>Warning text</Text>`}
    <br />
    <br />
    <Text error>Error text</Text>
    <br />
    {`<Text error>Error text</Text>`}
    <br />
    <br />
    <Text error>Label</Text>
    <br />
    {`<Text label>Name</Text>`}
    <br />
    <Text a primary href="//hui.hixme.com/text">Text Link</Text>
    <br />
    {`<Text a primary href="//hui.hixme.com/text">Text Link</Text>`}
  </div>
)

export default TextDocs
