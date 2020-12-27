const qSort = (arr) =>{
if(arr.length < 2){
  return arr
}else{
  
  const pilot = arr[Math.floor(Math.random() * arr.length)]
  const less = arr.filter(el=> el < pilot)
  const greater = arr.filter(el => el > pilot)
  return [...qSort(less), pilot, ...qSort(greater)]
}
}
console.log(qSort([1,4,78,32,31,76,54,66,88]))