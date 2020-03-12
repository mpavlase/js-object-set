import StructuredSet from "src/structuredSet"


test("empty set", () => {
  const mySet = new StructuredSet()

  expect(mySet.size).toEqual(0)
})

test("add single primitive value", () => {
  const mySet = new StructuredSet()

  mySet.add(5)

  expect(mySet.has(5)).toEqual(true)
})

test("add multiple primitive values", () => {
  const mySet = new StructuredSet()

  mySet.add(5)
  mySet.add("something")
  mySet.add(5)

  expect(mySet.size).toEqual(2)

  expect(mySet.has(5)).toEqual(true)
  expect(mySet.has("something")).toEqual(true)
})

test("add single object literal object", () => {
  const mySet = new StructuredSet()

  mySet.add({a: 7, b: 10})

  expect(mySet.size).toEqual(1)
  expect(mySet.has({a: 7, b: 10})).toEqual(true)
  expect(mySet.has({b: 10, a: 7})).toEqual(true)

  expect(mySet.has({b: 10})).toEqual(false)
})

test("add single array object value", () => {
  const mySet = new StructuredSet()

  mySet.add(new Array(42, 5, 1))

  expect(mySet.size).toEqual(1)
  expect(mySet.has(new Array(42, 5, 1))).toEqual(true)
  expect(mySet.has([42, 5, 1])).toEqual(true)
})

test("delete primitive value", () => {
  const mySet = new StructuredSet()

  mySet.add(10)

  expect(mySet.size).toEqual(1)

  mySet.delete(10)

  expect(mySet.size).toEqual(0)
})

test("delete primitive value from multiple values", () => {
  const mySet = new StructuredSet()

  mySet.add(10)
  mySet.add(100)

  expect(mySet.size).toEqual(2)

  mySet.delete(10)

  expect(mySet.size).toEqual(1)
})

test("delete single object literal value", () => {
  const mySet = new StructuredSet()

  mySet.add({a: 7, b: 10})
  mySet.add({a: 7, b: 10})

  expect(mySet.size).toEqual(1)

  mySet.delete({a: 7, b: 10})

  expect(mySet.size).toEqual(0)
})

test("delete array object value", () => {
  const mySet = new StructuredSet()

  mySet.add(new Array(42, 5, 1))
  mySet.add(new Array(42, 5, 1))

  expect(mySet.size).toEqual(1)

  mySet.delete(new Array(42, 5, 1))

  expect(mySet.size).toEqual(0)
})

test("delete array literal value", () => {
  const mySet = new StructuredSet()

  mySet.add([42, 5, 1])
  mySet.add(new Array(42, 5, 1))

  expect(mySet.size).toEqual(1)

  mySet.delete([42, 5, 1])

  expect(mySet.size).toEqual(0)
})

test("clear values", () => {
  const mySet = new StructuredSet()

  mySet.add(5)
  mySet.add("some string")
  mySet.add([1, 2, 3, 4])

  expect(mySet.size).toEqual(3)

  mySet.clear()

  expect(mySet.size).toEqual(0)
})

test("get items from keys", () => {
  const mySet = new StructuredSet()

  mySet.add(5)
  mySet.add("some string")
  mySet.add([1, 2, 3, 4])

  expect(Array.from(mySet.keys())).toEqual([5, "some string", [1, 2, 3, 4]])
})

test("get items from values", () => {
  const mySet = new StructuredSet()

  mySet.add(5)
  mySet.add("some string")
  mySet.add([1, 2, 3, 4])

  expect(Array.from(mySet.values())).toEqual([5, "some string", [1, 2, 3, 4]])
})

test("get items from entries", () => {
  const mySet = new StructuredSet()

  mySet.add(5)
  mySet.add("some string")
  mySet.add([1, 2, 3, 4])

  const expectedValue = [
    [5, 5],
    ["some string", "some string"],
    [[1, 2, 3, 4], [1, 2, 3, 4]]
  ]

  expect(Array.from(mySet.entries())).toEqual(expectedValue)
})
