export const SplitText = (elem, options = { split: 'word' }) => {
  const splitByLetter = options?.split === 'letter'

  const generateDiv = word => {
    const div = document.createElement('div')
    div.setAttribute('style', 'position: relative; display: inline-block;')
    div.innerText = word
    return div
  }

  const innerText = elem.innerText
  const words = innerText.split(' ')
  elem.innerText = ''

  const list = words.map(generateDiv)

  while (list.length) {
    const div = list.shift()
    if (splitByLetter) {
      const word = div.innerText
      const letters = word.split('')
      const letterList = letters.map(generateDiv)
      while (letterList.length) {
        const letter = letterList.shift()
        elem.appendChild(letter)
      }
    } else {
      elem.appendChild(div)
    }
    elem.appendChild(document.createTextNode(' '))
  }
}

export default SplitText