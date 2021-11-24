# [Matrix Digital Rain Effect for ReactJS](https://www.npmjs.com/package/react-mdr) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/react-mdr.svg?style=flat)](https://www.npmjs.com/package/react-mdr) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/lpm0073/react-mdr/pulls)

[![Hack.d Lawrence McDaniel](https://img.shields.io/badge/hack.d-Lawrence%20McDaniel-orange.svg)](https://lawrencemcdaniel.com)

**React Matrix Digital Rain Effect** gives you your favorite Matrix movie screen effect in the form of a React component. The source originates from an October 2021 blog article written by [Adam Nagy](https://www.youtube.com/c/JavascriptAcademyOfficial), ["Matrix raining code effect using JavaScript"](https://dev.to/javascriptacademy/matrix-raining-code-effect-using-javascript-4hep).

-   **Lightweight:** The active code in this repository is less than 100 lines. It uses a canvas for rendering, which should ensure that it is both performant and that it works in most browsers.
-   **Use Anywhere:** The `<MatrixRainingLetters />` component tag can be placed anywhere in your jsx return function. It accepts custom classes and responds normally to CSS styling.

### Screenshot
<img width="1221" alt="screenshot" src="https://user-images.githubusercontent.com/1178819/143112334-85cfd56c-cbb5-4302-ae90-1e4f7da82316.png">

### Screencast

https://user-images.githubusercontent.com/1178819/142886923-3b558b62-9695-42f0-8efc-fc457d361a83.mp4

## Installation

```bash
npm i react-mdr
```

## Code Sample

```jsx
import { MatrixRainingLetters } from "react-mdr";

function Foo() {
    return (
        <React.Fragment>
            <MatrixRainingLetters key="foo-bar" custom_class="m-0 p-0" />
        </React.Fragment>
    );
}
```

## Contributing

Development of React Matrix Digital Rain Effect happens in the open on [GitHub](https://github.com/lpm0073/react-mdr/), and we are grateful to the community for contributing bugfixes and improvements. You can improve it by sending pull requests to [this repository](https://github.com/lpm0073/react-mdr/). Review [this guide](./CONTRIBUTE.md) for the gist of our development process, how to propose bugfixes and improvements.

### License

React Matrix Digital Rain Effect is [MIT licensed](./LICENSE).
