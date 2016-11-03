import {shallow} from 'enzyme'
import expect from 'expect'
import React from 'react'
import App from 'app'

describe('App', () => {
  it('renders an h1', () => {
    let app = shallow(<App />)
    expect(app.shallow().node).toEqual(<h1>Hello world</h1>)
  })
})
