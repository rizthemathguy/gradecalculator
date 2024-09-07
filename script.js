document.getElementById('gradeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get values from input fields
    const currentGrade = parseFloat(document.getElementById('currentGrade').value);
    const currentWeight = parseFloat(document.getElementById('currentWeight').value);
    const desiredGrade = parseFloat(document.getElementById('desiredGrade').value);

    // Calculate the needed grade on the remaining assignments
    const remainingWeight = 100 - currentWeight;
    const neededGrade = ((desiredGrade - (currentGrade * (currentWeight / 100))) / (remainingWeight / 100)).toFixed(2);
    
    // Display result
    const result = document.getElementById('result');
    if (neededGrade > 100) {
        result.textContent = `You need ${neededGrade}% to reach your desired grade. It's not possible to achieve this goal.`;
    } else if (neededGrade < 0) {
        result.textContent = `You have already secured your desired grade!`;
    } else {
        result.textContent = `You need ${neededGrade}% on the remaining assignments to reach your desired grade.`;
    }
});
