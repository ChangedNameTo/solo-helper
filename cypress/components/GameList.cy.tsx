import React from 'react'
import GameList from '../../src/Views/GameList/GameList'

describe('<GameList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GameList />)
  })
})