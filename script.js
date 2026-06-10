// Grab the hamburger button and the menu from the HTML
const hamburger = document.getElementById('hamburger');
const menu      = document.getElementById('menu');

// Listen for a click on the hamburger icon
hamburger.addEventListener('click', () => {

  // .toggle() adds the class if absent, removes it if present
  menu.classList.toggle('open');

  // Swap the icon so the user knows the menu is open
  if (menu.classList.contains('open')) {
    hamburger.textContent = '✕';   // shows X when open
  } else {
    hamburger.textContent = '☰';   // shows ☰ when closed
  }

});
//quotes
const quotes = [
   { text: "Traveling is better than stealing and murdering someone", place: "— Nelson mandela" },
  { text: "The world is a book, and those who do not travel read only one page.", place: "— Saint Augustine" },
  { text: "Travel makes you richer — in ways money never can.", place: "— Unknown" },
  { text: "Not all those who wander are lost.", place: "— J.R.R. Tolkien" },
  { text: "Adventure is out there.", place: "— Up (2009)" },
  { text: "To travel is to live.", place: "— Hans Christian Andersen" }
];

let currentQuote = 0;

function showQuote() {
  const quoteEl = document.getElementById('quote');
  const placeEl = document.getElementById('quote-place');

  if (!quoteEl) return;

  quoteEl.style.opacity = 0;

  setTimeout(() => {
    quoteEl.textContent = quotes[currentQuote].text;
    placeEl.textContent = quotes[currentQuote].place;
    quoteEl.style.opacity = 1;

    currentQuote = (currentQuote + 1) % quotes.length;
  }, 500);
}

showQuote();
setInterval(showQuote, 4000);

//destination
const destinations = [
  { name: "Santorini", country: "Greece", desc: "Famous for its white-washed buildings, crystal blue waters and stunning sunsets.", image: "images/santorini.jpg" },
  { name: "Kyoto", country: "Japan", desc: "A city of ancient temples, traditional tea houses and breathtaking cherry blossoms.", image: "images/kyoto.jpg" },
  { name: "Machu Picchu", country: "Peru", desc: "A mysterious Incan citadel set high in the Andes mountains above the Sacred Valley.", image: "images/machu-picchu.jpg" },
  { name: "Amalfi Coast", country: "Italy", desc: "A stunning stretch of coastline with colourful villages clinging to dramatic cliffsides.", image: "images/amalfi.jpg" },
  { name: "Bali", country: "Indonesia", desc: "An island paradise known for its forested volcanic mountains, iconic rice paddies and beaches.", image: "images/bali.jpg" },
  { name: "Cape Town", country: "South Africa", desc: "A vibrant city nestled between mountains and ocean with incredible food and culture.", image: "images/capetown.jpg" },
  { name: "Patagonia", country: "Argentina", desc: "A vast wilderness at the end of the world, with glaciers, mountains and untouched nature.", image: "images/patagonia.jpg" },
];

const today = new Date();
const dayIndex = today.getDate() % destinations.length;
const daily = destinations[dayIndex];

const nameEl = document.getElementById('destination-name');
if (nameEl) {
  document.getElementById('destination-name').textContent = daily.name;
  document.getElementById('destination-country').textContent = daily.country;
  document.getElementById('destination-desc').textContent = daily.desc;
  document.getElementById('destination-img').src = daily.image;
  document.getElementById('destination-img').alt = daily.name;
}

//letterbutton
const newsletterBtn = document.getElementById('newsletter-btn');

if (newsletterBtn) {
  newsletterBtn.addEventListener('click', () => {
  const email = document.getElementById('newsletter-email').value;
  const msg = document.getElementById('newsletter-msg');
  

  if (email === '') {
    msg.style.color = 'red';
    msg.textContent = 'Please enter an email address.';
    return;
  }

  if (!email.includes('@')) {
    msg.style.color = 'red';
    msg.textContent = 'Please enter a valid email address.';
    return;
  }

  localStorage.setItem('newsletter-email', email);
  msg.style.color = '#1D9E75';
  msg.textContent = 'You are subscribed!';
  document.getElementById('newsletter-email').value = '';
});
}

//destinations page 2

