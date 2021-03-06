const leftPad = value => (value < 10 ? "0" : "") + value

export const format = timeInSeconds => {
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
  const seconds = Math.floor((timeInSeconds % 3600) % 60)
  const timeFormated = leftPad(minutes) + ":" + leftPad(seconds)
  return timeFormated
}

export const buildUrl = (asset, type = "image") => {
  return `https://res.cloudinary.com/hoflish/${type}/upload/${asset}`
}
