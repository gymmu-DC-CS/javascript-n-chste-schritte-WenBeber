export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e" && currentElement != "E") {
      result.push(currentElement)
    }
  }
  return result.join("")
}
export function aufgabe02(args) {
  return args.toUpperCase()
}
export function aufgabe03(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result++
    }
  }
  return result
}

export function aufgabe04(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " " && input[i - 1] != "-") {
      result++
    }
  }
  return result + 1
}

export function aufgabe05(args) {
  const input = args
  if (input.toLowerCase() === input) {
    return false
  } else {
    return true
  }
}

export function aufgabe06(args) {
  const input = args
  if (input === input) {
    return true
  } else {
    return false
  }
}

export function aufgabe07(args) {
  const input = args
  if (
    (input.indexOf(" und ") != -1 && input.indexOf("Und") != 0) ||
    input.indexOf("Und") === 0 ||
    input === "und"
  )
    return true
  else return false
}

export function aufgabe08(args) {
  const input = args

  var textMit3 = input.replace(/[e]/g, "3")

  return textMit3
}

export function aufgabe09(args) {
  const input = args
  if (input.length === 6) return true
  else return false
}

export function aufgabe11(args) {
  const input = args
  if (input.length === 1) {
    return input.charCodeAt(0)
  } else {
    return "null"
  }
}
