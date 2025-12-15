document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav-list');
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');

  // Navigation
  if(navToggle){
    navToggle.addEventListener('click', function(){
      navList.classList.toggle('show');
    });
  }

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

  // Initialize Charts
  const revenueCtx = document.getElementById('revenueChart').getContext('2d');
  new Chart(revenueCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Revenue ($K)',
        data: [150, 165, 180, 195, 210, 225, 240, 235, 250, 270, 280, 300],
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: '#2563eb'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: 'top' }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  const segmentCtx = document.getElementById('segmentChart').getContext('2d');
  new Chart(segmentCtx, {
    type: 'doughnut',
    data: {
      labels: ['VIP Customers', 'Regular', 'At-Risk', 'Inactive'],
      datasets: [{
        data: [25, 40, 20, 15],
        backgroundColor: ['#10b981', '#2563eb', '#f59e0b', '#ef4444']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });

  const productCtx = document.getElementById('productChart').getContext('2d');
  new Chart(productCtx, {
    type: 'bar',
    data: {
      labels: ['Electronics', 'Fashion', 'Home', 'Sports', 'Books', 'Other'],
      datasets: [{
        label: 'Sales ($K)',
        data: [85, 72, 65, 58, 45, 38],
        backgroundColor: ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  const funnelCtx = document.getElementById('funnelChart').getContext('2d');
  new Chart(funnelCtx, {
    type: 'bar',
    data: {
      labels: ['Visitors', 'Add Cart', 'Checkout', 'Purchase'],
      datasets: [{
        label: 'Count',
        data: [100000, 45000, 18000, 8640],
        backgroundColor: ['#e0e7ff', '#c7d2fe', '#a5b4fc', '#2563eb']
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      scales: {
        x: { beginAtZero: true }
      }
    }
  });

  // Demo button handlers
  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', function(){
      const action = this.getAttribute('data-action');

      if(action === 'startDemo'){
        showModal('E-Commerce Analytics Demo', `
          <h3>Welcome to the Interactive Demo</h3>
          <p>Explore these ML-powered features:</p>
          <div class="result-item">
            <h4>🎯 Churn Prediction</h4>
            <p>Identifies customers at risk of churning with 89% accuracy</p>
          </div>
          <div class="result-item">
            <h4>🛍️ Product Recommendations</h4>
            <p>Personalized recommendations increase AOV by 22%</p>
          </div>
          <div class="result-item">
            <h4>💰 Price Optimization</h4>
            <p>Dynamic pricing increases revenue by 18%</p>
          </div>
          <div class="result-item">
            <h4>👥 Customer Segmentation</h4>
            <p>AI-driven segments for targeted marketing</p>
          </div>
          <p><strong>Click the buttons below "ML Predictions" to see live examples!</strong></p>
        `);
      }

      if(action === 'predictChurn'){
        const results = `
          <div class="result-item">
            <h4>⚠️ Churn Risk Prediction</h4>
            <p><strong>Customer ID:</strong> CUST-45782</p>
            <p><strong>Churn Risk Score:</strong> 78% <span style="color: #ef4444;">HIGH RISK</span></p>
          </div>
          <div class="result-item">
            <h4>Risk Factors:</h4>
            <p>• No purchase in 30 days (previously weekly)</p>
            <p>• Decreased email engagement (-45%)</p>
            <p>• Price sensitivity indicator detected</p>
            <p>• Browsing competitor sites (inferred)</p>
          </div>
          <div class="result-item">
            <h4>Recommended Actions:</h4>
            <p>✓ Send personalized discount (15-20% off)</p>
            <p>✓ Highlight new products in preferred category</p>
            <p>✓ Schedule customer support outreach</p>
            <p>✓ Offer VIP loyalty tier benefits</p>
          </div>
          <p><strong>Expected outcome:</strong> 65% retention probability with intervention</p>
        `;
        document.getElementById('predictionResults').innerHTML = results;
        window.scrollTo({top: document.getElementById('predictions').offsetTop, behavior: 'smooth'});
      }

      if(action === 'recommendProducts'){
        const results = `
          <div class="result-item">
            <h4>🎁 AI Product Recommendations</h4>
            <p><strong>Customer:</strong> Sarah M. (VIP - High Value)</p>
            <p><strong>Purchase History:</strong> Electronics enthusiast, fitness products</p>
          </div>
          <div class="result-item">
            <h4>Recommended Products (89% Match Score):</h4>
            <p>1. <strong>Wireless Earbuds Pro</strong> - $149 (Confidence: 91%)</p>
            <p>2. <strong>Fitness Tracking Watch</strong> - $299 (Confidence: 87%)</p>
            <p>3. <strong>Portable Phone Charger</strong> - $45 (Confidence: 85%)</p>
            <p>4. <strong>Smart Home Hub</strong> - $199 (Confidence: 82%)</p>
          </div>
          <div class="result-item">
            <h4>Results:</h4>
            <p>✓ Conversion rate increase: +22%</p>
            <p>✓ Average order value increase: $45 per customer</p>
            <p>✓ Cross-sell effectiveness: 5x baseline</p>
          </div>
        `;
        document.getElementById('predictionResults').innerHTML = results;
        window.scrollTo({top: document.getElementById('predictions').offsetTop, behavior: 'smooth'});
      }

      if(action === 'priceOptimization'){
        const results = `
          <div class="result-item">
            <h4>💰 Dynamic Price Optimization</h4>
            <p><strong>Product:</strong> Premium Wireless Headphones</p>
            <p><strong>Base Price:</strong> $299</p>
          </div>
          <div class="result-item">
            <h4>Optimized Prices by Segment:</h4>
            <p>🔷 VIP Customers: $279 (6% discount) - Retention focus</p>
            <p>🔵 Regular Customers: $299 (Standard)</p>
            <p>🔶 Price-Sensitive: $269 (10% discount) - Conversion focus</p>
            <p>⚪ New Customers: $289 (3% discount) - Acquisition incentive</p>
          </div>
          <div class="result-item">
            <h4>Impact:</h4>
            <p>✓ Revenue increase: +18%</p>
            <p>✓ Volume increase: +12%</p>
            <p>✓ Profit margin maintained at 42%</p>
            <p>✓ Customer satisfaction: +7%</p>
          </div>
        `;
        document.getElementById('predictionResults').innerHTML = results;
        window.scrollTo({top: document.getElementById('predictions').offsetTop, behavior: 'smooth'});
      }

      if(action === 'segmentAnalysis'){
        const results = `
          <div class="result-item">
            <h4>👥 Customer Segmentation Analysis</h4>
            <p><strong>ML Model:</strong> K-Means Clustering + RFM Analysis</p>
          </div>
          <div class="result-item">
            <h4>Segment 1: VIP Customers (25%)</h4>
            <p>💎 Avg. Lifetime Value: $12,500</p>
            <p>📊 Purchase Frequency: 45/year</p>
            <p>🎯 Strategy: Premium experience, exclusive offers</p>
          </div>
          <div class="result-item">
            <h4>Segment 2: Regular Customers (40%)</h4>
            <p>⭐ Avg. Lifetime Value: $3,200</p>
            <p>📊 Purchase Frequency: 12/year</p>
            <p>🎯 Strategy: Loyalty rewards, seasonal promotions</p>
          </div>
          <div class="result-item">
            <h4>Segment 3: At-Risk Customers (20%)</h4>
            <p>⚠️ Avg. Lifetime Value: $800 (declining)</p>
            <p>📊 Purchase Frequency: 2/year</p>
            <p>🎯 Strategy: Win-back campaigns, special discounts</p>
          </div>
          <div class="result-item">
            <h4>Segment 4: Inactive (15%)</h4>
            <p>❌ No purchases in 6+ months</p>
            <p>🎯 Strategy: Re-engagement or clean-up</p>
          </div>
        `;
        document.getElementById('predictionResults').innerHTML = results;
        window.scrollTo({top: document.getElementById('predictions').offsetTop, behavior: 'smooth'});
      }
    });
  });

  function showModal(title, content){
    modalBody.innerHTML = `<h3>${title}</h3>${content}`;
    modal.classList.add('show');
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth'});
      }
    });
  });
});
