import { technologyAreas } from './data.js'

export function initializeTechnology(icon) {
  const container = document.querySelector('.technology-explorer')
  const nodes = container.querySelector('#technology-nodes')
  const detail = container.querySelector('#technology-detail')
  nodes.innerHTML = technologyAreas.map(area => `
    <button type="button" class="radial-node" data-technology="${area.id}"
      style="--node-color:${area.color};--node-tint:${area.tint}"
      aria-pressed="false" aria-controls="technology-detail" aria-describedby="technology-hint">
      <span class="radial-icon">${icon(area.icon)}</span>
      <span>${area.name}</span>
    </button>
  `).join('')

  function selectArea(id) {
    const area = technologyAreas.find(item => item.id === id)
    if (!area || container.dataset.selected === id) return
    container.dataset.selected = id
    nodes.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.technology === id))
    })
    container.querySelectorAll('[data-branch]').forEach(branch => {
      branch.classList.toggle('branch-active', branch.dataset.branch === id)
      branch.style.setProperty('--branch-color', area.color)
    })
    detail.style.setProperty('--detail-color', area.color)
    detail.style.setProperty('--detail-tint', area.tint)
    // Keep the live region in place so assistive technology announces the update.
    detail.querySelector('.detail-label').textContent = 'TECHNOLOGY / ' + area.name
    detail.querySelector('h2').textContent = area.name
    detail.querySelector('p:last-child').textContent = area.description
  }

  nodes.querySelectorAll('button').forEach(button => {
    button.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'touch') selectArea(button.dataset.technology)
    })
    button.addEventListener('focus', () => selectArea(button.dataset.technology))
    button.addEventListener('click', () => selectArea(button.dataset.technology))
  })
}
