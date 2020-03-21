const bg = null, p = 2

export const boxProps = {
  bg,
  p
}

export const boxPropsFn = (box) => ({
  ...box,
  p: box.full ? 0 : `0 ${box.p * 8}px`
})