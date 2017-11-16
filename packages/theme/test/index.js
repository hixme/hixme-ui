import { expect } from 'chai'
import theme from '../src'

describe('Theme', function () {
  describe('Default Export', function () {
    it('Should be of type object', function () {
      expect(theme).to.be.an('object')
    })
  })
})
