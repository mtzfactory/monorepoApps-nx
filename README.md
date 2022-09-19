![React Native](https://img.shields.io/badge/react_native_v0.70-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![Testig-Library](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

# A React Native Monorepo Test With Nx

This repository is just a PoC of a RN mono-repo using [Nx](https://nx.dev).

## Installation

Follow this instructions to install the dependencies:

1. Clone the repo:

   ```bash
   git clone git@github.com:mtzfactory/monorepoApps-nx.git
   ```

2. Install dependencies:

   ```bash
   cd monorepoApps-nx
   yarn
   ```

## Folder structure

The mono-repo uses `Nx` to help us organize the repository.

The project is divided mainly into two main areas: `apps` and `libs`,
with the following structure:

```
├── apps/
│   ├── mobile/
│   └── mobile-e2e/
├── libs/
│   ├── eslint-config/
│   ├── my-app/
│   └── ui/
└── package.json
```

The `apps` folder keeps the apps:

- `mobile/`, folder containing the mobile app, with the RN dependencies.
- `mobile-e2e`, folder containing a e2e test environment.

The `libs` folder keeps all the shared packages used by the apps:

- `eslint-config/`, folder containing the eslint rules shared between our codebase.
- `my-app/`, folder containing the application logic.
- `ui/`, folder containing the implementation of a basic UI library.

## Starting the app

Start the metro server with the following command:

```bash
yarn start mobile {--reset-cache}`
```

Build the app and start the simulator with the following command:

```bash
yarn mobile run-{andorid|ios}`
```

## Available commands

Pleae, find more commands [here](/docs/working-with-nx.md)
