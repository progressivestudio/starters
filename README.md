### What ?

Somewhat opinionated set of project templates (starters) to help kickstart new projects.

### Prerequisites (optional)

You can install `degit` globally if you don't like using `npx`.

`npm i -g degit`

##### Why degit and not git clone ?

https://github.com/Rich-Harris/degit#wait-isnt-this-just-git-clone---depth-1

### Getting started

1. Make sure to clone one of the starters first:
   | starter name | command |
   |-------------- |---------------------------------------------------------------------------- |
   | preact | npx degit github:progressivestudio/starters/packages/preact your_repo_name |
   | react | npx degit github:progressivestudio/starters/packages/react your_repo_name |

2. Install dependencies

```bash
cd your_repo_name
pnpm i
```

3. Run the project

```bash
pnpm dev
```

### Additional info

- You don't have to use `pnpm` at all. `npm` or `yarn` will do just about the same.
