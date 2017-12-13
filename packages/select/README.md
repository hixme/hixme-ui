# hixme-ui select

```bash
npm i --save @hixme-ui/select
```

## Usage

```javascript
import Select from '@hixme-ui/select'

<Select> {console.log()}}>
  <option value='hello'>Hello</option>
  <option value='goodbye'>Goodbye</option>
</Select>


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

| Name            | Type        |
| --------------- | ----------- |
| list            | array       |

