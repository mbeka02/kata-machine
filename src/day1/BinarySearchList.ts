export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    do {
        //find mid , account for any offset
        const mid = Math.floor(low + (high - low) / 2);

        //get value at index
        const value = haystack[mid];
        //conditions
        //if the values match
        if (value === needle) {
            return true;
        } else if (value > needle) {
            high = mid;
        }
        // assumes needle>value , assign new low value which is the old midpoint+1
        else {
            low = mid + 1;
        }
    } while (low < high);

    return false;
}
