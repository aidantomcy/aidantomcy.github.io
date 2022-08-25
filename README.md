# aidantomcy.github.io

My portfolio website made with HTML, SCSS, TypeScript, and a little bit of Tailwind CSS.

## Running locally

To run this project locally, follow the steps below:

1. Install the dependencies with Yarn:

    ```
    $ yarn
    ```
      
    Or, with NPM:

    ```
    $ npm install
    ```

2. Build the TypeScript and Sass code with Webpack:

    ```
    $ yarn build
    ```

    Or, run this command to watch for changes and rebuild the code on save:

    ```
    $ yarn dev
    ```

3. Run this command to generate the Tailwind output file:
    ```
    $ yarn tailwind:prod
    ```
    Or, run this command to watch for changes and recompile on save:
    ```
    $ yarn tailwind:dev
    ```
4. Run this command to serve the application (Uses webpack-dev-server):
    ```
    $ yarn serve
    ```
5. Open your browser and head to [http://localhost:3000](http://localhost:3000)

## Testing

This app uses Playwright for testing. Run tests with `yarn test`.
