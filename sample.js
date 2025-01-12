document.getElementById('calculator').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Example form validation (you can add more checks as needed)
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
  
    if (name && age && gender && height && weight) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all the required fields.');
    }
  });
  