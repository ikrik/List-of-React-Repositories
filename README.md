# List containing all React Repos in Github

### Introduction

In this project you can find all github repositories that have to do with React and its ecosystem.
It is implemented by using **Create-React-App, Typescript, React Hooks & React Context API**.

The data is being fetch by using **Graphql & Apollo** and code is being tested using **Jest & Enzyme**

### Getting Started

Once you have cloned the repo to your local file system Use the yarn package manager to install all dependecies.

```bash
 yarn
```

Αlternatively you can use npm.

```bash
 npm install
```

After installion you will need to create a `.env.local` file where you should add your github token as the example above.

```
REACT_APP_GITHUB_TOKEN=<YOUR_TOKEN_HERE>
```

For more information follow the steps in [Creating a personal access token for the command line](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) to create a token.

### Build and Test

**Development:**

```
  yarn start
```

**Production:**

```
  yarn build
```

**Testing files:**

```
  yarn test
```

## Contributing

Pull requests are welcome.
