const id = 'app-css'

function loadStyles () {
  const css = document.createElement('link')
  css.href = './app.css'
  css.id = id
}

if (document.getElementById(id) === null) loadStyles()
