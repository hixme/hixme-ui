# Select

```bash
npm i --save @hixme-ui/select
```
[View it live](https://hixme.github.io/hixme-ui/select)

## Usage

### Using children options
```javascript
import Select from '@hixme-ui/select'

<Select>
  <option value='hello'>Hello</option>
  <option value='goodbye'>Goodbye</option>
</Select>

// Outputs
<select>
  <option value='hello'>Hello</option>
  <option value='goodbye'>Goodbye</option>
</select>
```

### Using a list to build options
```
<Select list={[{
  id: 0,
  name: 'Zero'
}]} />
// Outputs
<select>
  <option value='0'>Zero</option>
</select>
```

## Props

| Name            | Type        | Default   |
| --------------- | ----------- | --------- |
| list            | array       | undefined |
| placeholder     | string      | null      |
| loading         | bool        | false     |

