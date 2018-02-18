import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App from './App'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('component matchs snapshot', () => {
  const tree = renderer.create(
    <App />
  )

  expect(tree.toJSON()).toMatchSnapshot()
})
