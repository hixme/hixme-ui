# Percentage


```bash
npm i --save @hixme-ui/percentage
```
[View it live](https://hixme.github.io/hixme-ui/percentage)

## Props

| Name            | Type        | Default        |
| --------------- | ----------- | -------------- |
| hideDecimals    | bool        | false          |
| value           | number      | null           |


## Basic Usage

Percentage can use a child value or a value prop for the number, and handles
decimal placement and rounding.

```javascript
import Input from '@hixme-ui/percentage'

<Percentage value='0.314' />
<Percentage>0.314</Percentage>
// both output 31.40%

```

## hideDecimals
```javascript
<Percentage hideDecimals value='0.891342' />
// outputs 89%
```

## Format

Percentage has a static format function if needed outside of a JSX context.

```javascript
Percentage.format({
  value: 0.1234
})
// outputs 12.34%

Percentage.format({
  value: 0.1234,
  hideDecimals: true,
})
// outputs 12%

```
