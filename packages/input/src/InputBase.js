import styled from 'styled-components'

import {
  getBorderColor,
} from '@hixme-ui/theme-props'

const InputBase = styled.input`
  :focus:enabled {
    border-color: ${props => getBorderColor(props)};
  };
  :disabled {
    box-shadow: none;
    color: #aebdc4;
    cursor: not-allowed;
  };
  :invalid {
    border-color: ${props => getBorderColor({ ...props, error: true })};
  };
  background-color: white;
  background-repeat: no-repeat;
  background-position: ${({ search }) => (search ? '13px' : '0px')};
  background-image: ${({ search }) => {
    if (search) {
      // magnifying glass
      return 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAC/klEQVQ4T' +
      '6WUT2hUVxjFz7kvvphkkknVqthKEnEUC9aJjWQcpTRgRko3kkUXRcFALbqzRaRQ6EJxk5bSglDahQiFrkoVDUInxqGUTP6QZqJpuklikLQVb' +
      'RtKop048+ae8hINM5OZLOy3u/ee++N8f+4lSkTP8FRQdq6JlgGAHqnZ6tz6mWh0a7qUPn+P+Yvx8XH3938W3gbNCQHbIL1oqIyo+xJ/dR33Q' +
      'lvr7uHVoMvARCpVn0mjm7C7JdSVukTgLh3z5aHW8GckbRkNsOQs85Vgjy+KiHkIo4SZgkEQso0Aw5JoaOYB+3F79LXPywLjfT8fJXnRSkEaz' +
      'CBnzjVtCnwTCoWe+Jd+unPnhfSj7FUBYSy5/4WO6YhFmieKoVxsQGbummRf950R/DQW3XuuWJiYnl6bvT/7tYRji0kY09UeCX9IUgVNiQ+lw' +
      'vJwHbIv+2a2baxrf+asGHprcGSPl0Nc0kZjTKJxQ+DNYi3j/akDsuoFVEmYy7EDzZ3luphMjq97hCe9ksKgGXLd6rfaWnb+VeDwh/7brVTup' +
      'qQAjbkS29/cUQ7Y2zfSkCNuSHqFZHKdu7m9pWXLvwXAm4OjO6z1rstyBwxHHFMVO9S66+9S0ET/2BvZXLZbVA2Iq7H9eztW1DCZnKmax8NvI' +
      'RzxDylzsWJL8GxbU9NCPvTHobGtC172FqTtIDMw5tThSPjSii77G4nBsZZsLvOdhAYScwAGKhyetaj6jV46wDUVjbmsd17EQX8WaThQx9rDk' +
      'UjI1xbE8kvpGUh1WWtPQqhdGm4+JPAHABcWDYtpPg2Sjw35hbO5/nxxJstASU7P4O13ZO0ZSK+urCEzJCYBvCT/AZSBFnwOPiQ+kApBeJfAP' +
      'ivUUPJA80AG3W6lvs+m9YHA05CtLQVdAfShfp0mJyfde7NeoN4JpvNHY2JionL6z/mPykFLAlf7nvyz1aDPBcyHwuJ9UQEYzjk0R54b6EOHh' +
      '7VmNjP6iWA7KdSIznv/C/i03k68byxm6EWr1ld3/Qe0WWxwZWPXigAAAABJRU5ErkJggg==)'
    }

    return 'none'
  }};

  border-width: 1px;
  border-style: solid;
  border-color: ${props => getBorderColor({ ...props })};
  border-radius: 4px;
  box-shadow: inset 0 1px 1px 0 #DBE2E8;
  font-size: ${({ large, mini }) => {
    if (large) return '21px'
    if (mini) return '14px'
    return '14px'
  }};
  font-weight: 500;
  height: ${({ large, mini }) => {
    if (large) return '65px'
    if (mini) return '28px'
    return '36px'
  }};
  line-height: 22px;
  margin-bottom: 5px;
  outline: none;
  padding: 6px 12px;
  padding-left: ${({ mini, search, currency }) => {
    if (search) return '48px'
    if (currency) return '28px'
    if (mini) return '8px'
    return '12px'
  }};
  transition: border 0.2s ease-in-out;
  width: 100%;
`

InputBase.displayName = 'hui:InputBase'
InputBase.huiName = 'InputBase'

export default InputBase
