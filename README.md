# aidantomcy.github.io

My portfolio website made with HTML, SCSS, TypeScript, and a little bit of Tailwind CSS.

## Running locally

To run this project locally, follow the steps below:

1. Install the dependencies with pnpm:

    ```
    $ pnpm install
    ```

2. Compile the TypeScript and Sass code with Webpack:

    ```
    $ pnpm build
    ```

    Or, run this command to watch for changes and rebuild the code on save:

    ```
    $ pnpm dev
    ```

3. Run this command to generate the Tailwind output file:

    ```
    $ pnpm tailwindcss:prod
    ```

    Or, run this command to watch for changes and recompile on save:

    ```
    $ pnpm tailwindcss:dev
    ```

4. Run this command to serve the application (Uses webpack-dev-server):

    ```
    $ pnpm serve
    ```

5. Open your browser and head to [http://localhost:3000](http://localhost:3000)

## Testing

This app uses Playwright for testing. Run tests with `pnpm test`.
