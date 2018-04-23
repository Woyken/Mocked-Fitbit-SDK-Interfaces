# What is this?
## Simple interfaces for Fitbit OS development in TypeScript linting support.

All the interfaces are created from [SDK references](https://dev.fitbit.com/build/reference/) by hand in TypeScript.

Surely this won't be perfect tool to use, but it does help to speed up the development.

All 'bug' reports are welcome! 

## Who for? 

* Tried developing in [Fitbit studio](http://studio.fitbit.com/)?
* Got tired of looking at [SDK](https://dev.fitbit.com/build/reference/) and [guides](https://dev.fitbit.com/build/guides/) for what variables can you use and what fields they contain?
* Want to have at least some way of developing for Fitbit offline? 
* Give this a try.

![Linting example](README-extras/linting_example.png?raw=true "Linting example")

# WARNING!

## Not all exports are set up the same way as they are in Fitbit studio.

Ex. All imports are accessible to both Device and Companion. 

# Set-up

* Clone this repository next to your sources.
* Add this option to *tsconfig.json*:
    ```json
    "compilerOptions": {
        "lib": ["es5"],
    }
    ```
* To build:

    Replace:
    ```typescript
    import { document } from "document";
    ```
    <<--->>
    ```typescript
    import document from "document";
    ```
    Paste the code to your [Fitbit studio](http://studio.fitbit.com/) application.



# Requirements

* Visual Studio Code
* TSLint addon

# Known issues

* I couldn't find a way to export document as default export from ambient module.

