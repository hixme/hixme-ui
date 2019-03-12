# Table

## Installation

```bash
npm i --save @hixme-ui/table
```
[View it live](https://hixme.github.io/hixme-ui/table)

## Usage

```jsx
import Table from '@hixme-ui/table'

<Table>
  <thead>
    <tr>
      <th>Header</th>
      <th>Header</th>
      <th>Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table data</td>
      <td>Table data</td>
      <td>Table data</td>
    </tr>
    <tr>
      <td>Table data</td>
      <td>Table data</td>
      <td>Table data</td>
    </tr>
  </tbody>
</Table>
```

## Props

| Name            | Type        | Default        |
| --------------- | ----------- | -------------- |
| alignBody       | string      | ''             |
| alignHeader     | string      | ''             |
| compact         | boolean     | false          |
| overflow        | boolean     | true           |
| striped         | boolean     | false          |
| vertStriped     | boolean     | false          |
