# REMIND - Nuxt TYPO3 News

This nuxt3 module is the frontend part for [remind/headless-news](https://github.com/remindgmbh/headless-news).

## Requirements

TYPO3 instance with [remind/headless-news](https://github.com/remindgmbh/headless-news).

Nuxt3 project with [@remindgmbh/nuxt-typo3](https://github.com/remindgmbh/nuxt-typo3).

## Installation

1. install using `npm install @remindgmbh/nuxt-typo3-news` or `yarn add @remindgmbh/nuxt-typo3-news`

2. add module in nuxt.config.js

    ```javascript
    export default defineNuxtConfig({
        ...
        modules: [
            ...
            '@remindgmbh/nuxt-typo3-news',
            ...
        ]
        ...
    })
    ```

## Configuration

Module options are described in `ModuleOptions` Interface in [module.ts](src/module.ts) and can be set using the config key `typo3News`. Public runtimeConfig can be used as well to set module options.

## Customization

See [@remindgmbh/nuxt-typo3](https://github.com/remindgmbh/nuxt-typo3) readme.

## Development

See [@remindgmbh/nuxt-typo3](https://github.com/remindgmbh/nuxt-typo3) readme.
