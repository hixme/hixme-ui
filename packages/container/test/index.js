import { expect } from 'chai'
import Component from '../src'

describe(`${Component.displayName}`, () => {
  describe('Default Export', () => {
    it('Should be of type function', () => {
      expect(Component).to.be.an('function')
    })
  })
})
