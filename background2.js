document.addEventListener('DOMContentLoaded', function () {
// Fonction qui affiche le bouton "login_btn" et cache le bouton "btn_logout"
function showLoginButton() {
    chrome.browserAction.setPopup({ popup: "popup.html" });
    chrome.browserAction.setIcon({ path: "icon.png" });
    chrome.storage.local.set({ loggedIn: false }, function() {
      chrome.runtime.sendMessage({ action: "loginStatusChanged" });
    });
  }
  
  // Fonction qui affiche le bouton "btn_logout" et cache le bouton "login_btn"
  function showLogoutButton() {
    chrome.browserAction.setPopup({ popup: "popup.html" });
    chrome.browserAction.setIcon({ path: "icon_logged_in.png" });
    chrome.storage.local.set({ loggedIn: true }, function() {
      chrome.runtime.sendMessage({ action: "loginStatusChanged" });
    });
  }
  
  // Fonction qui ouvre la fenêtre d'authentification Google
  function signIn() {
    chrome.identity.getAuthToken({ interactive: true }, function(token) {
      if (chrome.runtime.lastError) {
        // Gère l'erreur en cas de problème d'authentification
        console.error(chrome.runtime.lastError);
      } else {
        // Connexion réussie, le token est stocké dans le cache
        console.log("Token d'authentification récupéré :", token);
        showLogoutButton();
      }
    });
  }
  
  // Fonction qui supprime le jeton d'authentification et affiche le bouton "login-btn"
  function signOut() {
    chrome.identity.removeCachedAuthToken({ token: access_token }, function() {
      console.log("Déconnexion réussie.");
      showLoginButton();
    });
  }
  
  // Écoute l'événement "onClick" pour le bouton de connexion
  document.getElementById("login-btn").addEventListener("click", function() {
    signIn();
  });
  
  // Écoute l'événement "onClick" pour le bouton de déconnexion
  document.getElementById("logout-btn").addEventListener("click", function() {
    signOut();
  });
  
  // Vérifie si l'utilisateur est connecté lors du chargement de l'extension
  chrome.storage.local.get(["loggedIn"], function(result) {
    if (result.loggedIn) {
      showLogoutButton();
    } else {
      showLoginButton();
    }
  });
  
  // Écoute l'événement "loginStatusChanged" pour mettre à jour l'interface utilisateur lorsque l'état de connexion de l'utilisateur change
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "loginStatusChanged") {
      chrome.storage.local.get(["loggedIn"], function(result) {
        if (result.loggedIn) {
          showLogoutButton();
        } else {
          showLoginButton();
        }
      });
    }
  });
});