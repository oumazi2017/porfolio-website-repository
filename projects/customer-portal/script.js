document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav-list');
  const modal = document.getElementById('demoModal');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');

  // Navigation toggle
  if(navToggle){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  }

  // Close nav when clicking outside
  document.addEventListener('click', function(e){
    if(navToggle && navList && !navToggle.contains(e.target) && !navList.contains(e.target)){
      navList.classList.remove('show');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
        // Close mobile nav if open
        if(navList && navList.classList.contains('show')){
          navList.classList.remove('show');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Modal functions
  function showModal(title, content){
    if(!modal || !modalBody) return;
    modalBody.innerHTML = `<h3>${title}</h3>${content}`;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal(){
    if(!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modalBody.innerHTML = '';
  }

  // Modal close handlers
  if(modalClose){
    modalClose.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      closeModal();
    }
  });

  if(modal){
    modal.addEventListener('click', function(e){
      if(e.target === modal){
        closeModal();
      }
    });
  }

  // Demo button handlers
  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', function(){
      const action = this.getAttribute('data-action');

      if(action === 'viewDemo'){
        showModal('Customer Portal Demo', `
          <p>Welcome to the interactive demo. Select a feature below to explore:</p>
          <div class="demo-step">
            <h4>🎫 Ticket Management</h4>
            <p>Create and track support requests with priority levels and status updates.</p>
          </div>
          <div class="demo-step">
            <h4>📚 Knowledge Base</h4>
            <p>Browse hundreds of articles organized by category for instant self-service.</p>
          </div>
          <div class="demo-step">
            <h4>🤖 AI Assistant</h4>
            <p>Chat with our intelligent bot that suggests solutions before escalating to agents.</p>
          </div>
          <p><strong>Click a demo button below to see each feature in action.</strong></p>
        `);
      }

      if(action === 'createTicket'){
        showModal('Create Support Ticket Demo', `
          <div class="demo-step">
            <h4>Step 1: Enter Details</h4>
            <p>✓ Title: "Reset my password"</p>
            <p>✓ Category: Account & Access</p>
            <p>✓ Priority: Medium</p>
          </div>
          <div class="demo-step">
            <h4>Step 2: Add Description</h4>
            <p>✓ Detailed issue description with context</p>
            <p>✓ Attach relevant screenshots or files</p>
          </div>
          <div class="demo-step">
            <h4>Step 3: Submit</h4>
            <p>✓ Ticket created: #TKT-2025-001</p>
            <p>✓ Confirmation sent to email</p>
            <p>✓ Expected response time: 24 hours</p>
          </div>
        `);
      }

      if(action === 'searchKB'){
        showModal('Knowledge Base Search', `
          <p><strong>Search Query:</strong> "How to reset password?"</p>
          <div class="demo-step">
            <h4>Result 1: Password Reset Guide (⭐⭐⭐⭐⭐)</h4>
            <p>Step-by-step instructions for resetting your account password safely. 2,543 views.</p>
          </div>
          <div class="demo-step">
            <h4>Result 2: Account Security Best Practices</h4>
            <p>Learn how to protect your account with strong passwords and two-factor authentication. 1,892 views.</p>
          </div>
          <div class="demo-step">
            <h4>Result 3: Troubleshooting Login Issues</h4>
            <p>Common issues and solutions if you can't access your account. 1,234 views.</p>
          </div>
          <p style="margin-top: 20px; color: #10b981;"><strong>✓ Most users found the answer without contacting support</strong></p>
        `);
      }

      if(action === 'chatBot'){
        showModal('AI Assistant Chat', `
          <div class="demo-step">
            <h4>You</h4>
            <p>"I can't log into my account"</p>
          </div>
          <div class="demo-step">
            <h4>🤖 Assistant</h4>
            <p>I can help with that! Let me check a few things:
            <br>• Have you tried resetting your password?
            <br>• Is your account locked due to multiple failed attempts?
            <br>• Are you using the correct email address?</p>
          </div>
          <div class="demo-step">
            <h4>You</h4>
            <p>"I tried resetting but didn't receive the email"</p>
          </div>
          <div class="demo-step">
            <h4>🤖 Assistant</h4>
            <p>Check your spam folder and add support@company.com to your contacts. If you still don't receive it, I can escalate this to a human agent who can help manually. Would you like me to create a ticket?</p>
          </div>
        `);
      }

      if(action === 'viewAnalytics'){
        showModal('Analytics Dashboard', `
          <div class="demo-step">
            <h4>📊 Support Metrics (Current Month)</h4>
            <p><strong>Total Tickets:</strong> 1,247</p>
            <p><strong>Avg Resolution Time:</strong> 4.2 hours</p>
            <p><strong>Customer Satisfaction:</strong> 4.8/5.0 ⭐</p>
          </div>
          <div class="demo-step">
            <h4>📈 Trends</h4>
            <p><strong>Self-Service Resolution Rate:</strong> 72% (↑ 8% from last month)</p>
            <p><strong>AI-Assisted Solutions:</strong> 45% of all tickets</p>
            <p><strong>First Contact Resolution:</strong> 64%</p>
          </div>
          <div class="demo-step">
            <h4>🎯 Top Issues</h4>
            <p>1. Password Reset (18%)<br>2. Billing Questions (15%)<br>3. Feature Usage (12%)</p>
          </div>
          <p style="margin-top: 20px; color: #10b981;"><strong>Result: 40% reduction in support costs year-over-year</strong></p>
        `);
      }
    });
  });
});
