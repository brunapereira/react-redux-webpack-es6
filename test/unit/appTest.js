import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import expect from 'expect'
import React from 'react'
import App from 'app'

const mockStore = configureMockStore()

describe('App', () => {
  it('renders an h1', () => {
    const store = mockStore({title: 'Hello world'})
    const app = shallow(<App store={store} />)

    expect(app.shallow().node).toEqual(<h1>Hello world</h1>)
  })
})
