# Card Drawer

```bash
npm i --save @hixme-ui/card-drawer
```
[View it live](https://hixme.github.io/hixme-ui/card-drawer)

CardDrawer is an accordion component implemented with [Card](https://hixme.github.io/hixme-ui/card) and [react-collapsible](https://github.com/glennflanagan/react-collapsible).

## Usage

```javascript
import CardDrawer from '@hixme-ui/card-drawer'

// Using react-collapsible
<CardDrawer collapsible cardHeader='Drawer title'>
  <p>Drawer content</p>
</CardDrawer>

// Always open, static CardDrawer
<CardDrawer open cardHeader='Drawer title'>
  <p>Drawer content</p>
</CardDrawer>

// You can also supply the content to the cardContent prop
<CardDrawer
  collapsible
  cardHeader='Drawer title'
  cardContent={
    <p>Drawer content</p>
  }
/>
```

## Props

| Name            | Type        | Default        |
| --------------- | ----------- | -------------- |
| cardContent     | node        | null           |
| cardHeader      | string      | null           |
| children        | node        | N/A            |
| collapsible     | boolean     | false          |
| disabled        | boolean     | false          | 
| hideArrow       | boolean     | false          |

