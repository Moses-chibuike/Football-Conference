const openNav = document.querySelector('.open-btn');
const closeNav = document.querySelector('.closebtn');
const mobileLinks = document.querySelectorAll('.mobile-nav');
const speakers = document.querySelector('#featured-speakers');
const showMoreButton = document.querySelector('.see-more');
const width = window.innerWidth;
const isDesktop = width > 768;
let isShowMore = false;

openNav.addEventListener('click', () => {
  document.getElementById('menu-items').style.width = '250px';
});
closeNav.addEventListener('click', () => {
  document.getElementById('menu-items').style.width = '0';
});

mobileLinks.forEach((item) => {
  item.addEventListener('click', () => {
    document.getElementById('menu-items').style.width = '0';
  });
});

const data = [
  {
    id: 0,
    name: 'Yui Miles',
    post: 'player in liverpool',
    details:
      'demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of',
    featuredImage: './images/chef_01.png',
  },
  {
    id: 1,
    name: 'gomex seron',
    post: 'player in manchester city',
    details:
      'demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of',
    featuredImage: './images/chef_02.png',
  },
  {
    id: 2,
    name: 'lara james',
    post: 'consultant at chelsea',
    details:
      'demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of',
    featuredImage: './images/chef_03.png',
  },
  {
    id: 3,
    name: 'midel santod',
    post: 'Founder of czech football',
    details:
      'demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of',
    featuredImage: './images/chef_04.png',
  },
  {
    id: 4,
    name: 'tola obinikoro',
    post: 'coach at real maldrid',
    details:
      'demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of',
    featuredImage: './images/chef_05.png',
  },
  {
    id: 5,
    name: 'Daniel chibuike',
    post: 'Member of african association',
    details:
      'demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of',
    featuredImage: './images/chef_06.png',
  },
];

const loadSpeakers = (item) => {
  let display = ' ';
  const data = isDesktop || isShowMore ? item : !isDesktop && item.slice(0, 2);
  data.forEach(({
    name, featuredImage, post, details,
  }) => {
    display += `
      
    
        <div class="speaker-info">
            <img src=${featuredImage} alt="Chef"/>

        <ul class="speaker">
            <li><a><h3>${name}</h3> </a></li>
            <li><p class="speaker-post"> ${post}</li>
            <hr>
            <li><p>${details}</p></li>
        </ul>
        </div>`;
  });
  speakers.innerHTML = display;
};
// loadSpeakers(data);
window.addEventListener('DOMContentLoaded', () => {
  loadSpeakers(data);
});

showMoreButton.addEventListener('click', () => {
  isShowMore = !isShowMore;
  loadSpeakers(data);
  if (isShowMore) {
    showMoreButton.innerHTML = 'show less';
  } else {
    showMoreButton.innerHTML = 'show more';
  }
});
