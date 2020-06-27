
# React Native Modular [![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

##  Summary

This app's design pattern follows CBSE (Component Based Software Engineering) Principles which emphasizes in SOC (Separation of Concerns). Modular software design allows software engineers to design decoupled components as independent modules that encapsulate a set of features and related data.

This is inspired by Engr. Ronna Mae Firmo on her work on Front-End applications.

### Module Structure

Each module should represent an independent feature in the application.

```
module - name of the module
  #shared (dumb) components across the module
  - components
    # example component exported as a constant
    - Component.tsx
    # exports all the components in the module
    - index.ts
  # containers in the module
  - containers
    # example container exported as a constant
    - ComponentContainer.tsx
    # exports all the containers in the module
    - index.ts
  # thunks in the module that connects external APIs
  - thunks
    #  example thunk exported as a constant
    - thunk.ts
    #  exports all the thunks in the module
    - index.ts
  #  responsible for maintaining public module API
  - index.ts
  # contains the models, state and reducer function
  - slice.ts
```

#### Primary Modules

##### Core Modules

Core modules are smart and dumb components that are used anywhere in the application. They can be connected to another module's API or have maintain its own data in the slice. These modules should not be coupled with other modules - this allows us to redefine the data structure of other modules without refactoring the selectors from the core containers.

##### Navigation Modules

The same thought goes to navigation. You can either you use react-navigation or other navigation packages but the navigation module will always be independent from other modules. This gives you the freedom to choose how you structure the app's navigation without worrying compatibility with the other modules. You may change your navigation structure, without worrying that other modules will break, because it is encapsulated.

```
Modules
 # core components rely on other module's API or its own. Since each module ensures that each slice
 # have an initial state, core components' props will always contain something even before hydration
 - core
   - components
   - containers
   - thunks/sagas # if you prefer sagas
   - index.ts
   - slice.ts
 # navigation is also an independent module. Basically, you can use and structure any navigation package,
 # connect it to redux to define protected routes/screens, or hydrate data for components like sidebar from
 # another module's API or connect it to 3rd party APIs
 - navigation
   - components
   - containers
   - thunks/sages # if you prefer sagas
   - index.ts
   - slice.ts
```

## Package Recommendations

##### Application Monitoring and Error Tracking

- Sentry
- New Relic

##### Authentication, Real Time Databases, Other native features and integrations for ios and android

- CodePush (OTA)
- Firebase

##### Mobile Growth

- Branch
- AppsFlyer
