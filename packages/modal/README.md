# hixme-ui modal

```bash
npm i --save @hixme-ui/modal
```

[View it live](https://hixme.github.io/hixme-ui/modal)

## Usage 

```jsx
import { MrModal } from '@hixme/modal'

<MrModal 
  dialog 
  medium
  title='All your base are belong to us' 
  confirmLabel='Get down!' 
  cancelLabel='Eh, maybe not...'
>
  {/* Modal content here */}
</MrModal>
```

## Props

| Property         | Type       | Value            | Required | Description                                       |
| ---------------- | ---------- | ---------------- | -------- | ------------------------------------------------- |
| backgroundColor  | `string`   | N/A              | Yes      | Easy way to change the modal color                |
| hideCloseButton  | `boolean`  | false            | Yes      | Hide the default close button                     |
| style            | `object`   | N/A              | No       | Override modal styles                             |
| title            | `string`   | N/A              | No       | Modal title header                                |
| zIndex           | `number`   | 1001             | No       | Modal z-index value                               |
| small            | `boolean`  | false            | No       | Modal with 568px max-width                        |
| medium           | `boolean`  | false            | No       | Modal with 800px max-width                        |
| large            | `boolean`  | false            | No       | Modal with 1024px max-width                       |
| cancelHandler    | `function` | `defaultClose()` | No       | When `dialog = true`, function called on cancel   |
| cancelLabel      | `string`   | 'Cancel'         | No       | When `dialog = true`, label on the cancel button  |
| confirmHandler   | `function` | N/A              | No       | When `dialog = true`, function called on confirm  |
| confirmLabel     | `string`   | 'Ok'             | No       | When `dialog = true`, label on the confirm button |
| dialog           | `boolean`  | false            | No       | Show dialog modal                                 |
| errorDialog      | `boolean`  | false            | No       | Show error dialog modal                           |

## Styling

The default style is a full screen modal. You can specify `small`, `medium`, or `large` to render a more traditional modal style. Any of the preset modal styles can be overwritten by providing the `<MrModal />` component with a style object.

```js 
style: {
  content: {
    ...contentStyles
  },
  overlay: {
    ...overlayStyles
  },
}
```
