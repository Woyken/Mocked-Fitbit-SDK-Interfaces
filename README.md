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

Ex. All globally accessible variables (such as console, fetch...) need to be imported through same relative paths and removed before attempting to build.

# Set-up

* Clone this repository next to your sources.
* Use imports from this 'library' for supported linting.
* To build:

    Replace all relative paths to imports to global import
    ```typescript
    import { Accelerometer } from "../MockedFitBitSDKInterfaces/MockedFitBitSDKInterfaces/DeviceApi/accelerometer";
    ```
    <<--->>
    ```typescript
    import { Accelerometer } from "accelerometer";
    ```
    Paste code with replaced imports to your [Fitbit studio](http://studio.fitbit.com/) application.



# Requirements

* Visual Studio Code
* TSLint addon

# Known issues

* I couldn't find a way to make all exports appear as Fitbit's global exports. This would remove the need to replace import paths every time.

