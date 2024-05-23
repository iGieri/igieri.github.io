import data from '../data.json' assert { type: 'json' };

console.log("data MAIN ", data);

document.getElementsByClassName('profile__name')[0].innerHTML = data.name;
document.getElementsByClassName('profile__title')[0].innerHTML = data.title;
document.getElementsByClassName('profile__description')[0].innerHTML = data.description;

let links = '';
data.links.forEach(link => {
  links += `<div class="profile__links__card">
                <a class="profile__links__card-link" href="${link.url}" class="profile__link"><i class="bi bi-${link.name}" style="color: ${link.color};"></i></a>
            </div>
`;
});

document.getElementsByClassName('profile__links')[0].innerHTML = links;
