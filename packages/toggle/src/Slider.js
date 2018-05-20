import styled from 'styled-components'

const Slider = styled.span`
  cursor: pointer;
  width: 50px;
  height: 23px;
  position: relative;
  border-radius: 23px;
  display: block;
  background: #eb5465;
  background-position: 25% 50%;
  background-repeat: no-repeat;
  transition: all ease 0.2s;
  &:before {
    width: 21px;
    height: 21px;
    content: "";
    position: absolute;
    top: 1px;
    left: 28px;
    border-radius: 50%;
    background: #fff;
    box-shadow: -2px 0px 3px 1px rgba(0, 0, 0, 0.2);
    transition: all ease 0.2s;
  }
`

export default Slider
