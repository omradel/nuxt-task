# Notes Before Run App

i followed the profided structure in this task , but i can work with another structure in large scale apps
please look at this modular structure [HMVC structure](https://github.com/omradel/nuxt_hmvc_strcture)

i use vuetify , tailwind v4 and pinia and i integrated form api and show success
message and handle expexted errors and show error mesage , and i integrated infinite scroll
using vuetify-infinite-scroll and show no data message with image if there are full api error
like (network error) you can try it by turnoff wi-fi , and i import only the componetes
that i need from vurtify to be sutable for treeshaking

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
