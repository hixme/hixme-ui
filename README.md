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
* [animate](https://github.com/hixme/hixme-ui/tree/master/packages/animate)
* [button](https://github.com/hixme/hixme-ui/tree/master/packages/button)
* [checkbox](https://github.com/hixme/hixme-ui/tree/master/packages/checkbox)
* [container](https://github.com/hixme/hixme-ui/tree/master/packages/container)
* [content-container](https://github.com/hixme/hixme-ui/tree/master/packages/content-container)
* [currency](https://github.com/hixme/hixme-ui/tree/master/packages/currency)
* [form-group](https://github.com/hixme/hixme-ui/tree/master/packages/form-group)
* [forms](https://github.com/hixme/hixme-ui/tree/master/packages/forms)
* [input](https://github.com/hixme/hixme-ui/tree/master/packages/input)
* [label](https://github.com/hixme/hixme-ui/tree/master/packages/label)
* [percentage](https://github.com/hixme/hixme-ui/tree/master/packages/percentage)
* [phone](https://github.com/hixme/hixme-ui/tree/master/packages/phone)
* [price](https://github.com/hixme/hixme-ui/tree/master/packages/price)
* [radio-button](https://github.com/hixme/hixme-ui/tree/master/packages/radio-button)
* [select](https://github.com/hixme/hixme-ui/tree/master/packages/select)
* [separator](https://github.com/hixme/hixme-ui/tree/master/packages/separator)
* [social-security](https://github.com/hixme/hixme-ui/tree/master/packages/social-security)
* [table](https://github.com/hixme/hixme-ui/tree/master/packages/table)
* [text](https://github.com/hixme/hixme-ui/tree/master/packages/text)
* [theme](https://github.com/hixme/hixme-ui/tree/master/packages/theme)
* [theme-props](https://github.com/hixme/hixme-ui/tree/master/packages/theme-props)
* [title](https://github.com/hixme/hixme-ui/tree/master/packages/title)


## Built With

* [React](https://reactjs.org/) - Javascript component framework
* [Styled Components](https://www.styled-components.com) - CSS management
* [Jest](https://facebook.github.io/jest/) - Testing framework


## Contributing

Please read
[CONTRIBUTING.md](https://github.com/hixme/hixme-ui/blob/master/CONTRIBUTING.md)
for project development notes.


