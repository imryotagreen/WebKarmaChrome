//Récupérer toutes les données grâce à l'email s'il existe sinon on crée l'utilisateur
let userMail = {
    "email": "test@mail.com"
  };
  fetch('http://localhost:3000/api/users/mail', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }, 
    body: JSON.stringify(userMail)
  })
    .then(response => response.json())
    .then(userData => {
      console.log(userData);
      return userData
    })
    .catch(error => {
      console.log(error);
      return error
    });

//On vérifie si le nom de domaine existe puis on récupère ses données et on le crée s'il n'existe pas
let siteDomain = {
    "domain": "www.test.fr",
    "footprint": "100"
  };
  fetch('http://localhost:3000/api/sites/url/', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }, 
    body: JSON.stringify(siteDomain)
  })
    .then(response => response.json())
    .then(siteData => {
      console.log(siteData);
      return siteData
    })
    .catch(error => {
      console.log(error);
      return error
    });

//On modifie les données pour le WebKarma de l'utilisateur
    let webkarmaUpdate = {
        "webkarma": "100",
      };
      fetch('http://localhost:3000/api/users/update/6415c297fcd0bac6e55eba7c/', {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(webkarmaUpdate)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          return data
        })
        .catch(error => {
          console.log(error);
          return error
        });