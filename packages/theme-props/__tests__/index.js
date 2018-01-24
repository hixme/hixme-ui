import { expect } from 'chai'
import themeProps, {
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

describe('Theme Props', () => {
  describe('Default Export', () => {
    test('Should be of type function', () => {
      expect(themeProps).to.be.an('function')
    })
  })

  describe('Get text color', () => {
    test('Should be of type function', () => {
      expect(getTextColor).to.be.an('function')
    })
    test('Should default to inherit', () => {
      expect(getTextColor(testBlankProps)).to.be.equal('inherit')
    })

    test('Should get primary color', () => {
      expect(getTextColor(testBasicProps)).to.be.equal(PRIMARY_COLOR)
    })
  })


  describe('Get font size', () => {
    test('Should be of type function', () => {
      expect(getFontSize).to.be.an('function')
    })
    test('Should default to inherit', () => {
      expect(getFontSize(testBlankProps)).to.be.equal('inherit')
    })

    test('Should get medium font size', () => {
      expect(getFontSize(testBasicProps)).to.be.equal(fontSizes.medium)
    })
  })
})
