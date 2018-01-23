import { expect } from 'chai'
import Component from '../src'

describe(`${Component.displayName}`, function () {
  describe('Default Export', function () {
    it('Should be of type function', function () {
      expect(Component).to.be.an('function')
    })
  })
})
