# Label


```bash
npm i --save @hixme-ui/label
```

[View it live](https://hixme.github.io/hixme-ui/label)

## Basic Usage

Use it anywhere you would use a form label. Label works with all the same props as [Text](https://github.com/hixme/hixme-ui/tree/master/packages/text#props). Customize your form label as needed.

```javascript
import Label from '@hixme-ui/label'
import Input from '@hixme-ui/input'
import FormGroup from '@hixme-ui/form-group'

<form>
  <FormGroup>
    <Label>First name</Label>
    <Input name='firstname' />
  </FormGroup>
</form>
```

Use Label with [FormGroup](https://github.com/hixme/hixme-ui/tree/master/packages/form-group) to get the proper spacing with [Input](https://github.com/hixme/hixme-ui/tree/master/packages/input), [Select](https://github.com/hixme/hixme-ui/tree/master/packages/select), and other form components.
