# Price

## Installation

```bash
npm i --save @hixme-ui/price
```

## Usage

```js
import Price from '@hixme-ui/price'

<Price value={46.93} />
<Price value={-46.93} />
<Price primary value={46.93} label='Hixme UI' />
```

## Props

Because the Price component extends [Text](https://github.com/hixme/hixme-ui/tree/master/packages/text), any Text style boolean property is available to the Price component.

| Name            | Type        | Default        |
| --------------- | ----------- | -------------- |
| value           | string      | N/A            |
| label           | string      | N/A            | 



