# Toggle

## Installation

```bash
npm i --save @hixme-ui/toggle
```
[View it live](https://hixme.github.io/hixme-ui/toggle)

## Usage

```jsx
import Toggle from '@hixme-ui/toggle'

<Toggle
  checked={this.state.checked}
  truthyText='Ya'
  falsyText='Nah'
  onChange={e => this.handleToggle(e)}
/>
```

## Props

| Name            | Type        | Default        |
| --------------- | ----------- | -------------- |
| truthyText      | string      | 'Yes'          |
| falsyText       | string      | 'No'           |
| checked         | boolean     | undefined      |
| noLabels        | boolean     | false          |



