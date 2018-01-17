# hixme-ui currency


```bash
npm i --save @hixme-ui/currency
```
[View it live](https://hixme.github.io/hixme-ui/currency)

## Currency Props

| Name            | Type        | Default        |
| --------------- | ----------- | -------------- |
| defaultSymbol   | string      | $              |
| hideCents       | bool        | false          |
| hideCommas      | bool        | false          |
| noSymbol        | bool        | false          |
| round           | bool        | false          |
| value           | number      | null           |


## Basic Usage

Currency can use a child value or a value prop for the number, and handles comma placement and rounding of decimals.

```javascript
import Input from '@hixme-ui/currency'

<Currency value='11.95' />
<Currency>11.95</Currency>
// both output $11.95

<Currency value='1234567.8991' />
// outputs $1,234,567.90
```

## hideCents
```javascript
<Currency hideCents value='123.8991' />
// outputs $123
```

## hideCommas
```javascript
<Currency hideCommas value='123456.00' />
// outputs $123456.00
```

## noSymbol
```javascript
<Currency noSymbol value='123456.00' />
// outputs 123,456.00
```

## round

The round prop will round the number to significant values. If the value is
under 100,000, it will round to the nearest dollar.  Values of 100,000 and
above will round to the nearest thousand

```javascript
<Currency round value='1236.99' />
// outputs 1,237

<Currency round value='123456.00' />
// outputs 123,000.00
```

