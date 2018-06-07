# Social Security

```bash
npm i --save @hixme-ui/social-security
```
[View it live](https://hixme.github.io/hixme-ui/social-security)

Phone extends the [@hixme/text](https://github.com/hixme/hixme-ui/tree/master/packages/text)
to provide social security number formatting


## Usage

```javascript
import SocialSecurity from '@hixme-ui/social-security'

<SocialSecurity number='123456789' />
// ouputs social security format
// <span>***-**-6789</span>

```

## SocialSecurity.format(number, { showFull = false })

SocialSecurity has a format function it uses to display, and is
accessible if needed outside of the JSX

```javascript
import SocialSecurity from '@hixme-ui/social-security'

Phone.format('123456789')
// outputs string ***-**-6789


Phone.format('123456789', { showFull: true })
// outputs string 123-45-6789
```
