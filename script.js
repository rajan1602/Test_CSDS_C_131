const unitPrice = 15;

    // Function to update the total price based on the quantity
    document.getElementById("quantity").addEventListener("input", function () {
        const quantity = parseInt(this.value) || 1;
        const totalPrice = unitPrice * quantity;
        document.getElementById("totalPrice").textContent = totalPrice;
    });

    // Function to show an alert when the "Buy Now" button is clicked
    function buyNow() {
        const rajan = document.querySelector("#totalPrice")
        const quantity = parseInt(document.getElementById("quantity").value) || 1;
        const totalPrice = unitPrice * quantity;
        alert(`You added ${quantity} item(s) to your cart for Rs. ${totalPrice}`);
        rajan.innerHTML = totalPrice;
    }