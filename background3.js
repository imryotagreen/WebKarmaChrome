
// Init / Tests
chrome.runtime.onInstalled.addListener((() => {
    console.log('hello World');
}))

// Chargement du contenus du DOM
   document.addEventListener('DOMContentLoaded', function () {
// Initialisation des variables bouton
let login_btn = document.getElementById("login-btn");
let logout_btn = document.getElementById("logout-btn");

// Envoie vers l'api pour la connexion Google
login_btn.addEventListener("click", signIn);

/*function connexionGoogle(){
    window.open("http://localhost:3000/api/google");
}*/

// Fonction qui ouvre la fenêtre d'authentification Google
function signIn() {
  chrome.identity.getAuthToken({ interactive: true }, function(token) {
    if (chrome.runtime.lastError) {
      // Gère l'erreur en cas de problème d'authentification
      console.error(chrome.runtime.lastError);
    } else {
      // Connexion réussie, le token est stocké dans le cache
      console.log("Token d'authentification récupéré :", token);
    }
  });
}

// Écoute l'événement "onClick" pour le bouton de connexion
chrome.browserAction.onClicked.addListener(function(tab) {
  signIn();
});

/*fetch('http://localhost:3000/api/google')
  .then(response => response.json())
  .then(user => console.log(user));*/

function chekauthentification() {
  chrome.identity.getAuthToken({interactive:false}, function(token) {
    if (token) {
      console.log('connecté');
    } else {
      console.log('non connecté');
    }
  });
}

chrome.identity.onChanged.addListener (function() {
  chekauthentification();
});

// Test de code pour modifier le bouton si l'utilisateur est connecté
/*function estConnecte() {
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
  window.onload = init;*/

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
});