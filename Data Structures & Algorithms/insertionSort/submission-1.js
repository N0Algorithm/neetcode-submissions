class Solution {
    /**
     * @param {Pair[]} pairs
     * @return {Pair[][]}
     */
    insertionSort(pairs) {
        const result = [];

        for (let i = 0; i < pairs.length; i++) {
            let j = i;
            const current = pairs[i];

            while (j > 0 && pairs[j - 1].key > current.key) {
                pairs[j] = pairs[j - 1];
                j--;
            }

            pairs[j] = current;

            // Save a copy of the current state
            result.push([...pairs]);
        }

        return result;
    }
}