import './style.css'
import './technology.css'
import './comic.css'
import { initializeTechnology } from './technology.js'
import { projects, relatedLinks } from './data.js'

const drawings = {
  bridge: '<path d="M6 57h88M12 57V28m76 29V28M12 30h76M12 30l19 27 19-27 19 27 19-27M31 57V30m19 27V30m19 27V30"/>',
  plane: '<path d="m10 49 32-6 15-28 8 1-6 27 25 9-1 7-26-3-14 23-6-1 7-25-30 3Z"/>',
  dna: '<path d="M30 9c0 25 40 25 40 50S30 84 30 98M70 9c0 25-40 25-40 50s40 25 40 39M33 20h34M40 34h20M35 51h30M33 67h34M40 82h20"/>',
  chip: '<rect x="25" y="25" width="50" height="50" rx="10"/><path d="M38 10v15m24-15v15M38 75v15m24-15v15M10 38h15M10 62h15m50-24h15M75 62h15"/><text x="50" y="58" text-anchor="middle" stroke="none" fill="currentColor" font-size="25" font-weight="700">AI</text>',
  cube: '<path d="m50 10 36 21v42L50 94 14 73V31Zm0 42L14 31m36 21 36-21M50 52v42M14 52l36 21 36-21M32 21l36 21v42M68 21 32 42v42"/>',
  spark: '<path d="m50 6 10 30 30 14-30 10-10 34-12-34L8 50l30-14Z"/><path d="m82 8 3 9 9 3-9 3-3 9-3-9-9-3 9-3Z"/>',
  bulb: '<path d="M35 66c0-13-14-16-14-34a29 29 0 0 1 58 0c0 18-14 21-14 34ZM36 77h28M41 88h18M50 64V42m-10-7 10 7 10-7"/>',
  tools: '<path d="m15 16 17 5 7 18 42 42-12 12-42-42-18-7-5-17 14 11 10-10ZM59 36 78 17l10 10-19 19M12 88l26-26"/>',
  growth: '<path d="M50 91V47M50 66C20 70 10 47 15 30c26 0 37 12 35 36ZM50 49c-2-25 14-36 37-34 2 24-12 37-37 34ZM20 91h60"/>',
  search: '<circle cx="43" cy="42" r="28"/><path d="m63 63 25 25M31 44l9 9 17-22"/>',
  github: '<path fill="currentColor" stroke="none" d="M50 8a42 42 0 0 0-13 82c2 .4 3-1 3-2v-8c-12 3-15-5-15-5-2-5-5-6-5-6-4-3 0-3 0-3 5 0 7 5 7 5 4 6 10 4 13 3 0-3 2-6 3-7-10-1-21-5-21-22 0-5 2-9 5-12-1-2-2-7 1-12 0 0 4-1 13 5a45 45 0 0 1 23 0c9-6 13-5 13-5 3 5 2 10 1 12 3 3 5 7 5 12 0 17-11 21-21 22 2 2 3 5 3 9v12c0 1 1 2 3 2A42 42 0 0 0 50 8Z"/>',
}
const icon = (name) => `<svg viewBox="0 0 100 105" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${drawings[name] || drawings.spark}</svg>`
const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character])
const tagMarkup = (tags) => `<div class="tags">${tags.map(tag => `<span>#${escapeHtml(tag)}</span>`).join('')}</div>`
const philosophies = [
  { title: '원리를 이해하는 배움', description: '기술의 원리를 정확히 이해하며 배움의 기초를 다집니다.', icon: 'bulb', label: 'UNDERSTAND', color: 'purple' },
  { title: '직접 만들며 익히는 배움', description: '직접 만들고 실습하며 배운 지식을 내 것으로 만듭니다.', icon: 'tools', label: 'MAKE & EXPERIENCE', color: 'orange' },
  { title: '삶과 연결되는 배움', description: '일상의 문제에 기술을 적용하고 창의적인 해결책을 찾습니다.', icon: 'growth', label: 'CONNECT TO LIFE', color: 'green' },
]
const research = [
  { title: 'AI·디지털 도구 활용', description: 'AI와 디지털 도구로 시간·재료의 제약을 보완하고 실습 경험을 넓힙니다.', icon: 'chip', label: 'AI & DIGITAL', color: 'blue' },
  { title: '실습·프로젝트 중심 수업', description: '직접 만들고 적용하는 프로젝트를 통해 깊이 배우는 수업을 탐구합니다.', icon: 'cube', label: 'HANDS-ON LEARNING', color: 'purple' },
  { title: '학생 주도 문제해결', description: '학생이 문제를 발견하고, 아이디어를 구상해 해결하는 배움을 연구합니다.', icon: 'search', label: 'CREATIVE EXPLORATION', color: 'pink' },
]

