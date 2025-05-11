const submitDonation = async () => {
    const data = {
      method: "QRIS", // or BCAVA, BRI, etc.
      merchant_ref: "INV-" + Date.now(), // your unique ID
      amount: 50000, // donation amount
      customer_name: "Ratih Putra",
      customer_email: "gekmasratihap@gmail.com",
      customer_phone: "+6285738894472",
      order_items: [
        {
          sku: "DONATION",
          name: "Donation",
          price: 50000,
          quantity: 1,
          product_url: "https://webpage-kanaditya.vercel.app/",
          image_url: "https://webpage-kanaditya.vercel.app/images/banner.jpg"
        }
      ],
      callback_url: "https://webpage-kanaditya.vercel.app/callback", // if needed
      return_url: "https://webpage-kanaditya.vercel.app/thankyou", // where to redirect after payment
      signature: "", // this will be filled below
    };
  
    // 1. Create signature
    const privateKey = "mqMOV-FL8k2-NH2SA-iSmBQ-WJZTB";
    const signatureString = data.merchant_ref + data.amount + privateKey;
    const encoder = new TextEncoder();
    const signatureBuffer = await crypto.subtle.digest("SHA-256", encoder.encode(signatureString));
    const signatureHex = Array.from(new Uint8Array(signatureBuffer))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
    data.signature = signatureHex;
  
    // 2. Send to Tripay
    fetch("https://tripay.co.id/api/transaction/create", {
      method: "POST",
      headers: {
        "Authorization": "Bearer AZukf1a8ZSGA85lhrez6jkUT212fT32cA4Gwcb9U",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => {
        if (response.success) {
          window.location.href = response.data.checkout_url;
        } else {
          alert("Error creating transaction");
          console.log(response);
        }
      });
  };
  