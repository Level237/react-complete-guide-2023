function adds(a:number, b:number):number {
    return a + b;
  }
  
  const result = adds(2, 5);
  
  console.log(result);


  //Generics

  function insertAtBeginning<T>(array:T[],value:T){
    const newArray=[value,...array];
    return newArray;

  }

  const demoArray=[1,2,3]

  const updatedArray=insertAtBeginning(demoArray,-1)
  const stringArray=insertAtBeginning(["a","b","c"],"d")