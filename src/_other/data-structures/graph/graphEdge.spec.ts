import { GraphVertex } from "./graphVertex"
import { GraphEdge } from "./graphEdge"

/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/graph/__test__/GraphEdge.test.js
 */
describe("Graph Edge", () => {
  it("should create graph edge with default weight", () => {
    const startVertex = new GraphVertex("A")
    const endVertex = new GraphVertex("B")
    const edge = new GraphEdge(startVertex, endVertex)

    expect(edge.getKey()).toBe("A_B")
    expect(edge.toString()).toBe("A_B")
    expect(edge.start).toEqual(startVertex)
    expect(edge.end).toEqual(endVertex)
    expect(edge.weight).toEqual(0)
  })

  it("should create graph edge with predefined weight", () => {
    const startVertex = new GraphVertex("A")
    const endVertex = new GraphVertex("B")
    const edge = new GraphEdge(startVertex, endVertex, 10)

    expect(edge.start).toEqual(startVertex)
    expect(edge.end).toEqual(endVertex)
    expect(edge.weight).toEqual(10)
  })

  it("should be possible to do edge reverse", () => {
    const vertexA = new GraphVertex("A")
    const vertexB = new GraphVertex("B")
    const edge = new GraphEdge(vertexA, vertexB, 10)

    expect(edge.start).toEqual(vertexA)
    expect(edge.end).toEqual(vertexB)
    expect(edge.weight).toEqual(10)

    edge.reverse()

    expect(edge.start).toEqual(vertexB)
    expect(edge.end).toEqual(vertexA)
    expect(edge.weight).toEqual(10)
  })
})