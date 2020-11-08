(() => {
  const filterItems = document.querySelectorAll('.filter__item--accordion');
  const filterButtons = document.querySelectorAll(".filter__name");

  function toggleFilter() {
    const thisItem = this.parentNode;
    filterItems.forEach(() => {
      thisItem.classList.toggle('filter__item--open');
    });
  }

  filterButtons.forEach(filterButton => filterButton.addEventListener('click', toggleFilter));
})();