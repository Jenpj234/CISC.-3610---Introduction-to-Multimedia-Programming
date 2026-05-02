fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const menu = document.getElementById('cyber-threats-selector');
    const card = document.getElementById('topic-card');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const prevention = document.getElementById('prevention');
    const topicImage = document.getElementById('topic-image');
    const topicIcon = document.getElementById('topic-icon');
    const topicAudio = document.getElementById('topic-audio');

    // Dynamically populate the dropdown from JSON
    data.topics.forEach((topic, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${topic.icon}  ${topic.title}`;
      menu.appendChild(option);
    });

    menu.addEventListener('change', () => {
      if (menu.value === '') {
        card.hidden = true;
        return;
      }

      const selected = data.topics[menu.value];

      title.textContent = selected.title;
      description.textContent = selected.description;
      prevention.textContent = selected.prevention;
      topicIcon.textContent = selected.icon;

      // Update image (hide if no image)
      if (selected.image) {
        topicImage.src = selected.image;
        topicImage.alt = selected.title;
        topicImage.hidden = false;
      } else {
        topicImage.hidden = true;
      }

      // Update audio (hide if no audio)
      if (selected.audio) {
        topicAudio.src = selected.audio;
        topicAudio.hidden = false;
      } else {
        topicAudio.hidden = true;
      }

      card.hidden = false;
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });

// ===== PWA Install Button =====
let deferredPrompt = null;
const installBtn = document.getElementById('install-btn');

// Browser fires this when app is installable
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();             // stop the automatic mini-bar
  deferredPrompt = e;             // save it for later
  installBtn.hidden = false;      // show our custom button
});

installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();                          // show native dialog
  const { outcome } = await deferredPrompt.userChoice;
  console.log('Install outcome:', outcome);
  deferredPrompt = null;
  installBtn.hidden = true;                         // hide after use
});

// Hide button if app is already installed
window.addEventListener('appinstalled', () => {
  installBtn.hidden = true;
  deferredPrompt = null;
  console.log('CyberSafe installed!');
});

// Register Service Worker for PWA offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('Service Worker registered:', reg.scope))
      .catch(err => console.error('Service Worker failed:', err));
  });
}