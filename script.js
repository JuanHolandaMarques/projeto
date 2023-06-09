function changeMode() {
  const pageMode = document.getElementById('page')
  
  if(pageMode.className == "light"){
    pageMode.setAttribute('class', 'dark')
  }else{
    pageMode.setAttribute('class', 'light')
  }
    
}