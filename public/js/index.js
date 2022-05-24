window.addEventListener('message', async event => {
  const { step,  type } = event.data
  if(step && type){
    console.log(step, type)
    init(step, type)
  }
})