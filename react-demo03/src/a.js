
const a =() => {
  return 1
}
const b = 1

const c= () => {
  const x = 100
  return () => {
    return x
  }
}

onClick={c()}