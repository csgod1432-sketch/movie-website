(() => {
  const search = document.querySelector('#collection-search');
  const cards = [...document.querySelectorAll('.collection-card')];
  const count = document.querySelector('#collection-count');
  const empty = document.querySelector('#collection-empty');
  const clear = document.querySelector('#clear-search');
  const normalize = text => text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const searchable = cards.map(card => normalize(card.textContent));

  function filterCollections() {
    const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    let visible = 0;
    cards.forEach((card, index) => {
      card.hidden = !words.every(word => searchable[index].includes(word));
      if (!card.hidden) visible++;
    });
    count.textContent = `${visible} collection${visible === 1 ? '' : 's'}${words.length ? ' found' : ''}`;
    empty.hidden = visible !== 0;
  }

  function openLinkedCollection() {
    const card = cards.find(item => `#${item.id}` === location.hash);
    if (!card) return;
    search.value = '';
    filterCollections();
    card.open = true;
    card.querySelector('summary').focus({preventScroll: true});
    card.scrollIntoView({block: 'start'});
  }

  search.addEventListener('input', filterCollections);
  search.addEventListener('search', filterCollections);
  clear.addEventListener('click', () => {
    search.value = '';
    filterCollections();
    search.focus();
  });
  window.addEventListener('hashchange', openLinkedCollection);
  document.querySelector('.feature-actions a').addEventListener('click', () => {
    if (location.hash === '#superhero') openLinkedCollection();
  });
  openLinkedCollection();
})();
