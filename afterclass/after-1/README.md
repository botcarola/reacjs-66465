Fontawesome en React

## 1. Add SVG Core

First you’ll need to use npm or yarn to **install the core package** which includes all the utilities to make the icons work:

Terminal window

```
npm i --save @fortawesome/fontawesome-svg-core
```
## 2. Add Icon Packages

Next, you’ll **install the icons** you want to use — you can choose a Kit Package or SVG Icon Packages, and select any of [our styles](https://docs.fontawesome.com/web/dig-deeper/styles/).

#### Free SVG icon package

```
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```

## 3. Add the React Component

And lastly, **install the Font Awesome React component**

## YO INSTALÉ EL SEGUNDO COMANDO

1) npm i --save @fortawesome/react-fontawesome@latest

2) npm install @fortawesome/react-fontawesome


## Add icons with React

There are a few ways of adding icons to a React project. Choose the option that works for your project, and then add icons in your UI using the `FontAwesomeIcon` element.

## Importing from SVG Icon Packages

If you can’t or don’t want to use a Kit, you can explicitly add individual icons to each component. Here’s a simple example:

### Add Individual Icons Explicitly

```
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />

ReactDOM.render(element, document.body)

Para incorporar estilos sobre los íconos:

https://docs.fontawesome.com/web/use-with/react/style