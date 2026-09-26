const adminApp = document.querySelector('[data-admin-app]');
const loginShell = document.querySelector('[data-admin-login]');
const loginForm = document.querySelector('[data-login-form]');
const isAuthenticated = sessionStorage.getItem('lumi-admin-auth') === 'true';

function setAdminVisibility(authenticated) {
  if (loginShell) loginShell.classList.toggle('is-hidden', authenticated);
  if (adminApp) adminApp.classList.toggle('is-hidden', !authenticated);
}

setAdminVisibility(isAuthenticated);

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(loginForm);
    const valid = data.get('username') === 'admin' && data.get('password') === 'password';
    if (!valid) {
      document.querySelector('[data-login-error]').textContent = 'That login did not match the demo credentials.';
      return;
    }
    sessionStorage.setItem('lumi-admin-auth', 'true');
    setAdminVisibility(true);
  });
}

if (adminApp) {
  const itemList = document.querySelector('[data-item-list]');
  const itemForm = document.querySelector('[data-item-form]');
  const enquiryList = document.querySelector('[data-enquiry-list]');
  let selectedId = null;

  const escapeHtml = (value) => String(value || '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
  const allItems = () => [...window.LumiStore.getServices(), ...window.LumiStore.getProducts()];
  const saveItem = (item) => {
    const items = item.type === 'product' ? window.LumiStore.getProducts() : window.LumiStore.getServices();
    const next = items.some((entry) => entry.id === item.id) ? items.map((entry) => entry.id === item.id ? { ...entry, ...item } : entry) : [...items, item];
    if (item.type === 'product') window.LumiStore.saveProducts(next);
    else window.LumiStore.saveServices(next);
  };

  function renderStats() {
    const enquiries = window.LumiStore.getEnquiries();
    document.querySelector('[data-stats]').innerHTML = `
      <div class="admin-stat"><strong>${allItems().length}</strong><span>Catalogue items</span></div>
      <div class="admin-stat"><strong>${window.LumiStore.getServices().length}</strong><span>Services & packages</span></div>
      <div class="admin-stat"><strong>${window.LumiStore.getProducts().length}</strong><span>Products</span></div>
      <div class="admin-stat"><strong>${enquiries.filter((entry) => entry.status === 'New').length}</strong><span>New enquiries</span></div>`;
  }

  function renderItems() {
    const items = allItems();
    itemList.innerHTML = items.length ? items.map((item) => `
      <button class="admin-item ${item.id === selectedId ? 'is-selected' : ''}" type="button" data-item-id="${escapeHtml(item.id)}">
        <span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.category)} · ${escapeHtml(item.type)}</small></span><b>₦${Number(item.price || 0).toLocaleString()}</b>
      </button>`).join('') : '<p class="admin-empty">No catalogue items yet.</p>';
  }

  function fillForm(item) {
    itemForm.elements.id.value = item.id;
    itemForm.elements.name.value = item.name || '';
    itemForm.elements.type.value = item.type || 'service';
    itemForm.elements.category.value = item.category || '';
    itemForm.elements.price.value = item.price || 0;
    itemForm.elements.shortDescription.value = item.shortDescription || item.description || '';
    itemForm.elements.image.value = item.image || '';
    itemForm.elements.availability.value = item.availability || item.duration || '';
    document.querySelector('[data-editor-title]').textContent = item.name;
    document.querySelector('[data-editor-note]').textContent = 'Changes are saved to this browser only.';
  }

  function renderEnquiries() {
    const enquiries = window.LumiStore.getEnquiries();
    enquiryList.innerHTML = enquiries.length ? enquiries.map((entry) => `
      <article class="admin-enquiry">
        <div class="admin-enquiry-top"><div><strong>${escapeHtml(entry.name)}</strong><span>${new Date(entry.createdAt).toLocaleString()}</span></div>
          <select data-enquiry-status="${escapeHtml(entry.id)}"><option ${entry.status === 'New' ? 'selected' : ''}>New</option><option ${entry.status === 'Contacted' ? 'selected' : ''}>Contacted</option><option ${entry.status === 'Closed' ? 'selected' : ''}>Closed</option></select>
        </div>
        <div class="admin-enquiry-meta"><span>${escapeHtml(entry.service)}</span><span>${escapeHtml(entry.date)}</span><a href="https://wa.me/${encodeURIComponent(entry.whatsapp.replace(/\D/g, ''))}" target="_blank" rel="noreferrer">${escapeHtml(entry.whatsapp)}</a></div>
        <p>${escapeHtml(entry.message)}</p>
      </article>`).join('') : '<div class="admin-empty"><h3>No enquiries yet</h3><p>New booking form submissions will appear here.</p></div>';
  }

  function render() { renderStats(); renderItems(); renderEnquiries(); }

  document.querySelectorAll('[data-tab]').forEach((tab) => tab.addEventListener('click', () => {
    document.querySelectorAll('[data-tab]').forEach((button) => button.classList.toggle('is-active', button === tab));
    document.querySelectorAll('[data-panel]').forEach((panel) => panel.classList.toggle('is-active', panel.dataset.panel === tab.dataset.tab));
  }));

  itemList.addEventListener('click', (event) => {
    const button = event.target.closest('[data-item-id]');
    if (!button) return;
    selectedId = button.dataset.itemId;
    fillForm(allItems().find((item) => item.id === selectedId));
    renderItems();
  });

  document.querySelector('[data-new-item]').addEventListener('click', () => {
    selectedId = null;
    itemForm.reset();
    itemForm.elements.id.value = `item-${Date.now()}`;
    itemForm.elements.image.value = 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80';
    document.querySelector('[data-editor-title]').textContent = 'New catalogue item';
    document.querySelector('[data-editor-note]').textContent = 'Add the item details, then save it to this browser.';
    renderItems();
  });

  itemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(itemForm);
    const type = data.get('type');
    const item = { id: data.get('id'), name: data.get('name'), type, category: data.get('category'), price: Number(data.get('price')), shortDescription: data.get('shortDescription'), description: data.get('shortDescription'), image: data.get('image'), ...(type === 'product' ? { availability: data.get('availability') || 'In stock', size: 'Standard', details: [] } : { duration: data.get('availability') || 'Flexible time', includes: [], prep: '' }) };
    saveItem(item);
    selectedId = item.id;
    render();
    fillForm(item);
  });

  document.querySelector('[data-delete-item]').addEventListener('click', () => {
    if (!selectedId || !window.confirm('Delete this catalogue item?')) return;
    const item = allItems().find((entry) => entry.id === selectedId);
    const items = item.type === 'product' ? window.LumiStore.getProducts() : window.LumiStore.getServices();
    const next = items.filter((entry) => entry.id !== selectedId);
    if (item.type === 'product') window.LumiStore.saveProducts(next); else window.LumiStore.saveServices(next);
    selectedId = null;
    itemForm.reset();
    render();
  });

  enquiryList.addEventListener('change', (event) => {
    const id = event.target.dataset.enquiryStatus;
    if (!id) return;
    const enquiries = window.LumiStore.getEnquiries().map((entry) => entry.id === id ? { ...entry, status: event.target.value } : entry);
    window.LumiStore.saveEnquiries(enquiries);
    renderStats();
  });

  document.querySelector('[data-clear-enquiries]').addEventListener('click', () => {
    if (window.confirm('Clear all saved enquiries?')) { window.LumiStore.saveEnquiries([]); render(); }
  });

  document.querySelector('[data-reset-data]').addEventListener('click', () => {
    if (window.confirm('Reset catalogue data to the original demo content?')) { window.LumiStore.reset(); selectedId = null; itemForm.reset(); render(); }
  });

  document.querySelector('[data-logout]').addEventListener('click', () => {
    sessionStorage.removeItem('lumi-admin-auth');
    setAdminVisibility(false);
  });

  render();
}
