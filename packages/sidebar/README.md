# Sidebar

```bash
npm i --save @hixme-ui/sidebar
```
[View it live](https://hixme.github.io/hixme-ui/sidebar)

## Usage

```javascript
import Sidebar from '@hixme-ui/sidebar'

<Sidebar
  open={open}
  header='Header'
  onClose={toggleSidebar}
>
  Content
</Sidebar>
```

## Default Props

| Name          | Type      | Default  |
| ------------- | --------- | -------- |
| children      | node      | N/A      |
| header        | string    | N/A      |
| onClose       | function  | N/A      |
| open          | boolean   | false    |
| sidebarWidth  | string    | '300px'  |
| style         | object    | N/A      |
| topOffset     | number    | 58       |

