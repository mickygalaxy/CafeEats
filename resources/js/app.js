import axios from 'axios';
import Noty from 'noty';
console.log('Hello from app js');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

// JavaScript to toggle the dropdown
const profileButton =  document.getElementById('profileButton');
var dropdown = document.getElementById('profileDropdown');
if(profileButton){
   profileButton.addEventListener('click', function () {
      var dropdown = document.getElementById('profileDropdown');
      dropdown.classList.toggle('hidden');
    });
}

// // Close the dropdown when clicking outside of it
if(dropdown){
   document.addEventListener('click', function (event) {
      if (!event.target.closest('#profileButton') && !event.target.closest('#profileDropdown')) {
          dropdown.classList.add('hidden');
      }
    });
}




//-------------------------------------------------------------------toggle effect sidebar---------------------

//-------------------------------------------------------------------------------------------------------------





//----------------------------------------------------------------------------------------------------adminafeeats dropdown button---------------------------------

// function selectOption(option) {
//   alert('Selected: ' + option);
  
 
  // Add your logic here to handle the selected option
// }

// document.getElementById('dropdownButton').addEventListener('click', function() {
//   document.getElementById('dropdown').classList.toggle('hidden');
//   console.log(document.getElementById('dropdown'));
// });


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//     document.getElementById('email1').addEventListener('input', function() {
//       const label = document.querySelector('label[for="email1"]');
//       if (this.value.length > 0) {
//         label.style.display = 'none';
//       } else {
//         label.style.display = 'block';
//       }
//     });

//     document.getElementById('password1').addEventListener('input', function() {
//         const label = document.querySelector('label[for="password1"]');
//         if (this.value.length > 0) {
//           label.style.display = 'none';
//         } else {
//           label.style.display = 'block';
//         }
//       });
      
//       document.getElementById('name1').addEventListener('input', function() {
//         const label = document.querySelector('label[for="name1"]');
//         if (this.value.length > 0) {
//           label.style.display = 'none';
//         } else {
//           label.style.display = 'block';
//         }
//       });
//       document.getElementById('mobile').addEventListener('input', function() {
//         const label = document.querySelector('label[for="mobile"]');
//         if (this.value.length > 0) {
//           label.style.display = 'none';
//         } else {
//           label.style.display = 'block';
//         }
//       });


//------------------------------------------------------------------------------------------------------------
 
let addToCart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.querySelector('#cartCounter');
const removeButtons = document.querySelectorAll('.remove-button');
// Update Cart
function updateCart(item){
    // using axios for request sand
    axios.post('/update-cart',item).then(res => {
       cartCounter.innerText = res.data.totalQty;
       new Noty({
        type:'success',
        timeout:1000,
        progressBar:false,
        text:'Item added to cart 😋'
       }).show();
    }).catch(err =>{
      new Noty({
        type:'error',
        timeout:1000,
        progressBar:false,
        text:'Something went wrong 😔',
       }).show();
    })
}

// add To cart 
addToCart.forEach((btn) => {
   btn.addEventListener('click',(e) => {
    console.log(e);
    let item = JSON.parse(btn.dataset.item);
    updateCart(item);
    console.log(item);
   })
})



//----------------------------------------------------------------

//remove product 
// removeButtons.forEach(button => {
//   button.addEventListener('click', function () {
//     const productId = button.dataset.item;
//     console.log(productId);
//     // Use Axios to send a request to your server to remove the product
//     axios.post('/remove-product', { productId })
//       .then(response => {
//         // Handle success, e.g., update the UI
//         console.log(response.data);
//       })
//       .catch(error => {
//         // Handle error
//         console.error(error);
//       });
//   });
// });


const orderPlaced = document.getElementById('order-placed');
if(orderPlaced){
orderPlaced.addEventListener('click', function() {
   // Simulate order placement (you can replace this with your actual logic)
   // For demonstration purposes, let's assume the order is placed successfully
   // You would replace this with your actual order placement logic

   // console.log('hello everyone');

   // simulateOrderPlacement();
 fetchUserWalletBalance('useId')
      .then((walletBalance) => {
        const totalPrice = req.session.cart.totalPrice; // Replace this with your actual logic to calculate the total order price
        if (user.Wallet >= totalPrice) {
          // User has enough money, proceed with order placement
          simulateOrderPlacement();
        } else {
          // User doesn't have enough money, display an error or take appropriate action
          console.error('Insufficient funds in the wallet');
        }
      })
      .catch((error) => {
        console.error('Error fetching user wallet balance:', error);
      });
  
 });
}
 function simulateOrderPlacement() {
   // Hide the empty box
   document.getElementById('empty-box').style.display = 'none';
 
   // Show the order placed notification
   document.getElementById('order-placed-notification').style.display = 'block';
 }













