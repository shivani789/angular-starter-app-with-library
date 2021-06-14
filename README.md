# Angular Starter App With Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Steps followed to create this structure

1. ```ng new StarterAppWithLibrary --create-application=false``` This creates a workspace for us. Then move into the project ```cd StarterAppWithLibrary```.
2. ```ng g library magic-library --prefix=sd``` It creates a library with the given prefix. It overrides the ng prefix.
3. ```ng g application sample-app``` It creates a regular angular application.

Here the ```magic-library``` and ```sample-app``` uses the same node_modules.

## Running the project

Our project doesn't know about which project to serve, since we have multiple projects in our workspace.

To run our sample app, we run the command ```ng serve sample-app```. We cannot run our library as it doesn't have an entry point and also the structure is different.

## Using the library in our sample-app
If we want to use our ```magic-library``` inside our ```sample-app```, we have to build our library first.

To buld our library, run the command ```ng build magic-library```. We will get out library built under the *dist* folder.

### Importing the library inside our app.

1. We will import the library as a regular node module inside the *app.module.ts* file.
    ```import {MagicLibraryModule} from 'magic-library'```
2. Add it into the *imports* section.
3. inside the *app.component.html* add the following line.
    ```<sd-magic-library></sd-magic-library>```.

And Done! Now we can check if the library works by running the *sample-app*.
