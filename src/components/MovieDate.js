const pad = string => ('0' + string).slice(-2)

export default ({ date }) => {
  const obj = new Date(date)

  return [
    pad(obj.getDate()),
    pad(obj.getMonth() + 1),
    obj.getFullYear()
  ].join('/')
}
