document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav-list');
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');
  const phoneScreen = document.getElementById('phoneScreen');
  const featureDesc = document.getElementById('featureDescription');

  // Navigation toggle
  if(navToggle){
    navToggle.addEventListener('click', function(){
      navList.classList.toggle('show');
    });
  }

  // Modal handling
  if(modalClose){
    modalClose.addEventListener('click', function(){
      modal.classList.remove('show');
    });
  }

  modal.addEventListener('click', function(e){
    if(e.target === modal){
      modal.classList.remove('show');
    }
  });

  // Screen navigation
  function showScreen(screenId, description) {
    document.querySelectorAll('.screen-page').forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    if(description) {
      featureDesc.innerHTML = `<p>${description}</p>`;
    }
  }

  // Event listeners for screen navigation
  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', function(){
      const action = this.getAttribute('data-action');

      if(action === 'showReset'){
        showScreen('resetScreen', '🔐 <strong>Password Reset:</strong> Securely reset your account password with email verification. Enhanced security features protect your account from unauthorized access.');
      }

      if(action === 'showTracking'){
        showScreen('trackingScreen', '📦 <strong>Order Tracking:</strong> Real-time visibility into your order status. Track shipments from processing to delivery with live location updates and carrier information.');
      }

      if(action === 'showNotifications'){
        showScreen('notificationsScreen', '🔔 <strong>Push Notifications:</strong> Stay informed with intelligent alerts about orders, promotions, and account security. Fully customizable notification preferences.');
      }

      if(action === 'showSettings'){
        showScreen('settingsScreen', '⚙️ <strong>Settings:</strong> Control your notification preferences and manage alert types. Customize which updates you receive and how frequently.');
      }

      if(action === 'goHome'){
        showScreen('homeScreen', '👋 Select a feature to explore the enhancements made to this mobile app.');
      }

      if(action === 'sendReset'){
        const resetStatus = document.getElementById('resetStatus');
        resetStatus.classList.remove('error');
        resetStatus.classList.add('success');
        resetStatus.innerHTML = '✓ Password reset link sent! Check your email (john@example.com) for further instructions.';
      }

      if(action === 'updateTracking'){
        showModal(
          '📦 Tracking Update',
          `
          <div>
            <p>Your order has progressed to the next stage!</p>
            <div style="background: #E8F5E9; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <h4 style="color: #2e7d32; margin-bottom: 10px;">✓ In Transit</h4>
              <p><strong>Current Location:</strong> Distribution Center - Memphis, TN</p>
              <p><strong>Distance:</strong> 45 miles away</p>
              <p><strong>Estimated Delivery:</strong> Tomorrow by 6 PM</p>
              <p><strong>Carrier:</strong> FedEx Ground</p>
              <p><strong>Updated:</strong> Just now</p>
            </div>
            <p>You'll receive a notification when your package is out for delivery.</p>
          </div>
          `
        );
      }

      if(action === 'clearNotifications'){
        const notificationsList = document.getElementById('notificationsList');
        notificationsList.innerHTML = '<p style="text-align: center; color: #999; padding: 40px 20px;">No new notifications</p>';
      }
    });
  });

  function showModal(title, content){
    modalBody.innerHTML = `<h3>${title}</h3>${content}`;
    modal.classList.add('show');
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href !== '#'){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior: 'smooth'});
        }
      }
    });
  });

  // Initialize with home screen
  showScreen('homeScreen', '👋 Select a feature to explore the enhancements made to this mobile app.');
});
