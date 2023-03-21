

// Init / Tests
chrome.runtime.onInstalled.addListener((() => {
    console.log('hello');
}))

// Event click btn -- LOGIN GOOGLE

   document.addEventListener('DOMContentLoaded', function () {
    /*let btn = document.getElementById('login-btn');
    btn.addEventListener('click', function() {
        chrome.tabs.create({ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }, function(tab) {
            chrome.tabs.executeScript(tab.id, { code: "alert(document.title);" });
        });
    });*/
});

// Envoie vers l'api pour la connexion Google
document.getElementById("login-btn").addEventListener("click", myFunction);

function myFunction(){
    window.open("http://localhost:3000/google");
}

// Test de code pour modifier le bouton si l'utilisateur est connecté
function estConnecte() {
    return auth2.currentUser.get().isSignedIn();
  }
  
  // Masquer le bouton de connexion si l'utilisateur est déjà connecté
  function masquerBoutonConnexion() {
    var bouton = document.getElementById('login-btn');
    if (estConnecte()) {
      bouton.style.display = 'none';
    } else {
      bouton.style.display = 'block';
    }
  }
  
  // Initialisation l'API Google Sign-In
  function init() {
    gapi.load('auth2', function() {
      auth2 = gapi.auth2.init({
        client_id: '737094244190-5ht7pthr3emehj5u7q1fqctfbm9p6mjd.apps.googleusercontent.com'
      });
      masquerBoutonConnexion();
    });
  }
  
  // Appeler la fonction init() lorsque la page est chargée
  window.onload = init;

// Event Tabs -- WebKarma Score
chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
        let currentUrl = new URL(tab.url);
        let domain = currentUrl.hostname;
        console.log(domain);
/*
        chrome.notifications.create({
            type: 'basic',
            title: 'Nouvelle URL détectée',
            message: `Domaine : ${domain}`,
            iconUrl: "assets/icons/logo48.png"
        });
*/
    });
});