# Price

## Installation

```bash
npm i --save @hixme-ui/price
```
[View it live](https://hixme.github.io/hixme-ui/price)

## Usage

```js
import Price from '@hixme-ui/price'

<Price value={46.93} />
<Price value={-46.93} />
<Price value={1803.93} includeCommas />
<Price primary value={46.93} label='Hixme UI' />
```

## Props

| Name            | Type        | Default        |
| --------------- | ----------- | -------------- |
| value           | string      | N/A            |
| label           | string      | N/A            | 
| includeCommas   | boolean     | false          | 

Additionally, the Price component will take any color boolean from the theme.
