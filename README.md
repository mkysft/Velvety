# Velvety - Beta

---

Velvety makes fronted development effortless by providing simple, yet powerful components that are tested, accessible and oh-so sikly-smooth.

### Features

- Developer Focused
- Configurable
- Accessible
- Intuitive

## Coming Soon

- Animations
- Light/Dark Mode
- Official Website/Documentation

## Installing Velvety

To use Velvety UI components, all you need to do is install the
`velvety` package and its peer dependencies:

```sh
$ npm install velvety

# or

$ yarn add velvety
```

## Usage

To start using the components, please follow these steps:

1. Wrap your application with the `VelvetProvider` provided by
   **velvety**.

```jsx
import { VelvetProvider } from "@chakra-ui/react";

// Do this at the root of your application
function App({ children }) {
  return <VelvetProvider>{children}</VelvetProvider>;
}
```

2. Now you can start using components like below:

```jsx
import { Button } from "@velvety";

function Application() {
  return <Button>Feeling Velvety!</Button>;
}
```

## Support Velvety

- The best way to currently support Velvety is to share your feedback and input with the owner.
- Velvety is originally intended to be a learning experience and introduction to open-source for [@mikeysoftware](https://github.com/mikeysoftware). Thanks again for trying velvety!

## License

MIT © [Michael cowan](https://github.com/mikeysoftware)
