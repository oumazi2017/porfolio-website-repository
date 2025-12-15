document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav-list');
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');
  const streamEvents = document.getElementById('streamEvents');

  let streamRunning = false;
  let eventCounter = 0;

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
  const throughputCtx = document.getElementById('throughputChart').getContext('2d');
  new Chart(throughputCtx, {
    type: 'line',
    data: {
      labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
      datasets: [{
        label: 'Events/sec',
        data: [95000, 105000, 98000, 110000, 115000, 120000, 118000, 125000, 122000, 116000, 114000, 108000],
        borderColor: '#06b6d4',
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#059669'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true }
      },
      scales: {
        y: { beginAtZero: true, ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
        x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } }
      }
    }
  });

  const latencyCtx = document.getElementById('latencyChart').getContext('2d');
  new Chart(latencyCtx, {
    type: 'bar',
    data: {
      labels: ['<100ms', '100-200ms', '200-300ms', '300-500ms', '500-1000ms', '>1000ms'],
      datasets: [{
        label: 'Events',
        data: [45, 35, 12, 5, 2, 1],
        backgroundColor: ['#059669', '#10b981', '#f59e0b', '#f97316', '#ef4444', '#dc2626']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
        x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } }
      }
    }
  });

  const eventTypeCtx = document.getElementById('eventTypeChart').getContext('2d');
  new Chart(eventTypeCtx, {
    type: 'doughnut',
    data: {
      labels: ['Page Views', 'Clicks', 'Conversions', 'Errors', 'Other'],
      datasets: [{
        data: [45, 25, 15, 10, 5],
        backgroundColor: ['#06b6d4', '#059669', '#10b981', '#ef4444', '#8b5cf6']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom', labels: { color: '#94a3b8' } }
      }
    }
  });

  const errorCtx = document.getElementById('errorChart').getContext('2d');
  new Chart(errorCtx, {
    type: 'line',
    data: {
      labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
      datasets: [{
        label: 'Error Rate (%)',
        data: [0.05, 0.03, 0.02, 0.01, 0.01, 0.02, 0.01, 0.02, 0.01, 0.01, 0.02, 0.03],
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 2,
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
        x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } }
      }
    }
  });

  function generateEventType(){
    const types = ['PageView', 'Click', 'Purchase', 'AddCart', 'Search', 'Share'];
    return types[Math.floor(Math.random() * types.length)];
  }

  function generateLatency(){
    return Math.floor(Math.random() * 1000) + 50;
  }

  function addStreamEvent(){
    eventCounter++;
    const latency = generateLatency();
    const isGood = latency < 500;
    const event = document.createElement('div');
    event.className = `stream-event ${isGood ? 'event-good' : 'event-slow'}`;
    event.innerHTML = `
      <span>#${eventCounter.toString().padStart(8, '0')}</span>
      <span>${new Date().toLocaleTimeString()}</span>
      <span>${generateEventType()}</span>
      <span>${latency}ms</span>
    `;
    streamEvents.insertBefore(event, streamEvents.firstChild);
    
    if(streamEvents.children.length > 50){
      streamEvents.removeChild(streamEvents.lastChild);
    }
  }

  // Demo handlers
  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', function(){
      const action = this.getAttribute('data-action');

      if(action === 'startDemo'){
        showModal('Real-Time Data Pipeline Demo', `
          <h3>Welcome to the Interactive Demo</h3>
          <p>This platform processes <strong>10M+ events daily</strong> with sub-second latency.</p>
          <div class="result-item">
            <h4>⚡ Data Sources</h4>
            <p>Mobile apps, web events, IoT sensors → Real-time ingestion</p>
          </div>
          <div class="result-item">
            <h4>🔄 Stream Processing</h4>
            <p>Apache Kafka queues + Apache Spark for transformation & aggregation</p>
          </div>
          <div class="result-item">
            <h4>🗄️ Storage & Query</h4>
            <p>PostgreSQL + Redis for real-time analytics and reporting</p>
          </div>
          <div class="result-item">
            <h4>📊 Results</h4>
            <p>✓ Reduced latency from hours to <strong>245ms avg</strong></p>
            <p>✓ 99.97% success rate</p>
            <p>✓ Sub-second queries on 100GB+ datasets</p>
          </div>
        `);
      }

      if(action === 'startStream'){
        if(!streamRunning){
          streamRunning = true;
          streamEvents.innerHTML = '';
          eventCounter = 0;
          const interval = setInterval(function(){
            if(streamRunning){
              addStreamEvent();
            } else {
              clearInterval(interval);
            }
          }, 100);
        }
      }

      if(action === 'stopStream'){
        streamRunning = false;
      }

      if(action === 'viewMetrics'){
        showModal('Stream Metrics Summary', `
          <div class="result-item">
            <h4>📊 Current Performance</h4>
            <p><strong>Throughput:</strong> 115,741 events/sec</p>
            <p><strong>Peak (Last 24h):</strong> 125,000 events/sec</p>
            <p><strong>Total Events (Today):</strong> 8.9B</p>
          </div>
          <div class="result-item">
            <h4>⏱️ Latency Metrics</h4>
            <p><strong>Mean:</strong> 245ms</p>
            <p><strong>Median (P50):</strong> 180ms</p>
            <p><strong>P95:</strong> 650ms</p>
            <p><strong>P99:</strong> 892ms</p>
            <p><strong>Max:</strong> 2,156ms</p>
          </div>
          <div class="result-item">
            <h4>✅ Reliability</h4>
            <p><strong>Uptime:</strong> 99.997%</p>
            <p><strong>Success Rate:</strong> 99.97%</p>
            <p><strong>Failed Events:</strong> 267 out of 8.9B (0.003%)</p>
            <p><strong>Avg Recovery:</strong> 12 seconds</p>
          </div>
        `);
      }

      if(action === 'throughputAnalysis'){
        showModal('Throughput Analysis', `
          <div class="result-item">
            <h4>📈 Daily Throughput Pattern</h4>
            <p><strong>Off-Peak (00:00-06:00):</strong> 95K-105K events/sec</p>
            <p><strong>Business Hours (08:00-18:00):</strong> 115K-125K events/sec</p>
            <p><strong>Evening (18:00-22:00):</strong> 108K-122K events/sec</p>
          </div>
          <div class="result-item">
            <h4>💾 Data Volume</h4>
            <p><strong>Daily Volume:</strong> 8.9 billion events</p>
            <p><strong>Daily Size:</strong> 450 GB raw data</p>
            <p><strong>Compressed:</strong> 85 GB (81% compression)</p>
            <p><strong>Retention:</strong> 2 years on hot storage</p>
          </div>
          <div class="result-item">
            <h4>⚙️ System Capacity</h4>
            <p><strong>Kafka Brokers:</strong> 12 nodes (3 replicas)</p>
            <p><strong>Spark Executors:</strong> 48 cores distributed</p>
            <p><strong>DB Connections:</strong> 1000 concurrent</p>
            <p><strong>Headroom:</strong> 2.5x peak capacity</p>
          </div>
        `);
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
