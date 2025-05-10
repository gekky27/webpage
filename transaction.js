document.querySelector('.donation-form').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    
    const response = await fetch('createTransaction.php', {
      method: 'POST',
      body: formData
    });
  
    const result = await response.json();
  
    if (result.success) {
      // Redirect user to the Tripay payment page
      window.location.href = result.data.payment_url;
    } else {
      alert("Payment failed: " + result.message);
    }
  });
  