# react-browser-frame

Zhoozh up your content with this responsive browser frame mockup.

[![NPM](https://img.shields.io/npm/v/react-browser-frame.svg)](https://www.npmjs.com/package/react-browser-frame) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-browser-frame
```

## Usage

Stick whatever you like inside a `<BrowserFrame>` and it will render as children props.

### Image example

```jsx
import React from "react";
import BrowserFrame from "react-browser-frame";

import myImg from "./img/doge.jpg";

export default () => (
  <BrowserFrame url="https://doge.biz">
    <img src={myImg} alt="A handsome doggo" />
  </BrowserFrame>
);
```

### Text content example

```jsx
export default () => (
  <BrowserFrame url="https://example.biz" padding="30px 20px">
    <p>It was the best of times, it was the blurst of times...</p>
  </BrowserFrame>
);
```

### iFrame example

```jsx
const iframeSrc =
  "https://codepen.io/liamj/embed/preview/VdqgZK?height=500&amp;theme-id=39032&amp;default-tab=result";

export default () => (
  <BrowserFrame>
    <iframe
      width="100%"
      height="500px"
      scrolling="no"
      title="Breezy Windows logo"
      src={iframeSrc}
      frameBorder="no"
    />
  </BrowserFrame>
);
```

## Props

`<BrowserFrame>` accepts the following props:

- **url** (optional, `string`): Shows the address bar with your specified string.
- **padding** (optional, `string`): Puts padding around your supplied content, as a CSS string, e.g. `"20px"` or `"15px 30px"` etc.
- **???:** What else would you like to see? Dark mode? Other styles? Raise a PR or flick me a note :)

Styles blatantly copied from the browser mockup in Docusaurus v2!

## License

MIT © [liamjohnston](https://github.com/liamjohnston)