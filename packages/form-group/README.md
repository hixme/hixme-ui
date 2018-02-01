# hixme-ui form-group

```bash
npm i --save @hixme-ui/form-group
```
[View it live](https://hixme.github.io/hixme-ui/form-group)

## Usage

```javascript
import FormGroup from '@hixme-ui/form-group'

<FormGroup>
  <Label>Name</Label>
  <Input name='name' />
  <Text error>Name is required</Text>
</FormGroup>
```

The FormGroup provides some shortcuts for label and error for form building. You may achieve the same result as our first example by providing the label and error strings to the appropriate props.  The error message should only be provided when the error message should be displayed.

```javascript
import FormGroup from '@hixme-ui/form-group'

<FormGroup label='Name' error='Name is required'>
  <Input name='name' />
</FormGroup>
```

The component will invoke the Label and Text components around the input field for you. Label appears as the first child. Any children provided will be displayed below [Label](https://github.com/hixme/hixme-ui/tree/master/packages/label). The error message will display as a [Text](https://github.com/hixme/hixme-ui/tree/master/packages/text) component as the last child.

## Props

| Name            | Type        | Default        |
| --------------- | ----------- | -------------- |
| label           | String      | null           |
| error           | String      | null           |