initializeTechnology(icon)

for (const node of document.querySelectorAll('[data-art]')) node.innerHTML = icon(node.dataset.art)
const learningScenes = ['왜 그럴까?', '직접 해보자!', '삶에 써보자!']
const researchScenes = ['경험을 더 넓게!', '만들며 배우기!', '스스로 발견!']
function comicLearningCard(item, index, sounds, chapter) {
  return `<article class="comic-panel lesson-panel ${item.color} reveal">
    <p class="comic-caption"><span>${index + 1}</span> ${chapter}</p>
    <h3 class="speech-bubble">${item.title}</h3>
    <div class="comic-scene lesson-scene" aria-hidden="true">
      <div class="lesson-object">${icon(item.icon)}</div><span class="lesson-sound">${sounds[index]}</span>
    </div>
    <p class="comic-narration">${item.description}</p>
  </article>`
}
document.querySelector('#philosophy-grid').innerHTML = philosophies.map((item, index) => comicLearningCard(item, index, learningScenes, '나의 수업 이야기')).join('')
document.querySelector('#research-grid').innerHTML = research.map((item, index) => comicLearningCard(item, index, researchScenes, '탐구 노트')).join('')
document.querySelector('#project-grid').innerHTML = projects.map((project, index) => `<article class="comic-panel project-comic ${['purple', 'orange', 'green'][index]} reveal">
  <p class="comic-caption"><span>${index + 1}</span> ${project.links.length ? '함께 탐구해요!' : '다음 이야기를 준비해요'}</p>
  <h3 class="speech-bubble">${escapeHtml(project.title)}</h3>
  <div class="comic-scene project-comic-scene" aria-hidden="true"><div class="project-comic-object">${icon(project.art)}</div><span class="lesson-sound">${['어떤 구조일까?', '입체로 상상해요!', 'To be continued…'][index]}</span></div>
  <div class="project-comic-copy"><p class="project-status ${project.links.length ? 'published' : ''}">${project.links.length ? '<span class="live-dot"></span>' : ''}${escapeHtml(project.status)}</p><p class="project-description">${escapeHtml(project.description)}</p>${tagMarkup(project.tags)}
  ${project.links.length ? `<div class="project-actions">${project.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}<span class="sr-only"> (새 탭)</span></a>`).join('')}</div>` : '<p class="project-soon">다음 컷에서 만나요! <span>✦</span></p>'}</div>
  </article>`).join('')
document.querySelector('#related-links').innerHTML = relatedLinks.map(link => `<article class="comic-panel connection-comic purple"><h3 class="speech-bubble">만든 도구와 코드는<br /><strong>여기에 모아 두었어요!</strong></h3><div class="comic-scene connection-scene" aria-hidden="true"><span class="connection-icon">${icon('github')}</span><span class="lesson-sound">함께 살펴봐요 ↗</span></div><a class="social-link" href="${link.url}" target="_blank" rel="noopener noreferrer"><span><strong>${escapeHtml(link.name)}</strong><small>${escapeHtml(link.description)}</small></span><span class="social-arrow">↗</span><span class="sr-only">새 탭에서 열기</span></a></article>`).join('')

const toggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('#navigation')
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false')
  toggle.setAttribute('aria-label', '메뉴 열기')
  navigation.classList.remove('is-open')
}
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') !== 'true'
  toggle.setAttribute('aria-expanded', String(expanded))
  toggle.setAttribute('aria-label', expanded ? '메뉴 닫기' : '메뉴 열기')
  navigation.classList.toggle('is-open', expanded)
})
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu() })
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus() } })
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu() })
const mobileQuery = window.matchMedia('(max-width: 700px)')
mobileQuery.addEventListener('change', closeMenu)

if ('IntersectionObserver' in window) {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (!motion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.remove('reveal-pending'); observer.unobserve(entry.target) } })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(element => { element.classList.add('reveal-pending'); observer.observe(element) })
    motion.addEventListener('change', () => { if (motion.matches) { document.querySelectorAll('.reveal-pending').forEach(element => element.classList.remove('reveal-pending')); observer.disconnect() } })
  }
  const sections = [...document.querySelectorAll('main section[id]')]
  const updateActive = () => {
    const current = sections.filter(section => section.getBoundingClientRect().top <= 160).at(-1) || sections[0]
    navigation.querySelectorAll('a').forEach(link => {
      const active = link.hash === `#${current.id}`
      link.classList.toggle('active', active)
      if (active) link.setAttribute('aria-current', 'location')
      else link.removeAttribute('aria-current')
    })
  }
  let scheduled = false
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(() => { updateActive(); scheduled = false }) } }, { passive: true })
  updateActive()
}
