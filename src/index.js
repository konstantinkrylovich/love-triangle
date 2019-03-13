/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let length = preferences.length;
  let count = 0;
  let triangles = [];
  
  const hasTriangle = (triangles, triangle) => {
     mark: for(let i = 0; i<triangles.length; i++) {
      let curTriangle = triangles[i];
      for(j = 0; j<curTriangle.length; j++) {
        if(triangle.indexOf(curTriangle[j])==-1){
          continue mark;
        }
      }
       return true;
    }
    return false;
  }
  
  for(let i = 0; i < length; i++) {
    let triangle = [];
    let curIndex = i;
    for(let j = 0; j < 3; j++){
      if (curIndex == preferences[curIndex]-1){
        curIndex=-1;
        break;
      } else {
        curIndex = preferences[curIndex] - 1;
        triangle.push(curIndex);
      }   
    }
    if(curIndex==i && curIndex!=-1 && !hasTriangle(triangles,triangle)){
      triangles.push(triangle);
      count++;
    }  
  }
  return count;
};
