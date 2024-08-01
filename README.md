## Install dependencies:

```bash
npm
# or
yarn
# or
pnpm
```

## Start Development:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Start Prodution:

```bash
npm run build --> npm run start
# or
yarn build -->  yarn start
# or
pnpm build --> pnpm start
```

## Test Development:

```bash
yarn build
yarn lint
yarn run prettier --list-different "**/*.{json,ts,tsx}"
```

## Test Docker:

```bash
yarn build
docker build -t waiuru .
docker run -p 3000:3000 -d waiuru
```
