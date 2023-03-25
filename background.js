chrome.tabs.onActivated.addListener(function (activeInfo) {
      chrome.tabs.get(activeInfo.tabId, function (tab) {
        let currentUrl = new URL(tab.url);
        let domain = currentUrl.hostname;
        console.log(domain);
      });
    });


document.addEventListener("DOMContentLoaded", function () {
  let user;

  document.getElementById("login-btn").addEventListener("click", function () {
    signin();
  });

  const signin = async () => {
    const test = await userfetch;
    user = test;
    console.log(user.email);
  };

  let userMail = {
    email: "jean.testing.jt@gmail.com",
  };

  const userfetch = fetch("http://localhost:3000/api/users/mail", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userMail),
  })
    .then((response) => response.json())
    .then((userData) => {
      console.log(userData);
      return userData;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
});
    
