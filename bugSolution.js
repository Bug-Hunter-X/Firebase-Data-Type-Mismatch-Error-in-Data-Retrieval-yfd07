```javascript
db.collection('users').doc(userId).get().then(doc => {
  if (doc.exists) {
    const userData = doc.data();
    let userAge = userData.age;

    //Robust type checking and handling
    if (typeof userAge === 'string') {
        userAge = parseInt(userAge);
        if(isNaN(userAge)) {
          console.error('Invalid age format. Could not parse string to number.');
          userAge = 0;//or handle the error in some other way
        }
    } else if (userAge === null || userAge === undefined) {
      userAge = 0; // Set a default value or handle appropriately
    } else if (typeof userAge !== 'number'){
        console.error('Unexpected age data type:', typeof userAge);
        userAge = 0; //or handle the error in some other way
    }
    console.log('User age:', userAge);
    //Further processing of userAge
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});
```