function buildCards(data) {
  const container = document.getElementById('cards-container');
  if (!container) return;

  container.innerHTML = '';

  data.forEach(destination => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${destination.image}" alt="${destination.name}">
      <div class="card-info">
        <h3>${destination.name}</h3>
        <p>${destination.country}</p>
        <span>${destination.continent}</span>
      </div>
    `;

    card.addEventListener('click', () => openModal(destination));
    container.appendChild(card);
  });
}

buildCards(destinationData);

function openModal(destination) {
  document.getElementById('modal-img').src = destination.image;
  document.getElementById('modal-img').alt = destination.name;
  document.getElementById('modal-name').textContent = destination.name;
  document.getElementById('modal-country').textContent = destination.country;
  document.getElementById('modal-desc').textContent = destination.description;

  const attractionsList = document.getElementById('modal-attractions');
  attractionsList.innerHTML = '';
  destination.attractions.forEach(attraction => {
    const li = document.createElement('li');
    li.textContent = attraction;
    attractionsList.appendChild(li);
  });

  const costsBody = document.getElementById('modal-costs-body');
  costsBody.innerHTML = '';
  destination.costs.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.category}</td>
      <td>${row.accommodation}</td>
      <td>${row.food}</td>
      <td>${row.transport}</td>
    `;
    costsBody.appendChild(tr);
  });

  document.getElementById('modal-overlay').classList.add('open');
}

const modalClose = document.getElementById('modal-close');
const modalOverlay = document.getElementById('modal-overlay');

if (modalClose) {
  modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('open');
  });
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('open');
    }
  });
}



//searchinput

const searchInput = document.getElementById('search-input');
const continentFilter = document.getElementById('continent-filter');

if (searchInput && continentFilter) {

  function filterCards() {
    const searchValue = searchInput.value.toLowerCase();
    const continentValue = continentFilter.value;

    const filtered = destinationData.filter(destination => {
      const matchesSearch = destination.name.toLowerCase().includes(searchValue);
      const matchesContinent = continentValue === 'all' || destination.continent === continentValue;

      return matchesSearch && matchesContinent;
    });

    buildCards(filtered);
  }

  searchInput.addEventListener('input', filterCards);
  continentFilter.addEventListener('change', filterCards);

}


// ── PLANNER ──────────────────────────────
const plannerBtn = document.getElementById('planner-btn');

if (plannerBtn) {
  plannerBtn.addEventListener('click', () => {
    const destination = document.getElementById('planner-destination').value.trim();
    const days = parseInt(document.getElementById('planner-days').value);
    const budget = parseInt(document.getElementById('planner-budget').value);
    const error = document.getElementById('planner-error');

    if (!destination || !days || !budget) {
      error.textContent = 'Please fill in all fields.';
      return;
    }

    if (days < 1 || budget < 1) {
      error.textContent = 'Days and budget must be greater than 0.';
      return;
    }

    error.textContent = '';

    const total = days * budget;

    let status = '';
    let color = '';
    let barWidth = '';

    if (budget < 50) {
      status = 'Low Budget';
      color = '#e74c3c';
      barWidth = '25%';
    } else if (budget < 150) {
      status = 'Moderate';
      color = '#f39c12';
      barWidth = '60%';
    } else {
      status = 'Luxury';
      color = '#1D9E75';
      barWidth = '100%';
    }

    document.getElementById('result-destination').textContent = destination;
    document.getElementById('result-days').textContent = days + ' days';
    document.getElementById('result-total').textContent = '$' + total.toLocaleString();
    document.getElementById('result-status').textContent = status;
    document.getElementById('result-status').style.color = color;

    const bar = document.getElementById('progress-bar');
    bar.style.background = color;
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = barWidth; }, 100);

    document.getElementById('progress-label').textContent = status + ' — $' + budget + ' per day';
    document.getElementById('planner-results').style.display = 'block';
  });
}

// save trip
const saveBtn = document.getElementById('save-btn');

if (saveBtn) {
  saveBtn.addEventListener('click', () => {
    const trip = {
      destination: document.getElementById('result-destination').textContent,
      days: document.getElementById('result-days').textContent,
      total: document.getElementById('result-total').textContent,
      status: document.getElementById('result-status').textContent
    };

    const saved = JSON.parse(localStorage.getItem('saved-trips') || '[]');
    saved.push(trip);
    localStorage.setItem('saved-trips', JSON.stringify(saved));

    document.getElementById('save-msg').textContent = 'Trip saved!';
  });
}

// ── RANDOM TRIP ──────────────────────────
const randomBtn = document.getElementById('random-btn');

if (randomBtn) {
  randomBtn.addEventListener('click', () => {
    const travelType = document.getElementById('travel-type').value;
    const budgetRange = document.getElementById('budget-range').value;

    let filtered = destinationData;

    if (travelType !== 'all') {
      filtered = filtered.filter(d => d.type === travelType);
    }

    if (budgetRange !== 'all') {
      filtered = filtered.filter(d => d.budget === budgetRange);
    }

    if (filtered.length === 0) {
      filtered = destinationData;
    }

    const random = filtered[Math.floor(Math.random() * filtered.length)];

    document.getElementById('random-img').src = random.image;
    document.getElementById('random-img').alt = random.name;
    document.getElementById('random-name').textContent = random.name;
    document.getElementById('random-country').textContent = random.country;
    document.getElementById('random-desc').textContent = random.description;

    const result = document.getElementById('random-result');
    result.style.display = 'none';
    setTimeout(() => { result.style.display = 'block'; }, 100);

    document.getElementById('wishlist-msg').textContent = '';
  });
}

