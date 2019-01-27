/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let matrix = [];
    for(let i = 0; i < numCourses; i++){
          for(let j = 0; j < numCourses; j++){
              if(matrix[i] == undefined) matrix[i] = [];
              matrix[i].push(0);
          }
      }
      let indegree = [];
      for(let i = 0; i < numCourses; i++){
          indegree[i] = 0;
      }
      for(let pre of prerequisites){
        let prev = pre[1];
        let ready = pre[0];
        if(matrix[prev][ready] == 0){
             matrix[prev][ready] = 1;
             indegree[ready]++;
          }         
      }
      let queue =[];
      let count = 0;
      let res = [];
      for(let i = 0; i< numCourses; i++){
          if(indegree[i] == 0) queue.push(i);
      }
      while(queue.length !== 0){
          let course = queue.pop();
          res.push(course);
          count++;
          for(let i = 0; i < numCourses; i++){
               if(matrix[course][i] == 1){
                   indegree[i]--;
                   if(indegree[i] == 0) queue.push(i);
               }
          }
      }
      return count === numCourses?res:[];
  };