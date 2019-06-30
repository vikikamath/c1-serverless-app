# Maple

Serverless Full Stack JS Starter with essential defaults.

## Prequisites:

`npm 5+`, `node 8+` and `nvm` for managing different versions of node.

## Installation

`packages` directory allows you to define your stack. It could be a `RESTful API` with a `vue` front end or may be 2 `UI` apps one being `angular` and other a `vue` app all supported by a `GraphQL Endpoint`.

> TODO:
> There appears to be an issue when creating app with `npx`: `npx @vue/cli create my-vue-app` which is such a handy tool.


## Lerna

Manage and Publish your entire stack together with `lerna`. Packages can be anything your modules, ui, backend.

```bash
npx lerna init
```

Optional `--independent` to independently version your packages
