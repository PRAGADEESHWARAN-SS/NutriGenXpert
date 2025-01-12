document.querySelector('.data-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if(name && age && gender && weight && height) {
        alert('Form submitted successfully!');
        // Further processing can be done here, e.g., sending the data to the server
    } else {
        alert('Please fill out all fields.');
    }
});
