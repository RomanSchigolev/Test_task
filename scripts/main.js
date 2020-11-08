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

  const filterMetroCheckboxes = document.querySelectorAll(".filter__input--btn-enum");
  const filterOptionCheckAny = document.querySelector("#filter__option-checkbox-any");
  filterOptionCheckAny.addEventListener("click", () => {
    filterMetroCheckboxes.forEach(filterMetroCheckbox => {
      if (filterOptionCheckAny.checked) {
        filterMetroCheckbox.disabled = true;
        filterMetroCheckbox.checked = false;
      } else {
        filterMetroCheckbox.disabled = false;
      }
    })
  })
})();