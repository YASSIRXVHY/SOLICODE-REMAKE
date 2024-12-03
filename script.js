document.addEventListener('DOMContentLoaded', function() {
    const staffNumber = document.getElementById('staff-number');
    const placesNumber = document.getElementById('places-number');
    const laureatsNumber = document.getElementById('laureats-number');
    const filieresNumber = document.getElementById('filieres-number');
  
    let staffCount = 0;
    let placesCount = 0;
    let laureatsCount = 0;
    let filieresCount = 0;
  
    function updateNumbers() {
      if (staffCount < 13) {
        staffNumber.textContent = staffCount++;
      }
      if (placesCount < 121) {
        placesNumber.textContent = placesCount++;
      }
      if (laureatsCount < 44) {
        laureatsNumber.textContent = laureatsCount++;
      }
      if (filieresCount < 3) {
        filieresNumber.textContent = filieresCount++;
      }
      requestAnimationFrame(updateNumbers);
    }
  
    updateNumbers();
    setTimeout(startAnimation, 11000);

  });