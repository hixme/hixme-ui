# hixme-ui title

```bash
npm i --save @hixme-ui/title
```
[View it live](https://hixme.github.io/hixme-ui/title)

Title extends the @hixme/text component properties. Defaults to
font size of 34px. Margin and padding default to 0px.


## Usage

```javascript
import Title from '@hixme-ui/title'


<Title>Big loud text!</Title>

<Title jumbo>Jumbo title for attention</Title>

// use <Text> props as usual
<Title primary>Primary color title</Title>

```

## Props

| Name            | Type        | Value    |
|-----------------|-------------|----------|
| jumbo           | bool        | 38px     |
| small           | bool        | 28px     |
| smaller         | bool        | 20px     |
| smallest        | bool        | 18px     |
| margin          | string      | 0px      |
| padding         | string      | 0px      |
