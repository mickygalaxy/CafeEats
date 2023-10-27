console.log('Hello from app js');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

    document.getElementById('email1').addEventListener('input', function() {
      const label = document.querySelector('label[for="email1"]');
      if (this.value.length > 0) {
        label.style.display = 'none';
      } else {
        label.style.display = 'block';
      }
    });

    document.getElementById('password1').addEventListener('input', function() {
        const label = document.querySelector('label[for="password1"]');
        if (this.value.length > 0) {
          label.style.display = 'none';
        } else {
          label.style.display = 'block';
        }
      });
      
      document.getElementById('name1').addEventListener('input', function() {
        const label = document.querySelector('label[for="name1"]');
        if (this.value.length > 0) {
          label.style.display = 'none';
        } else {
          label.style.display = 'block';
        }
      });
      document.getElementById('mobile').addEventListener('input', function() {
        const label = document.querySelector('label[for="mobile"]');
        if (this.value.length > 0) {
          label.style.display = 'none';
        } else {
          label.style.display = 'block';
        }
      });