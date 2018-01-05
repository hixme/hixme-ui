# Contributing

Hey, thanks for caring!

## Project setup

To get started with development, clone the repo and bootstrap the
dependencies.

```bash
git clone git@github.com:hixme/hixme-ui.git
npm install
npm run bootstrap
```

## Gotchas

It may happen that your dependencies become out of date when changing branches
or pulling down changes. Do a refresh and get your environment back to health.

*Refresh takes care of lerna clean and lerna bootstrap*
```bash
npm run refresh
```
