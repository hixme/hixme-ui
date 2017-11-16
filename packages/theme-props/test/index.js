import { expect } from 'chai'
import themeProps, {
  getFontFamily,
  getFontSize,
  getTextColor,
} from '../src'

const PRIMARY_COLOR = '#000'
const colors = {
  primary: PRIMARY_COLOR,
}

const fontSizes = {
  medium: '16px',
}

const theme = {
  colors,
  textColors: colors,
  fontSizes,
}

const testBlankProps = { theme }
const testBasicProps = { theme, primary: PRIMARY_COLOR, medium: true }

describe('Theme Props', function () {
  describe('Default Export', function () {
    it('Should be of type function', function () {
      expect(themeProps).to.be.an('function')
    })
  })

  describe('Get text color', function () {
    it('Should be of type function', function () {
      expect(getTextColor).to.be.an('function')
    })
    it('Should default to inherit', function () {
      expect(getTextColor(testBlankProps)).to.be.equal('inherit')
    })

    it('Should get primary color', function () {
      expect(getTextColor(testBasicProps)).to.be.equal(PRIMARY_COLOR)
    })
  })


  describe('Get font size', function () {
    it('Should be of type function', function () {
      expect(getFontSize).to.be.an('function')
    })
    it('Should default to inherit', function () {
      expect(getFontSize(testBlankProps)).to.be.equal('inherit')
    })

    it('Should get medium font size', function () {
      expect(getFontSize(testBasicProps)).to.be.equal(fontSizes.medium)
    })
  })
})
