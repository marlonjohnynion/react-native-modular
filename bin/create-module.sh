#!/bin/bash
echo "module name:"
read -r name

mkdir "src/Modules/$name"
mkdir "src/Modules/$name/__tests__"
mkdir "src/Modules/$name/components"
touch "src/Modules/$name/components/Example.js"
touch "src/Modules/$name/components/index.js"
mkdir "src/Modules/$name/containers"
touch "src/Modules/$name/containers/ExampleContainer.js"
touch "src/Modules/$name/containers/index.js"
mkdir "src/Modules/$name/thunks"
touch "src/Modules/$name/thunks/doExample.js"
touch "src/Modules/$name/thunks/index.js"
touch "src/Modules/$name/index.js"
touch "src/Modules/$name/slice.js"

# writing template component to /components
cat <<EOT >> "src/Modules/$name/components/Example.js"
import PropTypes from 'prop-types'
import React from 'react'

/**
 * an example component
 * @param props
 * @returns {*}
 * @constructor
 */
export const Example = ({ message }) => {
  return <div>{message}</div>
}
Example.propTypes = {
  message: PropTypes.string.isRequired
}
EOT

# writing export definition to /components/index.js
cat <<EOT >> "src/Modules/$name/components/index.js"
export * from './Example'
EOT

# writing template container to /containers
cat <<EOT >> "src/Modules/$name/containers/ExampleContainer.js"
import { connect } from 'react-redux'
import { Component } from '../components'

const Wrapper = (props) => {
  return <Component {...pros} />
}

const mapState = state => ({

})

/**
 * see https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
 */
const mapDispatch = {

}

export const ExampleContainer = connect(mapState, mapDispatch)(Wrapper)
EOT

# writing export definition to /containers/index.js
cat <<EOT >> "src/Modules/$name/containers/index.js"
export * from './ExampleContainer'
EOT

# writing template thunk to /thunks
cat <<EOT >> "src/Modules/$name/thunks/doExample.js"
export const doExample = value => dispatch => {
  console.log('[!] HEADS UP! -- executing doExample')
}
EOT

# writing export definition to /thunks/index.js
cat <<EOT >> "src/Modules/$name/thunks/index.js"
export * from './doExample'
EOT

# writing template to index.js
cat <<EOT >> "src/Modules/$name/index.js"
import slice from './slice'
import * as components from './components'
import * as containers from './containers'
import * as thunks from './thunks'

const { actions, reducer } = slice

/**
 * The module index is responsible for maintaining its public API.
 * This is the exposed surface where modules can interface with each other.
 */
export default { components, containers, actions, reducer, thunks }
EOT

# writing template to slice.js
cat <<EOT >> "src/Modules/$name/slice.js"
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: '$name',
  initialState: {},
  reducers: {}
})

/**
 * actions exposed to be used internally (within the module)
 */
// export const {  } = slice.actions
export default slice
EOT

echo "Success! Module with name: $name added to src/Modules"
