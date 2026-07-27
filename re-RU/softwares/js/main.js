function toggleDropdown(containerId) {
  const container = document.getElementById(containerId);
  const isAlreadyOpen = container.classList.contains('open');
  
  document.querySelectorAll('.md3-dropdown-container').forEach(c => c.classList.remove('open'));
  
  if (!isAlreadyOpen) {
    container.classList.add('open');
  }
}

function selectTheme(themeClass, labelText, itemEl) {
  document.documentElement.className = themeClass;
  document.getElementById('selectedThemeText').textContent = labelText;
  
  const parent = itemEl.parentElement;
  parent.querySelectorAll('.md3-menu-item').forEach(el => el.classList.remove('selected'));
  itemEl.classList.add('selected');
  document.getElementById('themeDropdownContainer').classList.remove('open');
}

function selectLanguage(langText, targetUrl, itemEl) {
  document.getElementById('selectedLangText').textContent = langText;
  
  const parent = itemEl.parentElement;
  parent.querySelectorAll('.md3-menu-item').forEach(el => el.classList.remove('selected'));
  itemEl.classList.add('selected');
  
  document.getElementById('langDropdownContainer').classList.remove('open');
  
  if (targetUrl) {
    window.location.href = targetUrl;
  }
}

document.addEventListener('click', function(event) {
  if (!event.target.closest('.md3-dropdown-container')) {
    document.querySelectorAll('.md3-dropdown-container').forEach(c => c.classList.remove('open'));
  }
});
