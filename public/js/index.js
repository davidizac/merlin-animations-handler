window.addEventListener('message', async event => {
  const step = event.data
  const allowedSteps = ['awaiting', 'confirming', 'exchanging', 'sending']
  if(step && typeof step == 'string' && allowedSteps.includes(step)){
    document.getElementById('body').style.visibility = 'visible'
    init(step, 'start')
    setTimeout(() => {
      init(step, 'loop')
    }, 5200)
  } else document.getElementById('body').style.visibility = 'visible'
}) 