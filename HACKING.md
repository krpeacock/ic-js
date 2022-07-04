# Hacking

This document list a couple of useful information to develop locally libraries of this repo.

## Prerequisite

Make sure you have a recent version of [Node.js installed](https://nodejs.org/en/) (LTS recommended).

You will also need `npm` v7+ as this repo is configured with [workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

## Build and test

From root directory, to build or test all packages:

```bash
npm run build/test --workspaces
```

To build or test a particular package - e.g. `sns`:

```bash
npm run build/test --workspace=packages/sns
```

## nns-js: How-to test local changes with nns-dapp

The [nns](/packages/nns) is used in [NNS-dapp](https://github.com/dfinity/nns-dapp/). To test changes with `proto` files in the dapp, proceed as following:

**requirements**: protobuf

## using npm pack

1. Prepare the tar file (from nns)
   `npm run protoc && npm run build --workspace=packages/nns && npm pack --workspace=packages/nns`
2. Install the tar in the target project (nns-dapp)
   - `npm i {ic-js-directory}/dfinity-nns-{PACKED_VERSION}.tgz`

## Candid files

The `did` files, related `.js` and `.d.ts` are generated automatically.

1. [import-candid](./scripts/import-candid) generates the `.did` files
2. [compile-idl-js](./scripts/compile-idl-js) extract and write the related `.js` and `.d.ts`

The files of the [candid](./candid) folders are shared across packages. Their architectur is the following:

a. `something.did`: the candid definition
b. `something.d.ts`: the typescript definition for the types and service of the did files (1)
c. `something.idl.js`: the factory js file (1)
d. `something.idl.d.ts`: the typescript definition of the above factory file
e. `something.certified.idl.js`: the factory js file for the certified calls (1)
f. `something.certified.idl.d.ts`: the typescript definition of the above factory file

(1) auto-generated with [didc](https://github.com/dfinity/candid)