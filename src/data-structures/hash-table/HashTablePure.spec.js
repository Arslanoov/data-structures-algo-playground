import { HashTable } from "./HashTablePure"
import { hash } from "./hashPure"

describe("Hash function with Vanilla JS", () => {
  it("works", () => {
    expect(hash("a", 32)).toBe(1)
    expect(hash("c", 32)).toBe(3)
    expect(hash("bc", 32)).toBe(5)
  })
})

/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/hash-table/__test__/HashTable.test.js
 */
describe("Hash Table with Vanilla JS", () => {
  test("create", () => {
    const defaultHashTable = new HashTable()
    expect(defaultHashTable.bucketsCount).toBe(32)

    const biggerHashTable = new HashTable(8)
    expect(biggerHashTable.bucketsCount).toBe(8)
  })

  test("collisions", () => {
    const hashTable = new HashTable(3)

    hashTable.set("a", "sky-old")
    hashTable.set("a", "sky")
    hashTable.set("b", "sea")
    hashTable.set("c", "earth")
    hashTable.set("d", "ocean")

    expect(hashTable.has("x")).toBe(false)
    expect(hashTable.has("b")).toBe(true)
    expect(hashTable.has("c")).toBe(true)

    expect(hashTable.get("a")).toBe("sky")
    expect(hashTable.get("d")).toBe("ocean")
    expect(hashTable.get("x")).not.toBeDefined()

    hashTable.delete("a")

    expect(hashTable.delete("not-existing")).toBeNull()

    expect(hashTable.get("a")).not.toBeDefined()
    expect(hashTable.get("d")).toBe("ocean")

    hashTable.set("d", "ocean-new")
    expect(hashTable.get("d")).toBe("ocean-new")
  })

  it("should be possible to add objects to hash table", () => {
    const hashTable = new HashTable()

    hashTable.set("objectKey", { prop1: "a", prop2: "b" })

    const object = hashTable.get("objectKey")
    expect(object).toBeDefined()
    expect(object.prop1).toBe("a")
    expect(object.prop2).toBe("b")
  })

  it("should track actual keys", () => {
    const hashTable = new HashTable(3)

    hashTable.set("a", "sky-old")
    hashTable.set("a", "sky")
    hashTable.set("b", "sea")
    hashTable.set("c", "earth")
    hashTable.set("d", "ocean")

    expect(hashTable.getKeys()).toEqual(["a", "b", "c", "d"])
    expect(hashTable.has("a")).toBe(true)
    expect(hashTable.has("x")).toBe(false)

    hashTable.delete("a")

    expect(hashTable.has("a")).toBe(false)
    expect(hashTable.has("b")).toBe(true)
    expect(hashTable.has("x")).toBe(false)
  })

  it("should get all the values", () => {
    const hashTable = new HashTable(3)

    hashTable.set("a", "alpha")
    hashTable.set("b", "beta")
    hashTable.set("c", "gamma")

    expect(hashTable.getValues()).toEqual(["gamma", "alpha", "beta"])
  })

  it("should get all the values from empty hash table", () => {
    const hashTable = new HashTable()
    expect(hashTable.getValues()).toEqual([])
  })

  it("should get all the values in case of hash collision", () => {
    const hashTable = new HashTable(3)

    hashTable.set("ab", "one")
    hashTable.set("ba", "two")
    hashTable.set("ac", "three")

    expect(hashTable.getValues()).toEqual(["one", "two", "three"])
  })
})
