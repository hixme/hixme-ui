import styled, { keyframes } from 'styled-components'
import {
  bounceOut,
  bounce,
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  fadeIn,
  fadeInDown,
  fadeInDownBig,
  fadeInLeft,
  fadeInLeftBig,
  fadeInRight,
  fadeInRightBig,
  fadeInUp,
  fadeInUpBig,
  fadeOut,
  fadeOutDown,
  fadeOutDownBig,
  fadeOutLeft,
  fadeOutLeftBig,
  fadeOutRight,
  fadeOutRightBig,
  fadeOutUp,
  fadeOutUpBig,
  flash,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  headShake,
  hinge,
  jello,
  lightSpeedIn,
  lightSpeedOut,
  pulse,
  rollIn,
  rollOut,
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
  rubberBand,
  shake,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  slideOutUp,
  swing,
  tada,
  wobble,
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,
} from 'react-animations'

const chooseReactAnimation = (props) => {
  if (props.bounceOut) return bounceOut
  if (props.bounce) return bounce
  if (props.bounceIn) return bounceIn
  if (props.bounceInDown) return bounceInDown
  if (props.bounceInLeft) return bounceInLeft
  if (props.bounceInRight) return bounceInRight
  if (props.bounceInUp) return bounceInUp
  if (props.bounceOutDown) return bounceOutDown
  if (props.bounceOutLeft) return bounceOutLeft
  if (props.bounceOutRight) return bounceOutRight
  if (props.bounceOutUp) return bounceOutUp
  if (props.fadeIn) return fadeIn
  if (props.fadeInDown) return fadeInDown
  if (props.fadeInDownBig) return fadeInDownBig
  if (props.fadeInLeft) return fadeInLeft
  if (props.fadeInLeftBig) return fadeInLeftBig
  if (props.fadeInRight) return fadeInRight
  if (props.fadeInRightBig) return fadeInRightBig
  if (props.fadeInUp) return fadeInUp
  if (props.fadeInUpBig) return fadeInUpBig
  if (props.fadeOut) return fadeOut
  if (props.fadeOutDown) return fadeOutDown
  if (props.fadeOutDownBig) return fadeOutDownBig
  if (props.fadeOutLeft) return fadeOutLeft
  if (props.fadeOutLeftBig) return fadeOutLeftBig
  if (props.fadeOutRight) return fadeOutRight
  if (props.fadeOutRightBig) return fadeOutRightBig
  if (props.fadeOutUp) return fadeOutUp
  if (props.fadeOutUpBig) return fadeOutUpBig
  if (props.flash) return flash
  if (props.flip) return flip
  if (props.flipInX) return flipInX
  if (props.flipInY) return flipInY
  if (props.flipOutX) return flipOutX
  if (props.flipOutY) return flipOutY
  if (props.headShake) return headShake
  if (props.hinge) return hinge
  if (props.jello) return jello
  if (props.lightSpeedIn) return lightSpeedIn
  if (props.lightSpeedOut) return lightSpeedOut
  if (props.pulse) return pulse
  if (props.rollIn) return rollIn
  if (props.rollOut) return rollOut
  if (props.rotateIn) return rotateIn
  if (props.rotateInDownLeft) return rotateInDownLeft
  if (props.rotateInDownRight) return rotateInDownRight
  if (props.rotateInUpLeft) return rotateInUpLeft
  if (props.rotateInUpRight) return rotateInUpRight
  if (props.rotateOut) return rotateOut
  if (props.rotateOutDownLeft) return rotateOutDownLeft
  if (props.rotateOutDownRight) return rotateOutDownRight
  if (props.rotateOutUpLeft) return rotateOutUpLeft
  if (props.rotateOutUpRight) return rotateOutUpRight
  if (props.rubberBand) return rubberBand
  if (props.shake) return shake
  if (props.slideInDown) return slideInDown
  if (props.slideInLeft) return slideInLeft
  if (props.slideInRight) return slideInRight
  if (props.slideInUp) return slideInUp
  if (props.slideOutDown) return slideOutDown
  if (props.slideOutLeft) return slideOutLeft
  if (props.slideOutRight) return slideOutRight
  if (props.slideOutUp) return slideOutUp
  if (props.swing) return swing
  if (props.tada) return tada
  if (props.wobble) return wobble
  if (props.zoomIn) return zoomIn
  if (props.zoomInDown) return zoomInDown
  if (props.zoomInLeft) return zoomInLeft
  if (props.zoomInRight) return zoomInRight
  if (props.zoomInUp) return zoomInUp
  if (props.zoomOut) return zoomOut
  if (props.zoomOutDown) return zoomOutDown
  if (props.zoomOutLeft) return zoomOutLeft
  if (props.zoomOutRight) return zoomOutRight
  if (props.zoomOutUp) return zoomOutUp
  if (props.flipInX) return flipInX
  return bounce
}

const animationStyle = props => keyframes`${chooseReactAnimation(props)}`

const Animate = styled.div`
  animation: ${(props) => {
    if (props.time) return props.time
    return '1s'
  }} ${animationStyle};
  animation-delay: ${(props) => {
    if (props.delay) return props.delay
    return '0s'
  }};
  animation-iteration-count: ${(props) => {
    if (props.count) return props.count
    return '1'
  }};
  animation-play-state: ${(props) => {
    if (props.trigger) return 'running'
    return 'paused'
  }};
  animation-fill-mode: ${(props) => {
    if (props.fillMode) return props.fillMode
    return 'none'
  }};
  display: ${(props) => {
    if (props.display) return props.display
    return 'inline-block'
  }};
`

Animate.displayName = 'Animate'

export default Animate
