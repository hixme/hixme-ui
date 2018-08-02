# Contributing

Hey, thanks for caring!

Open a PR at https://github.com/hixme/hixme-ui


## Project setup

To get started with development, clone the repo and bootstrap the
dependencies.

```bash
git clone https://github.com/hixme/hixme-ui.git
cd hixme-ui
lerna boostrap
```

Keep in mind [lerna](https://github.com/lerna/lerna) must be installed globally: 

```bash
npm install -g lerna
```

To start the documentation React app, run `npm start` inside the `/hui-pages` directory.

## Gotchas

It may happen that your dependencies become out of date when changing branches
or pulling down changes. Do a refresh and get your environment back to health.

*Refresh takes care of lerna clean and lerna bootstrap*
```bash
npm run refresh
```

Occasionally -- on a fresh install -- `lerna bootstrap` will fail because of a missing `react` dependency. This can be rectified by installing, but not saving the react dependency.

```bash
npm install react --no-save
```


#
[Hixme UI](https://github.com/hixme/hixme-ui)
