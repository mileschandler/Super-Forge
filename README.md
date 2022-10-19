# ⚡Super Forge⚡

## A super charged Forge project template

## 💡 About

Super Forge utilizies [Vite.js](https://vitejs.dev/) a next generation frontend tool that utilizes hot module reloading to super charge your development experience. It has a custom script to enable a multi developer experience.

## 🔧 Setup

To utilize Atlassian context while developing:

1. Follow the steps to install [Forge CLI](https://developer.atlassian.com/platform/forge/getting-started/)
2. Login to Forge using `forge login`
3. Setup .env.local file

```
    ATLASSIAN_BASE_URL=
    ATLASSIAN_AUTH_USER=
    ATLASSIAN_AUTH_TOKEN=
    APP_TITLE=
```

**note that APP_TITLE is what you want the app to be called in product**

4. Register the app using `npm run register`

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

## ❔ FAQ

- **Why do I need to `npm run register` instead of `forge register`?**

At the time of writing this, Forge doesn't provide a solution for a multi developer experience.
Running `npm run register` will replace certain values in the **manifest.yml** file with environment variable placholders.
Local configuration is stored in the **.env.local** which should not be commited

- **Why does Forge keep asking me to approve access while running `forge tunnel`?**

If you change scope or permissions of your app (in the manifest.yml file), you will need to grant access in that same environment **not** in tunnel mode.

- **Can I change what module this app type is?**

Yes, the Confluence macro is just a default value to get developers started.
Feel free to replace the module values with any of the existing Forge app modules
