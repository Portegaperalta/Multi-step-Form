const formContainer = document.querySelector('.multi-step-form')

// steps form icons variables
const stepFormIcon = document.querySelectorAll('.step')
const stepFormBar = document.querySelectorAll('.step-bar')

// personal information step variables
const personalInfoStep = document.querySelector('.personal-info-form')


// skill level step variables

const skillLevelStep = document.querySelector('.skill-level-form')

// challenge preference step variables
const challengePreferenceStep = document.querySelector('.challenge-preference-form')

// form summary variables
const formSummary = document.querySelector('.form-summary')

// steps buttons
const gonextBtn = document.querySelector('#nextBtn')
const goBackBtn = document.querySelector('#backBtn')

gonextBtn.addEventListener('click', () => {
  personalInfoStep.style.display = "none"
  skillLevelStep.style.display = "block"
})

goBackBtn.addEventListener('click', () => {
  personalInfoStep.style.display = "block"
  skillLevelStep.style.display = "none"
})