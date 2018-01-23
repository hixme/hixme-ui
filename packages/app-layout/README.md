# hixme-ui app-layout

```bash
npm i --save @hixme-ui/app-layout
```
[View it live](https://hixme.github.io/hixme-ui/app-layout)

AppLayout is an all-in-one menu and sidebar.

## Usage

```javascript
import AppLayout from '@hixme-ui/app-layout'

const SidebarContent = () => (
  <div>
    {/* sidebar stuff */}
  </div>
)

const HeaderContent = () => (
  <div>
    {/* header stuff */}
  </div>
)

<AppLayout 
  HeaderComponent={HeaderContent} 
  SidebarComponent={SidebarContent}
>
  {children}
</AppLayout>
```

## Props

| Name             | Type        | Default        |
| ---------------- | ----------- | -------------- |
| sidebarWidth     | string      | '225px'        |
| children         | node        | N/A            |
| HeaderComponent  | function    | () => null     |
| SidebarComponent | function    | () => null     |
| open             | boolean     | false          |
| fixed            | boolean     | false          |


