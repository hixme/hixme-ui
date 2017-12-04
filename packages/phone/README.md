# hixme-ui phone

```bash
npm i --save @hixme-ui/phone
```

Phone extends the [@hixme/text](https://github.com/hixme/hixme-ui/tree/master/packages/text)
to provide phone formatting and linking


## Usage

```javascript
import Phone from '@hixme-ui/phone'

<Phone number='8881234567' />
// ouputs phone link as
// <a href="tel:8881234567">(888) 123 - 4567</a>

```

## Phone.format

Phone has a format function it uses to display the phone format, and is
accessible if needed outside of the JSX

```javascript
import Phone from '@hixme-ui/phone'

Phone.format('8881234567')
// outputs string (888) 123 - 4567
```
