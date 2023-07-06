### summary:

this repo is a skeleton to use nodejs projects with typescript and jest.

You can use Typescript with just using in two ways:

    - using Babel
    - using ts-jest (our option)

You can have the Jest type definitions in two ways:

    - installing @jest/globals (needs import the globals)
    - installing @types/jest (no need to import, our option)

### dependencies:

we are going to need the following dev dependencies:

    - jest
    - ts-jest
    - ts-node-dev
    - typescript
    - @types/jest
    - @types/node

### generating jest config file:

we are going to need the jest configuration file with this command:

```
pnpm jest --init
```

### using ts-jest:

We need to include some options in the jest configuration file `jest.config.ts`:

```
  preset: 'ts-jest',
```

> pnpm ts-jest config:init
> This command generates the jest.config.js but since we are using typescript we do not need that file and we are just using the couple of options that generate, one is `testEnvironment: "node"` but `node` is the default and we can omit that and just putting `preset:"ts-jest` into our `jest.config.ts` generated previously

https://kulshekhar.github.io/ts-jest/docs/getting-started/installation/#jest-config-file

### run scripts:

finally you can check the run script(check `package.json`) and use it wisely
