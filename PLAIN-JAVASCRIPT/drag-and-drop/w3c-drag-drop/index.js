function start(e){
  e.dataTransfer.setData("text/plain",e.target.id)
  e
  .currentTarget
  .style
  .backgroundColor = "yellow"
  e.target.removeEventListener('dragover',()=>{})
  e.target.removeEventListener('drop',()=>{})
}
function over(e){
  e.preventDefault()
}
function drop(e){
  e.preventDefault();
  const targetId = e.dataTransfer.getData("text")
  const T = document.getElementById(targetId)
  e.target.appendChild(T)
}