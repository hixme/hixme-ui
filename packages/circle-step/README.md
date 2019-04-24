# CircleStep


```bash
npm i --save @hixme-ui/circle-step
```
[View it live](https://hixme.github.io/hixme-ui/circle-step)

## CircleStep Props

| Name             | Type        | Default        |
| ---------------- | ----------- | -------------- |
| borderWidth      | string      | '3px'          |
| children         | node        | null           |
| completed        | bool        | false          |
| display          | string      | 'inline-block' |
| openCircle       | bool        | false          |
| size             | number      | 48             |
| uncompletedColor | string      | '#677786'      |


## Basic Usage

CircleStep can use a child value for the number inside the circle.

```javascript
import CircleStep from '@hixme-ui/circle-step'

<CircleStep completed={completed}>{index}</CircleStep>
```
