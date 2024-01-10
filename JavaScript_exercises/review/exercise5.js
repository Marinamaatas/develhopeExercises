const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;
  
  // Modify the property `firstName` of the `person2` in "Simon".
  person2.firstName = "Simon";
  
  console.log(person1);
  console.log(person2);

  /*En este caso no estamos copiando el valor de person1 en person2 si no que ambas variables apuntar a person1,
  por lo que un cambio en cualquiera de las variables supondrá un cambio es la estructura.*/