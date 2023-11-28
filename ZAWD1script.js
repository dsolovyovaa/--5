function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function calculateB(arr, max) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = max * arr[i];
    }
    return result;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] < current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
}

function processArray() {
    let n = parseInt(document.getElementById("arrayLength").value);
    let A = [];

    for (let i = 0; i < n; i++) {
        A[i] = parseInt(prompt(`Enter element A[${i}]:`));
    }

    let maxElement = findMax(A);
    let B = calculateB(A, maxElement);

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Input Array A: [${A.join(', ')}]</p>`;
    resultDiv.innerHTML += `<p>Output Array B (before sorting): [${B.join(', ')}]</p>`;

    insertionSort(B);

    resultDiv.innerHTML += `<p>Output Array B (after sorting): [${B.join(', ')}]</p>`;
}
