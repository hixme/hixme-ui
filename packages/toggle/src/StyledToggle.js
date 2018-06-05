import styled from 'styled-components'

const StyledToggle = styled.label`
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }

  input[type="checkbox"]:checked ~ #slider {
    background: #2eae8f;
    background-position: 75% 50%;
    background-repeat: no-repeat;
  }

  input[type="checkbox"]:disabled ~ #slider {
    background: #bdcdd8; // greyed out on disabled
    background-position: 75% 50%;
    background-repeat: no-repeat;
  }

  input[type="checkbox"]:checked ~ #slider:before {
    left: 1px;
    box-shadow: 2px 0px 3px 1px rgba(0, 0, 0, 0.2);
  }
`

export default StyledToggle
