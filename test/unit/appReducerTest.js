import expect from 'expect'
import appReducer from 'appReducer'

describe('AppReducer', () => {
  const emptyState = {}

  it('defaults to state', () => {
    const action = {
      type: 'NON_EXISTANT'
    }

    const oldState = {
      data: ['first', 'second']
    }

    const newState = appReducer(oldState, action)

    expect(newState).toEqual(oldState)
  })

  it('defaults to blank when no state', () => {
    const action = {
      type: 'NON_EXISTANT'
    }

    const newState = appReducer(emptyState, action)

    expect(newState).toEqual({})
  })
})

