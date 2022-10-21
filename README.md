# ⚡Super Forge⚡

![](./static/super-forge-frontend/src/assets/super-forge-blob.gif)

## A super charged Forge project template

## 💡 About

Super Forge utilizies [Vite.js](https://vitejs.dev/) a next generation frontend tool that utilizes hot module reloading to super charge your development experience. It has some built in patterns like type sharing and uses Vitest to provide hot reload unit testing already established.

## 🔧 Setup

To utilize Atlassian context while developing:

1. Follow the steps to install [Forge CLI](https://developer.atlassian.com/platform/forge/getting-started/)
2. Login to Forge using `forge login`
3. Register the app with `forge register`

### Install the app to a site

1. `npm i`
2. `cd static/super-forge-frontend`
3. `npm i`
4. `npm run build`
5. In a separate terminal: `forge deploy`
6. `forge install -s <your-site>`

### Local Development

1. `forge tunnel`
2. In a separate terminal: `npm run dev`

### Testing

Testing uses [Forge Vitest](https://vitest.dev/) as the test runner paired with [Enzyme](https://enzymejs.github.io/enzyme/) for the frontend.
To run unit tests

1. `npm run test`

To run unit tests in the frontend

1. `cd static/super-forge-frontend`
2. `npm run test`

## ❔ FAQ

- **Why does Forge keep asking me to approve access while running `forge tunnel`?**

If you change scope or permissions of your app (in the manifest.yml file), you will need to grant access in that same environment **not** in tunnel mode.

- **Can I change what module this app type is?**

Yes, the Confluence macro is just a default value to get developers started.
Feel free to replace the module values with any of the existing Forge app modules.

- **How can I contribute if i'm not the app owner?**

Currently Forge is designed for single user development, which means they don't have a good story for adding contributors. To do it manually you will need to run `forge register` with a name like <app-name>-<your name> and then revert the manifest.yml file before commiting your changes.
