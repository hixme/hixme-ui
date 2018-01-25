const payCycleMap = {
  '12': 'monthly',
  '24': 'semi-monthly',
  '26': 'bi-weekly',
  '52': 'weekly',
}

export default payCycle => (payCycle in payCycleMap ? payCycleMap[payCycle] : '')
