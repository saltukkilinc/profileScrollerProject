const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];



// Iterator function
function iteratorProfile(profiles) {
  let profileIndex = 0;

  return {
    next : function () {
      return profileIndex < profiles.length ? 
      {value : profiles[profileIndex++], done:false} :
      {done : true}
    }
  }
}

const profile = iteratorProfile(data)
// console.log(profile.next().value)

// eventin fonksiyonunu ayrıca burada çalıştırıyorum ki sayfada eeventi başlatmadan profil görünsün
getProfile();


// add an click event
document.querySelector('#next').addEventListener('click', getProfile)

function getProfile() {
  const currentProfile = profile.next().value;

  if(currentProfile !== undefined){
    // add profile img
    document.querySelector('#imgDisplay').innerHTML = `
    <img src='${currentProfile.image}'></img>
    `
    // add profile
    document.querySelector('#profileDisplay').innerHTML = 
    `
    <ul class='list-group'>
      <li class='list-group-item'>${currentProfile.name}</li>
      <li class='list-group-item'>${currentProfile.age}</li>
      <li class='list-group-item'>${currentProfile.gender}</li>
      <li class='list-group-item'>${currentProfile.lookingfor}</li>
      <li class='list-group-item'>${currentProfile.location}</li>
    </ul>
    `
  } else {
    // sayfayı yeniden başlatıyor
    window.location.reload();
  }
}