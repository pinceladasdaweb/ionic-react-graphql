const crop = (str: string, length = 50, dots = false) => {
  if (str.length <= length) return str
  
  let output = str.substr(0, length)
  output = output.substr(0, output.lastIndexOf(' '))

  return !dots ? output : `${output} ...`
}

export { crop }
