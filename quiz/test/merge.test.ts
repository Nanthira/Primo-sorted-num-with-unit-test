import { merge } from "../src/merge";

describe("merge", () => {
    it("should merge three sorted arrays correctly", () => {
        const collection_1 = [1, 4, 7];
        const collection_2 = [9, 6, 3];
        const collection_3 = [2, 5, 8];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("should handle arrays of different lengths", () => {
        const collection_1 = [1, 3];
        const collection_2 = [8, 5, 2];
        const collection_3 = [4, 6, 7, 9];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("should handle empty arrays", () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([]);
    });
});
