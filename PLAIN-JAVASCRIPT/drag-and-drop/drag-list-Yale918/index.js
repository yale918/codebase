
const sortList = (name)=>{
  const listCollection = document.getElementById(name).children
  const list = Array.from(listCollection)
  
  list.forEach((element)=>{
    enableDragItem(element)
  })
}
const enableDragItem = (element)=>{
  element.setAttribute('draggable',true)
  element.ondrag = handleDrag
  element.ondragend = handleDrop
}
const handleDrag = (e)=>{
  const item = e.target
  item.classList.add('drag-sort-active');
  console.log(item.classList)
  const list = item.parentNode 
  const x = event.clientX
  const y = event.clientY

  swapItem = document.elementFromPoint(x,y)

  if(swapItem.parentNode == list ){
    swapItem = swapItem !== item.nextSibling ? swapItem:swapItem.nextSibling
    list.insertBefore(item,swapItem)
  }
}
const handleDrop = (e)=>{e.target.classList.remove('drag-sort-active');}

const start = (classname)=>{sortList(classname)}
start('drag-sort-enable')