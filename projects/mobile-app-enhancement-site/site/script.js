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

  // Demo modal helpers
  const demoModal = document.getElementById('demoModal');
  const demoBody = document.getElementById('demoBody');
  const demoClose = document.getElementById('demoClose');
  function showDemo(title, steps){
    if(!demoModal || !demoBody) { alert(title+" - " + steps.map(s=>s.text).join('\n')); return; }
    demoBody.innerHTML = `<h3>${title}</h3>` + steps.map(s=>`<div class="demo-step"><h4>${s.title}</h4><p>${s.text}</p></div>`).join('');
    demoModal.classList.add('show');
    demoModal.setAttribute('aria-hidden','false');
  }
  function closeDemo(){ if(demoModal){ demoModal.classList.remove('show'); demoModal.setAttribute('aria-hidden','true'); demoBody.innerHTML=''; }}
  if(demoClose) demoClose.addEventListener('click', closeDemo);
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeDemo(); });

  // Attach handlers for demo buttons in the features cards
  document.querySelectorAll('.card .btn[data-action]').forEach(btn => {
    btn.addEventListener('click', async function(){
      const action = this.getAttribute('data-action');
      if(action === 'passwordReset'){
        if(API.passwordReset){
          try{
            const res = await fetch(API.passwordReset, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email:'demo@example.com'})});
            const json = await res.json();
            showDemo('Password reset', [{title:'Response', text: json.message || JSON.stringify(json)}]);
          }catch(err){showDemo('Password reset', [{title:'Error', text: err.message}])}
        }else{
          // simulate password reset flow
          showDemo('Password Reset Demo', [
            {title:'Step 1', text:'User clicks "Forgot Password"'},
            {title:'Step 2', text:'System sends secure reset link to user email'},
            {title:'Step 3', text:'User sets new password and is redirected to login'}
          ]);
        }
      }
      if(action === 'orderTracking'){
        if(API.orderTracking){
          try{
            const res = await fetch(API.orderTracking+'?orderId=12345');
            const json = await res.json();
            showDemo('Order Tracking', [{title:'Status', text: json.status || JSON.stringify(json)}]);
          }catch(err){showDemo('Order Tracking', [{title:'Error', text: err.message}])}
        }else{
          showDemo('Order Tracking Demo', [
            {title:'Order Placed', text:'Your order #12345 has been placed.'},
            {title:'Shipped', text:'Your order is on the way.'},
            {title:'Delivered', text:'Order delivered. Enjoy!'}
          ]);
        }
      }
      if(action === 'notifications'){
        if(API.notifications){
          try{
            const res = await fetch(API.notifications, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({device:'demo', subscribe:true})});
            const json = await res.json();
            showDemo('Notifications', [{title:'Response', text: json.message || JSON.stringify(json)}]);
          }catch(err){showDemo('Notifications', [{title:'Error', text: err.message}])}
        }else{
          showDemo('Notifications Demo', [
            {title:'Subscribed', text:'You will receive order status updates via push notifications.'}
          ]);
        }
      }
    });
  });

});
