// contrai e expande o navbar
function navbar_toggler() {
  let navbar = document.getElementById("sidenav-w");
  
  if ( matches(navbar.classList[navbar.classList.length-1], 'sidenav-toggled') )
  {
    navbar.classList.remove('sidenav-toggled');
  }
  else {
    navbar.classList.add('sidenav-toggled');
  }
}

// checa se as classes coincidem
function matches(tag, className) {
  for(var i=0; i < tag.length; i++) {
    if(tag[i] === className[i]) {
      continue;
    } else { return 0; }
  } return 1;
}

/* Alterna o estado da navbar para fixed */
let windowHeight = window.innerHeight;
// elementos para checar quando houver o scroll
var sections_tags = [
  ['navbar'],
  [windowHeight],
  [['navbar-solid', 'shadow']]
];

// sempre que a página ser scrolled chamar a função onScroll
window.onscroll = function() {
  onScroll(
    sections_tags[0],
    sections_tags[1],
    sections_tags[2],
  );
};

// função que checa o scroll do elemento
function onScroll(tags, sizes, effects) {
  for(var i=0; i < tags.length; i++) {
    if(document.documentElement.scrollTop > sizes[i]) {
      effects[i].forEach(function(e) {
        document.getElementById(tags[i]).classList.add(e);
      });
    } else {
      effects[i].forEach(function(e) {
        document.getElementById(tags[i]).classList.remove(e);
      });
    }
  }
}