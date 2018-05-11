# What is this?
## Simple interfaces for Fitbit OS development in TypeScript linting support.

All the interfaces are created from [SDK references](https://dev.fitbit.com/build/reference/) by hand in TypeScript. Also checked in Fitbit studio during runtime for js object properties and such, some documentation mismatches were found.

Surely this won't be perfect tool to use, but it does help to speed up the development.

All PR's are welcome!

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
* Add these options to *tsconfig.json*:
    ```json
    "compilerOptions": {
        "target": "es5",
        "lib": ["es5"],
        "allowSyntheticDefaultImports": true,
    }
    ```
* To build:
    
    Just copy your files to [Fitbit studio](http://studio.fitbit.com/) application.

# Requirements

* Visual Studio Code
* TSLint addon

# Known issues

* Modules such as "document" need to be imported with word "as".
    ```typescript
    import * as document from "document";
    ```
    Although, this works fine with Fitbit studio. So no changes are required.


