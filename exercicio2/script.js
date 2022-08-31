const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(minhaString.length)

let minhaNovaString = (minhaString.trim())
console.log(minhaNovaString)

console.log(minhaNovaString.length)

minhaNovaString = minhaNovaString.replace("________","sticioso")
console.log(minhaNovaString)

