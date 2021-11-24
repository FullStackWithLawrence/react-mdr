# How to Contribute

Hopefully this document makes the process for contributing clear and answers some questions that you may have.

## Code of Conduct

We have adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as our Code of Conduct, and we expect project participants to adhere to it. Please read the full text so that you can understand what actions will and will not be tolerated.

## Open Development

All work on React Matrix Raining Letters ("MRL") happens directly on [GitHub](https://github.com/lpm0073/react-mdr/). Both core team members and external contributors send pull requests which go through the same review process.

## Semantic Versioning

React MRL follows [semantic versioning](https://semver.org/). We release patch versions for critical bugfixes, minor versions for new features or non-essential changes, and major versions for any breaking changes. When we make breaking changes, we also introduce deprecation warnings in a minor version so that our users learn about the upcoming changes and migrate their code in advance.

Every significant change is documented in the [changelog file](./CHANGELOG.md).

## Branch Organization

Submit all changes directly to the main branch. We don’t use separate branches for development or for upcoming releases. We do our best to keep main in good shape, with all tests passing.

Code that lands in main must be compatible with the latest stable release. It may contain additional features, but no breaking changes. We should be able to release a new minor version from the tip of main at any time.

## Bugs

**Where to Find Known Issues**

We are using [GitHub Issues](https://github.com/lpm0073/react-mdr/issues) for our public bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn’t already exist.

**Reporting New Issues**

The best way to get your bug fixed is to provide a reduced test case. This JSFiddle template is a great starting point.

## How to Get in Touch

Main contact: [Lawrence McDaniel](https://lawrencemcdaniel.com/contact)

## Proposing a Change

If you intend to change the public API, or make any non-trivial changes to the implementation, we recommend [filing an issue](https://github.com/lpm0073/react-mdr/issues/new). This lets us reach an agreement on your proposal before you put significant effort into it.

If you’re only fixing a bug, it’s fine to submit a pull request right away but we still recommend to file an issue detailing what you’re fixing. This is helpful in case we don’t accept that specific fix but want to keep track of the issue.

## Style Guide

We use an automatic code formatter called Prettier. Run yarn prettier after making any changes to the code.

Then, our linter will catch most issues that may exist in your code. You can check the status of your code styling by simply running yarn linc.

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at Airbnb’s Style Guide will guide you in the right direction.

## Request for Comments (RFC)

Many changes, including bug fixes and documentation improvements can be implemented and reviewed via the normal GitHub pull request workflow.

Some changes though are “substantial”, and we ask that these be put through a bit of a design process and produce a consensus among the contributor team.

The “RFC” (request for comments) process is intended to provide a consistent and controlled path for new features to enter the project. You can contribute by visiting the rfcs repository.

## License

By contributing to React MRL, you agree that your contributions will be licensed under its [MIT license](./LICENSE).

## Development setup

This is a helpful article on explains much of the tooling of this repo: https://dev.to/jimjunior/how-to-create-an-npm-library-from-react-components-2m2

Following are docs on how to locally symlink your repo to your local npm evironment, which enables you to test locally, before you publish: https://docs.npmjs.com/cli/v8/commands/npm-link

And, if you need, how to unlink: https://stackoverflow.com/questions/19094630/how-do-i-uninstall-a-package-installed-using-npm-link


```bash
git clone https://github.com/lpm0073/react-mdr.git
cd react-mdr
yarn build
```

If you want to rebuild fresh...

```bash
npm install rollup --save-dev
npm install @babel/cli @babel/core @babel/preset-env @babel/preset-react @rollup/plugin-babel --save-dev
npm install rollup-plugin-styles autoprefixer --save-dev
npm install @babel/runtime
npm install @babel/plugin-transform-runtime --save-dev
npm install rollup-plugin-sourcemaps --save-dev
```

## Create a new release

```bash
# 1.) increment package.json "version", on or around row 4.
vim ./package.json

# 2.) Add to ./CHANGELOG.md
vim ./CHANGELOG.md

# 3.) excecute the build script, which calls rollup/babel to rebuild the files in dist/
npm run build

# 4.) create a new semantic release in github.com
https://github.com/lpm0073/react-mdr/releases
```
