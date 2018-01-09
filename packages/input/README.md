# hixme-ui input

Input is built with two layers. A style-component CSS base which is then
wrapped with in React JSX to allow props to drive different types of input
needs for basic input, textarea, and masked phone, date, ssn, and masked
implementations.


```bash
npm i --save @hixme-ui/input
```
[View it live](https://hixme.github.io/hixme-ui/input)

## Props

| Name            | Type        |
| --------------- | ----------- |
| textarea        | bool        |
| phone           | bool        |
| date            | bool        |
| ssn             | bool        |
| mask            | bool        |


## Basic Usage

```javascript
import Input from '@hixme-ui/input'

<Input type='email' required />


// input with phone number formatting
<Input phone />

```

## InputBase

InputBase is a style-component build of the input tag and contains all the
necessary CSS for the theme

```javascript
import { InputBase } from '@hixme-ui/input'

<InputBase type='email' required />

```
