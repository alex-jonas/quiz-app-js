const homeSite = document.querySelector('[data-js=home-site]')
const bookmarksSite = document.querySelector('[data-js=bookmark-site]')
const createSite = document.querySelector('[data-js=create-site]')
const profileSite = document.querySelector('[data-js=profile-site]')

const linkHome = document.querySelector('[data-js=link-home]')
const linkBookmarks = document.querySelector('[data-js=link-bookmarks]')
const linkCreate = document.querySelector('[data-js=link-create]')
const linkProfile = document.querySelector('[data-js=link-profile]')

linkHome.addEventListener('click', () => {
  homeSite.classList.remove('d-none')
  createSite.classList.add('d-none')
  profileSite.classList.add('d-none')
  bookmarksSite.classList.add('d-none')
})

linkBookmarks.addEventListener('click', () => {
  homeSite.classList.add('d-none')
  createSite.classList.add('d-none')
  profileSite.classList.add('d-none')
  bookmarksSite.classList.remove('d-none')
})

linkCreate.addEventListener('click', () => {
  homeSite.classList.add('d-none')
  createSite.classList.remove('d-none')
  profileSite.classList.add('d-none')
  bookmarksSite.classList.add('d-none')
})

linkProfile.addEventListener('click', () => {
  homeSite.classList.add('d-none')
  createSite.classList.add('d-none')
  profileSite.classList.remove('d-none')
  bookmarksSite.classList.add('d-none')
})

const bookmarkAnswerIcon = document.querySelector('[data-js=bookmark-icon]')

bookmarkAnswerIcon.addEventListener('click', () => {
  bookmarkAnswerIcon.classList.toggle('card__bookmark-icon--active')
})

const showAnswerButton = document.querySelector('[data-js=show-answer-button]')
const firstAnswer = document.querySelector('[data-js=first-answer]')

showAnswerButton.addEventListener('click', () => {
  firstAnswer.classList.toggle('d-none')
})
