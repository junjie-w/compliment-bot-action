# Compliment Bot Action

![GitHub package.json version](https://img.shields.io/github/package-json/v/junjie-w/compliment-bot-action)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/junjie-w/compliment-bot-action/test-and-lint.yml)
![Node.js](https://img.shields.io/badge/Node.js->=20.8.1-brightgreen)
[![codecov](https://codecov.io/gh/junjie-w/compliment-bot-action/branch/main/graph/badge.svg)](https://codecov.io/gh/junjie-w/compliment-bot-action)
[![semantic-release](https://img.shields.io/badge/semantic--release-enabled-brightgreen?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
![ESLint](https://img.shields.io/badge/ESLint-enabled-brightgreen)

A GitHub Action that generates a random compliment with emojis for developers on every push:)

## 📝 Usage

Add the following workflow to your `.github/workflows` directory:

```yaml
name: Generate Compliment

on:
  pull_request:
    branches: [main, develop]

jobs:
  generate-compliment:
    runs-on: ubuntu-latest
    steps:
      - uses: junjie-w/compliment-bot-action@main
        with:
          developer_name: "Code Wizard"    
          # The name to use in the compliment (required)
          compliment_style: "funny"     
          # Style of compliment (required: enthusiastic/funny/motivational)
```

### Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `developer_name` | Yes | `"Awesome Developer"` | The name of the developer to compliment |
| `compliment_style` | Yes | `"enthusiastic"` | The style of compliment (`"enthusiastic"`, `"funny"`, or `"motivational"`) |

## 🛠️ Development

### Prerequisites
- Node.js >= 20.8.1
- npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/junjie-w/compliment-bot-action.git
cd compliment-bot-action
```

2. Install dependencies:
```bash
npm install
```

3. Enable Git hooks:
```bash
npm run prepare
```

### Scripts

- `npm run build` - Builds the action using @vercel/ncc
- `npm test` - Runs Jest tests
- `npm run test:coverage` - Runs tests with coverage report
- `npm run lint` - Lints JavaScript and YAML files
- `npm run lint:fix` - Fixes linting issues automatically

### Commit Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. Commit messages should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 🔧 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/junjie-w/compliment-bot-action/issues).

## 📦 Published Package

This action is available on the [GitHub Marketplace](https://github.com/marketplace/actions/compliment-bot-action) :)
