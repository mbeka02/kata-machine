export default function bubble_sort(arr: number[]): void {
    let tmp;
    const n = arr.length;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n - 1 - i; ++j) {
            //check if next num is smaller and swap if so
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
