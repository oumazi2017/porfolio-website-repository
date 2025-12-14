document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav-list');
  const foodDropdown = document.getElementById('foodDropdown');
  const dropbtn = foodDropdown && foodDropdown.querySelector('.dropbtn');
  const dropmenu = foodDropdown && foodDropdown.querySelector('.dropmenu');

  if(navToggle){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  }

  if(dropbtn){
    dropbtn.addEventListener('click', function(e){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      dropmenu.style.display = expanded ? 'none' : 'block';
      e.stopPropagation();
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', function(){
    if(dropmenu) dropmenu.style.display = 'none';
    if(dropbtn) dropbtn.setAttribute('aria-expanded','false');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // collapse mobile nav
        if(navList.classList.contains('show')) navList.classList.remove('show');
        if(navToggle) navToggle.setAttribute('aria-expanded','false');
      }
    });
  });

  // API configuration (set endpoints here)
  const API = {
    passwordReset: '', // e.g. 'https://api.example.com/auth/reset'
    orderTracking: '', // e.g. 'https://api.example.com/orders/track'
    notifications: ''  // e.g. 'https://api.example.com/notify/subscribe'
  };

  // Attach handlers for demo buttons
  document.querySelectorAll('.card .btn[data-action]').forEach(btn => {
    btn.addEventListener('click', async function(){
      const action = this.getAttribute('data-action');
      if(action === 'passwordReset'){
        if(API.passwordReset){
          try{
            const res = await fetch(API.passwordReset, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email:'demo@example.com'})});
            const json = await res.json();
            alert('Password reset: ' + (json.message || JSON.stringify(json)));
          }catch(err){alert('Password reset failed: '+err.message)}
        }else{
          alert('Password reset demo (no API configured)');
        }
      }
      if(action === 'orderTracking'){
        if(API.orderTracking){
          try{
            const res = await fetch(API.orderTracking+'?orderId=12345');
            const json = await res.json();
            alert('Order status: ' + (json.status || JSON.stringify(json)));
          }catch(err){alert('Order tracking failed: '+err.message)}
        }else{
          alert('Order tracking demo (no API configured)');
        }
      }
      if(action === 'notifications'){
        if(API.notifications){
          try{
            const res = await fetch(API.notifications, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({device:'demo', subscribe:true})});
            const json = await res.json();
            alert('Subscribed: ' + (json.message || JSON.stringify(json)));
          }catch(err){alert('Subscription failed: '+err.message)}
        }else{
          alert('Notifications demo (no API configured)');
        }
      }
    });
  });

});