//-------------------------------------- admin dash bord order cards inside buttons -----------------------------

 //------------------------------------------
 // completed 

function completeOrder(button) {
  try {
    // Find the closest parent element with the class 'orderCard'
    const orderCard = button.closest('.orderCard');

    // Update the card's background color to green
    orderCard.style.backgroundColor = '#90EE90'; // Change this to the desired green color
    
    // Optionally, remove the order card from the dashboard
    // orderCard.innerHTML = '';
  } catch (error) {
    console.error('Error:', error);
  }
}

// Add an event listener to the button that triggers the approveOrder function
document.addEventListener('DOMContentLoaded', function () {
  const approveButtons = document.querySelectorAll('.approveButton');

  approveButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      completeOrder(event.currentTarget);
    });
  });
});
//---------------------------------------------------

// pending
function pendingOrder(button) {
  try {
    // Find the closest parent element with the class 'orderCard'
    const orderCard = button.closest('.orderCard');

    // Update the card's background color to green
    orderCard.style.backgroundColor = '#90CAF9'; // Change this to the desired blue color
    
    // Optionally, remove the order card from the dashboard
    // orderCard.innerHTML = '';
  } catch (error) {
    console.error('Error:', error);
  }
}

// Add an event listener to the button that triggers the approveOrder function
document.addEventListener('DOMContentLoaded', function () {
  const approveButtons = document.querySelectorAll('.Pending');

  approveButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      pendingOrder(event.currentTarget);
    });
  });
});

//--------------------------------------------------------------------
// remove order
function removeOrder(button) {
  try {
    // Find the closest parent element with the class 'orderCard'
    const orderCard = button.closest('.orderCard');

    // Optionally, update the card's background color to green
    // orderCard.classList.remove('bg-light-blue-200');
    // orderCard.classList.add('bg-green-200');
    orderCard.classList.add('bg-red-200');
    // Optionally, remove the order card from the dashboard after a delay
    setTimeout(() => {
      orderCard.parentNode.removeChild(orderCard);
    }, 1000); // Adjust the delay as needed
  } catch (error) {
    console.error('Error:', error);
  }
}

// Add an event listener to the button that triggers the removeOrder function
document.addEventListener('DOMContentLoaded', function () {
  const approveButtons = document.querySelectorAll('.Reject');

  approveButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      removeOrder(event.currentTarget);
    });
  });
});

//--------------------------------------------------- same code upper ----------
// function removeOrder(button) {
//   try {
    // Find the closest parent element with the class 'orderCard'
    // const orderCard = button.closest('.orderCard');

    // Make an asynchronous request to delete the order from the database
    // const orderId = orderCard.dataset.orderId; // Assuming you have an attribute in your HTML to store the order ID
    // fetch(`/admin/adminCafeEats/${orderId}`, {
    //   method: 'DELETE',
    // })
      // .then(response => {
      //   if (response.ok) {
      //     console.log('Order deleted successfully');
      //   } else {
      //     console.error('Failed to delete order');
      //   }
      // })
      // .catch(error => {
      //   console.error('Error:', error);
      // });

    // Optionally, update the card's background color to red
    // orderCard.classList.add('bg-red-200');

    // Optionally, remove the order card from the dashboard after a delay
//     setTimeout(() => {
//       orderCard.parentNode.removeChild(orderCard);
//     }, 1000); // Adjust the delay as needed
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// Add an event listener to the button that triggers the removeOrder function
// document.addEventListener('DOMContentLoaded', function () {
//   const rejectButtons = document.querySelectorAll('.Reject');

//   rejectButtons.forEach((button) => {
//     button.addEventListener('click', function (event) {
//       removeOrder(event.currentTarget);
//     });
//   });
// });

//---------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function () {
  var navContainer = document.getElementById('navContainer');
  var grp_btn = document.getElementById('btn-grp');
  // Function to toggle the expanded class
  function toggleHeight() {
    grp_btn.classList.toggle('expanded');
  }

  // Add click event listener to the container
  navContainer.addEventListener('click', toggleHeight);
});