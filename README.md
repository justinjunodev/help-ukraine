# Help Ukraine 🇺🇦

Stand with Ukraine and share the latest news, resources, and charitable information with this customizable badge. Interactive demo available on [CodeSandbox](https://codesandbox.io/s/er20l6).

![image](https://img.shields.io/badge/React-333333?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

## Getting Started:

1. **Install the `help-ukraine` package from your terminal via npm or Yarn.**

```
npm install help-ukraine
```

```
yarn add help-ukraine
```

2. **Import the package and place the component in the desired file.** _For example:_

```jsx
import React from 'react';
import { HelpUkraine } from 'help-ukraine';

function App() {
  return (
    <div>
      <HelpUkraine />
    </div>
  );
}
```

3. **Customize the link, text, and/ or styles to your liking using props.** _See table below for more info._

```jsx
<HelpUkraine
  link="https://ukrainewar.carrd.co/"
  text="Stand With Ukraine!"
  size={16}
  color="#FFF"
  bg="#000"
  pos="top right"
  pX={32}
  pY={8}
  mX={8}
  mY={8}
  radius={12}
/>
```

### Available Options:

| Prop     | Type           | Default                                                        | Description                                                                                                             |
| :------- | :------------- | :------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| `link`   | string         | [UN Crisis Relief](https://crisisrelief.un.org/ukraine-crisis) | Where the component links to.                                                                                           |
| `text`   | string         | 'Help Ukraine'                                                 | The text diplayed in the component.                                                                                     |
| `size`   | number         | 14                                                             | The size of the text displayed in the component _(in pixels)_.                                                          |
| `color`  | string         | 'NavyBlue'                                                     | The color of the text displayed in the component.                                                                       |
| `bg`     | string         | 'Gold'                                                         | The background color of the component.                                                                                  |
| `pos`    | string literal | 'bottom right'                                                 | The position of the component. Must be one of the following: 'bottom right', 'bottom left', 'top right', or 'top left'. |
| `pX`     | number         | 16                                                             | The horizonal padding of the component _(in pixels)_.                                                                   |
| `pY`     | number         | 4                                                              | The vertical padding of the component _(in pixels)_.                                                                    |
| `mX`     | number         | 16                                                             | The horizonal margin/ space outside the component _(in pixels)_.                                                        |
| `mY`     | number         | 16                                                             | The vertical margin/ space outsde the component _(in pixels)_.                                                          |
| `radius` | number         | 4                                                              | The border radius/ roundness of the component _(in pixels)_.                                                            |

---

### Contributions:

I appreciate your interest in this project and welcome you to contribute to it. For more details, please see the `CONTRIBUTING.md` file.

---

### License:

Licensed under MIT. For more information, please see the `LICENSE.md` file.
