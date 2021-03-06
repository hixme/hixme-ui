# Tabs

## Installation

```bash
npm i --save @hixme-ui/tabs
```
[View it live](https://hixme.github.io/hixme-ui/tabs)

## Usage

```js
import Tabs from '@hixme-ui/tabs'

const tabsArray = [{
  name: 'Some tab name 1',
  content: <SomeComponent {...stuff} />
},{
  name: 'Some tab name 2',
  content: <SomeOtherComponent {...stuff} />
}]

<Tabs blue id='uniqueString' list={tabsArray} initWithIndex={1} />
```

## Props
```js
tabStyles={{ blue: true, width: '200px', marginBottom: '40px' }}
```

| Name            | Type        | Default        |
| --------------- | ----------- | -------------- |
| id              | string      | N/A            |
| list            | array       | N/A            |
| initWithIndex   | number      | 0              |
| tabStyles       | object      | N/A            |
