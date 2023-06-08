const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser behavior
  event.preventDefault();
  
  // Store the event for later use
  const deferredPrompt = event;
  
  // Update the UI to show the install button
  butInstall.style.display = 'block';
  
  // TODO: Implement the logic for showing the install prompt when the install button is clicked
  butInstall.addEventListener('click', async () => {
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user's response
    const result = await deferredPrompt.userChoice;
    
    // Check the user's choice
    if (result.outcome === 'accepted') {
      console.log('The app was installed.');
    } else {
      console.log('The app was not installed.');
    }
    
    // Reset the deferred prompt
    deferredPrompt = null;
    
    // Hide the install button
    butInstall.style.display = 'none';
  });
});

// TODO: Add an event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('The app was installed.');
});
