# Benefit Price

## Installation

```bash
npm i --save @hixme-ui/benefit-price
```
[View it live](https://hixme.github.io/hixme-ui/benefit-price)

## Usage

```js
import BenefitPrice from '@hixme-ui/benefit-price'

<BenefitPrice payCycle={12} value={100} />
<BenefitPrice payCycle={52} value={46.93} />
<BenefitPrice value={-46.93} noLabel />
```
## Props

| Name            | Type        | Default        |
| --------------- | ----------- | -------------- |
| value           | string      | N/A            |
| noLabel         | bool        | false          | 
| payCycle        | number      | 12             | 

## Valid payCycle values

| Pay Cycle | Label Value  |
| --------- | ------------ |
| 12        | monthly      |
| 24        | semi-monthly |
| 26        | bi-weekly    |
| 52        | weekly       |

