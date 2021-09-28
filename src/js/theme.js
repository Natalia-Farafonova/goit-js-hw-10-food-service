const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = document.querySelector('#theme-switch-toggle');
const bodyTheme = document.querySelector('body');

const themeLoad = () => {
  
  
  let savedSettings = JSON.parse(localStorage.getItem('Theme')) || Theme.LIGHT;
  const toggle = savedSettings === Theme.DARK;
  bodyTheme.classList.add(savedSettings);
  themeSwitcher.checked = toggle;

};
themeLoad();

const changeTheme = () => {
  bodyTheme.classList.toggle(Theme.DARK);
  bodyTheme.classList.toggle(Theme.LIGHT);

  if (bodyTheme.classList.contains('dark-theme')) {
    localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
  }

  if (!bodyTheme.classList.contains('dark-theme')) {
    localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
  }
};

themeSwitcher.addEventListener('click', changeTheme);