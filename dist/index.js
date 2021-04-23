exports.intersperse = (e, r) =>
 e.reduce((e, s, t, n) => [...e, s, ...(t + 1 === n.length ? [] : [r])], [])
