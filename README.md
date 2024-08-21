![Explore historic Open Source Contributions](.github/assets/banner.jpg 'Explore historic Open Source Contributions')

# PRs

[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

> Explore historic Open Source Contributions (pull requests) on GitHub

## Built with

- [Nuxt](https://nuxt.com/)
- [Nitro server API routes](https://nuxt.com/docs/guide/concepts/server-engine#server-engine)
- [GitHub API](https://docs.github.com/en/rest)
- [Uno CSS](https://unocss.dev/)
- [Vercel](http://vercel.com)

## Setup

```bash
# install dependencies
pnpm install

# copy the .env.example file to .env and fill in your GitHub token:
cp .env.example .env

# create a GitHub token and set it in the .env file:
GITHUB_TOKEN=your-github-token

# serve in dev mode, with hot reload at localhost:3000
pnpm dev

# build for production
pnpm build
```

## Credits

This project is inspiread by [Anthony Fu](https://github.com/antfu)'s [releases.antfu.me](https://github.com/antfu/releases.antfu.me).

## License

[MIT License](./LICENSE)

[license-src]: https://img.shields.io/npm/l/nuxt-vercel-analytics.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-vercel-analytics
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
