hixme-ui - HUI
===============
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Build Status](https://travis-ci.org/hixme/hixme-ui.svg?branch=master)](https://travis-ci.org/hixme/hixme-ui)

Another React component library, built to facilitate the
[Hixme](https://hixme.com/) ecosystem. We hope you enjoy your time here.

[Website](https://hixme.github.io/hixme-ui)

# Getting started

Install the theme and your needed components.

```bash
npm install --save @hixme-ui/theme @hixme-ui/container @hixme-ui/title
```

Add the theme via the theme provider and begin using HUI components

```javascript
import { ThemeProvider } from 'hixme-ui/theme'
import Container from 'hixme-ui/container'
import Title from 'hixme-ui/title'

const AppContainer = () => (
  <ThemeProvider>
    <Container padding='10px'>
      <Title jumbo primary>Welcome to your App</Title>

      <Container background='#efefef'>
        This is going to be a fun ride
      </Container>
    </Container>
  </ThemeProvider>
)
```

# HUI Components
* [Animate](https://github.com/hixme/hixme-ui/tree/master/packages/animate)
* [BenefitPrice](https://github.com/hixme/hixme-ui/tree/master/packages/benefit-price)
* [BulletList](https://github.com/hixme/hixme-ui/tree/master/packages/bullet-list)
* [Button](https://github.com/hixme/hixme-ui/tree/master/packages/button)
* [Card](https://github.com/hixme/hixme-ui/tree/master/packages/card)
* [Checkbox](https://github.com/hixme/hixme-ui/tree/master/packages/checkbox)
* [Container](https://github.com/hixme/hixme-ui/tree/master/packages/container)
* [ContentContainer](https://github.com/hixme/hixme-ui/tree/master/packages/content-container)
* [Currency](https://github.com/hixme/hixme-ui/tree/master/packages/currency)
* [Dates](https://github.com/hixme/hixme-ui/tree/master/packages/dates)
* [Email](https://github.com/hixme/hixme-ui/tree/master/packages/email)
* [Form Components](https://github.com/hixme/hixme-ui/tree/master/packages/forms)
* [Form Group](https://github.com/hixme/hixme-ui/tree/master/packages/form-group)
* [Icon](https://github.com/hixme/hixme-ui/tree/master/packages/icon)
* [Input](https://github.com/hixme/hixme-ui/tree/master/packages/input)
* [Label](https://github.com/hixme/hixme-ui/tree/master/packages/label)
* [Percentage](https://github.com/hixme/hixme-ui/tree/master/packages/percentage)
* [Phone](https://github.com/hixme/hixme-ui/tree/master/packages/phone)
* [Price](https://github.com/hixme/hixme-ui/tree/master/packages/price)
* [Print](https://github.com/hixme/hixme-ui/tree/master/packages/print)
* [Radio Button](https://github.com/hixme/hixme-ui/tree/master/packages/radio-button)
* [Select](https://github.com/hixme/hixme-ui/tree/master/packages/select)
* [Separator](https://github.com/hixme/hixme-ui/tree/master/packages/separator)
* [Sidebar](https://github.com/hixme/hixme-ui/tree/master/packages/sidebar)
* [Social Security](https://github.com/hixme/hixme-ui/tree/master/packages/social-security)
* [Table](https://github.com/hixme/hixme-ui/tree/master/packages/table)
* [Text](https://github.com/hixme/hixme-ui/tree/master/packages/text)
* [Title](https://github.com/hixme/hixme-ui/tree/master/packages/title)
* [UploadBox](https://github.com/hixme/hixme-ui/tree/master/packages/upload-box)
* [theme-props](https://github.com/hixme/hixme-ui/tree/master/packages/theme-props)
* [theme](https://github.com/hixme/hixme-ui/tree/master/packages/theme)

## Built With

* [React](https://reactjs.org/) - Javascript component framework
* [Styled Components](https://www.styled-components.com) - CSS management
* [Jest](https://facebook.github.io/jest/) - Testing framework


## Contributing

Please read
[CONTRIBUTING.md](https://github.com/hixme/hixme-ui/blob/master/CONTRIBUTING.md)
for project development notes.


