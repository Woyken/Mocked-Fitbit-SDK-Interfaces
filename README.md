# Typescript support for fitbit apps development
## Set-up

1. Install package
```
npm install fitbit-sdk-typed --save-dev
```
2. Configure your *tsconfig.json*

```json
"compilerOptions": {
    ...
    "types": null, /* Or add 'fitbit-sdk-typed' to the array */
    "typeRoots": [
      "node_modules/@types",
      "node_modules/fitbit-sdk-typed"
    ],
    ...
```
3. Happy coding!

## More info

All the interfaces are created from [SDK references](https://dev.fitbit.com/build/reference/) by hand in TypeScript.

After that found some  between documentation and actual runtime objects and their properties, then checked during runtime for js object properties and such.

### Example use

![Linting example](README-extras/linting_example.png?raw=true "Linting example")

## WARNING!

- Keep in mind which imports are accessible to Device and which to Companion.

Although Fitbit's compiler here will quickly throw error about that.

- Be aware! Documentation is far from perfect that means this package won't be perfect either. Although for common cases you should be fine.
