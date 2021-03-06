# Step

```bash
npm i --save @hixme-ui/step
```
[View it live](https://hixme.github.io/hixme-ui/step)

Step is a simple component used to illustrate a flow or process with steps.

## Usage

```javascript
import Step from '@hixme-ui/step'

<Step>1</Step>
<Step completed>1</Step> // shows a check mark rather than the children supplied
```

## Props

| Name             | Type        | Default        |
| ---------------- | ----------- | -------------- |
| borderWidth      | string      | '3px'          |
| children         | node        | null           |
| completed        | bool        | false          |
| display          | string      | 'inline-block' |
| openCircle       | bool        | false          |
| size             | number      | 48             |
| uncompletedColor | string      | '#677786'      |

