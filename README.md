<a href="#installation" width="100%">
<img src="banner.svg" alt="Title banner"/>
</a>

## Conic Gradient Plugin for Tailwind CSS

[![NPM](https://nodei.co/npm/@designbycode/tailwindcss-conic-gradient.png?mini=true)](https://nodei.co/npm/@designbycode/tailwindcss-conic-gradient/)

[![npm version](https://badge.fury.io/js/@designbycode%2Ftailwindcss-conic-gradient.svg)](https://badge.fury.io/js/@designbycode%2Ftailwindcss-conic-gradient)
![npm](https://img.shields.io/npm/dt/%40designbycode/tailwindcss-conic-gradient)
![NPM](https://img.shields.io/npm/l/%40designbycode%2Ftailwindcss-conic-gradient)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40designbycode%2Ftailwindcss-conic-gradient)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
[![GitHub stars](https://img.shields.io/github/stars/DesignByCode/tailwindcss-conic-gradient?style=social)](https://github.com/DesignByCode/tailwindcss-conic-gradient/stargazers)
[![HitCount](https://hits.dwyl.com/designbycode/tailwindcss-conic-gradient.svg?style=flat)](http://hits.dwyl.com/designbycode/tailwindcss-conic-gradient)

The Conic Gradient plugin for Tailwind CSS empowers you to effortlessly create and personalize conic gradients using utility classes and components. Conic gradients are a visually appealing type of gradient that emanates from a central
point in a circular pattern. This plugin provides an extensive range of options for configuring the number of colors, gradient positions, angles, and default colors for your conic gradients.

## 📇 Table of Contents

* [Installation](#installation)
    * [Using pnpm](#using-pnpm)
    * [Using npm](#using-npm)
    * [Using yarn](#using-yarn)
* [Setup](#setup)
* [Use](#use)
    * [Utility Classes](#utility-classes)
    * [With modifiers](#with-modifiers)
        * [Angle modifiers](#angle-modifiers)
        * [Color modifiers](#color-modifiers)
        * [Position modifiers](#position-modifiers)
    * [Customizing Gradients](#customizing-gradients)
        * [Theme Configuration](#theme-configuration)
* [Contributing](#contributing)
* [License](#license)
* [Author](#author)
* [Acknowledgments](#acknowledgments)

## Installation

Getting started with the Conic Gradient plugin is a breeze. Follow these straightforward steps:
To use this plugin, you need to install it via pnpm, npm or yarn.

#### Using pnpm

```bash
pnpm add @designbycode/tailwindcss-conic-gradient
```

#### Using npm

```bash
npm install @designbycode/tailwindcss-conic-gradient
```

#### Using yarn

```bash
yarn add @designbycode/tailwindcss-conic-gradient
```

First, ensure you have Tailwind CSS installed in your project. If not, install it by following the official documentation.

Next, require the plugin in your Tailwind CSS configuration file (usually named tailwind.config.js).

## Setup

1. First, ensure you have Tailwind CSS installed in your project. If not, install it by following the official documentation.

2. Next, require the plugin in your Tailwind CSS configuration file (usually named tailwind.config.js).

```javascript
module.exports = {
    // ...other configurations
    plugins: [
        // ...other plugins
        require("@designbycode/tailwindcss-conic-gradient"),
    ],
};
```

Once you've required the plugin and added it to the plugins array, you can use the new **conic gradient** utilities in your HTML templates.

![](C:\www\my-packages\packages\tailwindcss-conic-gradient\screenshot.png)

## Use

### Utility Classes

Harness the power of utility classes to effortlessly apply conic gradients to your HTML elements or templates.

```.conic-gradient```

Apply the ```.conic-gradient``` class to an element to imbue it with a conic gradient background. By default, it utilizes a two-color conic gradient. However, you can effortlessly alter the number of colors using responsive classes.

```html 

<div class="conic-gradient"></div>
<div class="conic-gradient-2"></div>
<div class="conic-gradient-6"></div>
```

### With modifiers

#### Angle modifiers

You cant use class with color from 1 to 6 by default ```conic-gradient-angle-{deg}```

```html
<h1 class="conic-gradient conic-gradient-angle-45 ">
    Hello, TailwindCSS
</h1>
```

#### Color modifiers

You cant use class with color from 1 to 6 by default ```conic-gradient-color-{count}-{color_value}```

```html
<h1 class="conic-gradient conic-gradient-color-1-indigo-500 conic-gradient-color-1-purple-500 ">
    Hello, TailwindCSS
</h1>
```

#### Position modifiers

You can move convex position by X and Y by using classes ```.conic-gradient-{position}-{value}```

```html
<h1 class="conic-gradient conic-gradient-x-10 conic-gradient-y-10">
    Hello, TailwindCSS
</h1>
```

### Customizing Gradients

#### Theme Configuration

The Conic Gradient plugin offers you a wealth of customization options by allowing you to modify the theme configuration within your tailwind.config.js file. Here's a comprehensive rundown of the available theme options:

```javascript
module.exports = {
    theme: {
        extend: {
            conicColorCount: {
                // Define the number of colors in the conic gradient
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
            },
            conicPosition: {
                // Customize gradient positions
                // For instance, set different positions for specific breakpoints
                0: "0%",
                50: "50%",
                100: "100%",
            },
            conicAngle: {
                // Tailor gradient angles as per your requirements
                // Define angles that suit your design
                0: "0deg",
                90: "90deg",
                180: "180deg",
            },
            conicDefaultColor: {
                // Set default colors for the conic gradient
                // Use colors that align with your design palette
                1: "#14b8a6",
                2: "#a855f7",
                3: "#c026d3",
                4: "#2563eb",
                5: "transparent",
                6: "transparent",
            },
        },
    },
}

```

## Contributing

Contributions to this plugin are welcome! If you encounter any issues, have feature requests, or want to improve the plugin, feel free to create a pull request or submit an issue on the GitHub repository.

## License

This project is licensed under the [MIT](LICENCE) License - see the [LICENSE](LICENCE) file for details.

## Author

<div>
<img  align="left" style="box-shadow:3px 3px 3px rgba(0,0,0,75);border-radius:1rem;border:solid 2px rgba(255,225,225,.25)" src="https://github.com/designbycode.png?size=130" alt="Claude Myburgh">
</div>
<h2 style="margin-top:0">Claude Myburgh</h2><ul style="padding-left:0;margin-top:-.63rem;list-style:none"><li>Github:<a href="https://github.com/designbycode"> @designbycode</a></li><li>Npm:<a href="https://www.npmjs.
com/~designbycode_"> @designbycode_</a></li></ul>

## Acknowledgments

- This plugin is inspired by the needs of web developers using Tailwind CSS.
- Special thanks to the Tailwind CSS team for creating such an amazing framework.











