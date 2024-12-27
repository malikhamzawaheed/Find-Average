document.getElementById("checkEligibility").addEventListener("click", function () {
    const matric = parseFloat(document.getElementById("matric").value);
    const entryTest = parseFloat(document.getElementById("entryTest").value);

    if (isNaN(matric) || isNaN(entryTest) || matric < 0 || matric > 100 || entryTest < 0 || entryTest > 100) {
        alert("Please enter valid percentages between 0 and 100.");
        return;
    }

    fetch('/check-eligibility', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ matric, entryTest })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong!');
    });
});
