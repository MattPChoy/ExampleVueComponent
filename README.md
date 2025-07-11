# Test Components
> An example of how to use Vite's library mode to generate a NPM package, complete with type-checked components.

## Usage
- **Generating the package** is done by running `npm run build` and `npm run pack` locally, which will generate a file `my-package-v{version}.tgz`
- **Consuming the package** is done by running `npm install path-to/my-package-v{version}.tgz`
- You can also use `npm link` to test locally