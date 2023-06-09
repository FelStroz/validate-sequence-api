let validCombinations = 0;
async function validateMatrix(letters = []) {
    let err = "";
    const regex = /^[BUDH]+$/;

    if (letters.length < 4) return `Wrong sequence. Expected at least 4 sequences, got ${letters.length}`;

    for (let i of letters) {
        if (i.length !== letters.length || !regex.test(i)) {
            err += ` |${i}|`
        }
    }

    if (err !== "") {
        err = `Sequence contains errors. Check if you type the right length of strings and the right amount of strings. Ex: 4x4 ; 5x5 ; 6x6... Wrong sequences:${err}`
    }

    return err;
}

async function validateSequence(letters = []) {
    validCombinations = 0;
    const matrix = [];

    // Creating the matrix
    for (let i = 0; i < letters.length; i++) {
        matrix.push(letters[i].split(''));
    }

    // Verifying sequence
    return !!(checkHorizontal(matrix) || checkVertical(matrix) || checkDiagonal(matrix));
}

function checkHorizontal(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        if (checkSequence(row)) {
            return true;
        }
    }
    return false;
}

function checkDiagonal(matrix) {
    const diagonals = getDiagonals(matrix);
    for (let i = 0; i < diagonals.length; i++) {
        const diagonal = diagonals[i];
        if (checkSequence(diagonal)) {
            return true;
        }
    }
    return false;
}

function checkVertical(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let columns = [];
        for (let j = 0; j < matrix.length; j++) {
            columns.push(matrix[j][i]);
        }
        if (checkSequence(columns)) {
            return true;
        }
    }
    return false;
}

function getDiagonals(matrix) {
    const diagonals = [];
    const size = matrix.length;
    for (let i = 0; i < size * 2; i++) {
        const diagonal = [];
        for (let j = size - 1; j >= 0; j--) {
            const k = i - j;
            if (k >= 0 && k < size) {
                diagonal.push(matrix[j][k]);
            }
        }
        if (diagonal.length > 3) {
            diagonals.push(diagonal);
        }
    }

    for (let i = 0; i < size; i++) {
        const diagonal = [];
        for (let j = 0; j < size - i; j++) {
            diagonal.push(matrix[j][i + j]);
        }
        if (diagonal.length > 3) {
            diagonals.push(diagonal);
        }
    }

    for (let i = 1; i < size; i++) {
        const diagonal = [];
        for (let j = 0; j < size - i; j++) {
            diagonal.push(matrix[i + j][j]);
        }
        if (diagonal.length > 3) {
            diagonals.push(diagonal);
        }
    }

    return diagonals;
}

function checkSequence(sequence) {
    let prevLetter = '';
    let count = 0;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === prevLetter) {
            count++;
            if (count === 3) {
                validCombinations++;
                if (validCombinations === 2) {
                    return true;
                }
            }
        } else {
            count = 0;
        }
        prevLetter = sequence[i];
    }
    return false;
}

module.exports = {
    validateMatrix,
    validateSequence,
    checkSequence
}