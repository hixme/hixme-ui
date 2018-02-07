# hixme-ui text

```bash
npm i --save @hixme-ui/text
```
[View it live](https://hixme.github.io/hixme-ui/text)

## Usage

```javascript
import Text, {
 TextLink,
 HyperLink,
 Paragraph,
 Label,
} from '@hixme-ui/text'

// text success
<Text success>I said good day sir!</Text>

// paragraph warning
<Text p warning>Are you sure?</Text>
<Paragraph warning>Are you sure?</Paragraph>
```

## Props

| Category        | Name            | Type        |
|-----------------|-----------------|-------------|
| Tags            |                 |             |
|                 | a               | bool        |
|                 | p               | bool        |
|                 | label           | bool        |
| Colors          |                 |             |
|                 | color           | string      |
|                 | default         | bool        |
|                 | primary         | bool        |
|                 | success         | bool        |
|                 | warning         | bool        |
|                 | error           | bool        |
|                 | muted           | bool        |
|                 | white           | bool        |
|                 | black           | bool        |
|                 | red             | bool        |
|                 | blue            | bool        |
|                 | purple          | bool        |
|                 | yellow          | bool        |
|                 | green           | bool        |
|                 | light           | bool        |
|                 | lighter         | bool        |
|                 | lightest        | bool        |
| Font Sizes      |                 |             |
|                 | fontSize        | string      |
|                 | default         | bool        |
|                 | small           | bool        |
|                 | smaller         | bool        |
|                 | smallest        | bool        |
|                 | medium          | bool        |
|                 | large           | bool        |
|                 | jumbo           | bool        |
| Text Align      |                 |             |
|                 | left            | bool        |
|                 | center          | bool        |
|                 | right           | bool        |
| Case            |                 |             |
|                 | uppercase       | bool        |
|                 | lowercase       | bool        |
|                 | capitalize      | bool        |
| Other           |                 |             |
|                 | cursor          | string      |
|                 | display         | string      |
|                 | fontWeight      | string      |
|                 | lineHeight      | string      |
|                 | userSelect      | string      |
|                 | textIndent      | string      |
|                 | textOverflow    | string      |
|                 | whiteSpace      | string      |
|                 | wordBreak       | string      |


# TextLink and HyperLink

These components default to using the <a /> tag as it's rendered form.
HyperLink goes one step further in defaulting to a cursor pointer and a default primary color


```javascript
import { TextLink, HyperLink } from '@hixme-ui/text'

<TextLink href='#point1' />

<HyperLink href='https://goingsomewhere.com' />

```

