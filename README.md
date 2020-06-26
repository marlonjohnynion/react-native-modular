# React Native Modular

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)


## Summary

This app's design pattern follows CBSE (Component Based Software Engineering) Principles which emphasizes in SOC (Separation of Concerns). Modular software design allows software engineers to design decoupled components as independent modules that encapsulate a set of features and related data.

This is inspired by Engr. Ronna Mae Firmo on her work on Front-End applications.

### Module Structure

Each module should represent an independent feature in the application.

```
module - name of the module
  components - shared (dumb) components across the module
    Component.tsx - example component exported as a constant
    index.ts - exports all the components in the module
  containers - containers in the module
    ComponentContainer.tsx - example container exported as a constant
    index.ts - exports all the containers in the module
  thunks - thunks in the module that connects external APIs
    thunk.ts - example thunk exported as a constant
    index.ts - exports all the thunks in the module
  index.ts - responsible for maintaining public module API
  slice.ts - contains the models, state and reducer function
```

## Package Recommendations

### Application Monitoring and Error Tracking

- Sentry
- New Relic

### Authentication, Real Time Databases, Other native features and integrations for ios and android

- CodePush (OTA)
- Firebase

### Mobile Growth

- Branch
- AppsFlyer