// wishlist
const wishlistBtn = document.getElementById('wishlist-btn');

if (wishlistBtn) {
  wishlistBtn.addEventListener('click', () => {
    const name = document.getElementById('random-name').textContent;
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

    if (wishlist.includes(name)) {
      document.getElementById('wishlist-msg').textContent = 'Already in your wishlist!';
      return;
    }

    wishlist.push(name);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    document.getElementById('wishlist-msg').textContent = 'Added to wishlist!';
  });
}

// ── MOOD ─────────────────────────────────
const visitedCards = document.getElementById('visited-cards');

if (visitedCards) {
  const tracker = JSON.parse(localStorage.getItem('destination-tracker') || '{}');

  destinationData.forEach(destination => {
    const card = document.createElement('div');
    card.classList.add('visited-card');

    const status = tracker[destination.name] || 'none';

    card.innerHTML = `
      <img src="${destination.image}" alt="${destination.name}">
      <div class="visited-card-info">
        <h3>${destination.name}</h3>
        <div class="visited-card-buttons">
          <button class="mark-btn ${status === 'visited' ? 'active' : ''}" data-name="${destination.name}" data-status="visited">Visited</button>
          <button class="mark-btn ${status === 'planned' ? 'active' : ''}" data-name="${destination.name}" data-status="planned">Planned</button>
        </div>
      </div>
    `;

    visitedCards.appendChild(card);
  });

  visitedCards.addEventListener('click', (e) => {
    if (e.target.classList.contains('mark-btn')) {
      const name = e.target.dataset.name;
      const status = e.target.dataset.status;
      const tracker = JSON.parse(localStorage.getItem('destination-tracker') || '{}');

      if (tracker[name] === status) {
        delete tracker[name];
        e.target.classList.remove('active');
      } else {
        tracker[name] = status;
        const siblings = e.target.parentElement.querySelectorAll('.mark-btn');
        siblings.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
      }

      localStorage.setItem('destination-tracker', JSON.stringify(tracker));
    }
  });
}

// sounds
const soundBtns = document.querySelectorAll('.sound-btn');

if (soundBtns.length > 0) {
  const sounds = {
    beach: 'https://www.soundjay.com/nature/sounds/beach-waves-1.mp3',
    forest: 'https://www.soundjay.com/nature/sounds/forest-1.mp3',
    city: 'https://www.soundjay.com/transportation/sounds/city-ambiance-1.mp3',
    rain: 'https://www.soundjay.com/nature/sounds/rain-01.mp3'
  };

  let currentAudio = null;

  soundBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const sound = btn.dataset.sound;
      const status = document.getElementById('sound-status');

      if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
        soundBtns.forEach(b => b.classList.remove('active'));

        if (btn.dataset.sound === status.dataset) {
          status.textContent = 'No sound playing';
          return;
        }
      }

      currentAudio = new Audio(sounds[sound]);
      currentAudio.loop = true;
      currentAudio.play();
      soundBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      status.textContent = 'Now playing: ' + sound.charAt(0).toUpperCase() + sound.slice(1);
    });
  });
}

// ── FEEDBACK ─────────────────────────────
const feedbackBtn = document.getElementById('feedback-btn');

if (feedbackBtn) {
  feedbackBtn.addEventListener('click', () => {
    const name = document.getElementById('feedback-name').value.trim();
    const email = document.getElementById('feedback-email').value.trim();
    const message = document.getElementById('feedback-message').value.trim();
    const error = document.getElementById('feedback-error');
    const success = document.getElementById('feedback-success');

    error.textContent = '';
    success.textContent = '';

    if (!name) {
      error.textContent = 'Please enter your name.';
      return;
    }

    if (!email || !email.includes('@')) {
      error.textContent = 'Please enter a valid email.';
      return;
    }

    if (!message) {
      error.textContent = 'Please enter a message.';
      return;
    }

    const feedback = { name, email, message };
    const saved = JSON.parse(localStorage.getItem('feedback') || '[]');
    saved.push(feedback);
    localStorage.setItem('feedback', JSON.stringify(saved));

    success.textContent = 'Thank you ' + name + '! Your feedback has been sent.';
    document.getElementById('feedback-name').value = '';
    document.getElementById('feedback-email').value = '';
    document.getElementById('feedback-message').value = '';
  });
}

// ── FAQ ──────────────────────────────────
const faqQuestions = document.querySelectorAll('.faq-question');

if (faqQuestions.length > 0) {
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.classList.contains('open');

      document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
      document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('open'));

      if (!isOpen) {
        answer.classList.add('open');
        question.classList.add('open');
      }
    });
  });
}