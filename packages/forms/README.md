# hixme-ui forms

```bash
npm i --save @hixme-ui/forms
```
Forms provides an easy import for all HUI form category of components.

[View it live](https://hixme.github.io/hixme-ui/forms)

## Usage

### Using children options
```javascript
import { Button, Label, FormGroup, Input }  from '@hixme-ui/forms'

<form>
  <FormGroup>
    <Label>First name</Label>
    <Input name='firstname' required />
  </FormGroup>

  <Button>Submit</Button>
</form>
```
