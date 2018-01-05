hixme-ui
===============
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Build Status](https://travis-ci.org/hixme/hixme-ui.svg?branch=master)](https://travis-ci.org/hixme/hixme-ui)

Another React component library, built to facilitate the
[Hixme](https://hixme.com/) ecosystem. We hope you enjoy your time here.


# Getting started

Install the theme and your needed components.

```bash
npm install --save @hixme-ui/theme @hixme-ui/container @hixme-ui/title
```

Add the theme via the theme provider and begin using HUI components

*file.js*
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
* [form-group](https://github.com/hixme/hixme-ui/tree/master/packages/form-group)
* [input](https://github.com/hixme/hixme-ui/tree/master/packages/input)
* [phone](https://github.com/hixme/hixme-ui/tree/master/packages/phone)
* [price](https://github.com/hixme/hixme-ui/tree/master/packages/price)
* [select](https://github.com/hixme/hixme-ui/tree/master/packages/select)
* [separator](https://github.com/hixme/hixme-ui/tree/master/packages/separator)
* [social-security](https://github.com/hixme/hixme-ui/tree/master/packages/social-security)
* [table](https://github.com/hixme/hixme-ui/tree/master/packages/table)
* [text](https://github.com/hixme/hixme-ui/tree/master/packages/text)
* [theme](https://github.com/hixme/hixme-ui/tree/master/packages/theme)
* [theme-props](https://github.com/hixme/hixme-ui/tree/master/packages/theme-props)
* [title](https://github.com/hixme/hixme-ui/tree/master/packages/title)
