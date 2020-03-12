import _ from "lodash"

class StructuredSet extends Set {
  constructor() {
    super()
    this._map = new Map()
  }

  /**
   * Get number of all items in set.
   * @returns {number}
   */
  get size() {
    return this._map.size
  }

  /**
   * Test if the set contains given value.
   * @param value value to check existence in set
   * @returns {boolean}
   */
  has(value) {
    const existingKeys = this._map.keys()
    for (let item of existingKeys) {
      if (_.isEqual(item, value)) {
        return true
      }
    }

    return false
  }

  /**
   * Add item into set.
   * @param value - add item
   * @returns {StructuredSet}
   */
  add(value) {
    const existingKeys = this._map.keys()

    for (let item of existingKeys) {
      if (_.isEqual(item, value)) {
        return this
      }
    }

    this._map.set(value, undefined)
    return this
  }

  /**
   * Remove all items.
   */
  clear() {
    this._map.clear()
  }

  /**
   * Remove item from set.
   * @param value - item to delete
   * @returns {boolean}
   */
  delete(value) {
    const newMap = new Map()
    const oldHasValue = this.has(value)

    // copy all values except `value`
    const existingKeys = this._map.keys()

    for (let item of existingKeys) {
      if (_.isEqual(item, value)) {
        continue
      }

      newMap.set(item, undefined)
    }

    this._map = newMap
    return oldHasValue
  }

  /**
   * Returns iterator of all items as [item, item].
   * @returns {Generator<any[], void, *>}
   */
  *entries() {
    for (let item of this.keys()) {
      yield [item, item]
    }
  }

  /**
   * Get all items of set.
   * @returns {IterableIterator<unknown>}
   */
  keys() {
    return this._map.keys()
  }

  /**
   * Get all items of set.
   * @returns {IterableIterator<unknown>}
   */
  values() {
    return this.keys()
  }
}

export default StructuredSet
