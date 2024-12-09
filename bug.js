The following code snippet demonstrates an uncommon Firebase error related to data retrieval and type handling.  It occurs when attempting to access a field in a Firebase document that exists as a different type than expected.

```javascript
db.collection('users').doc(userId).get().then(doc => {
  if (doc.exists) {
    const userAge = doc.data().age; // Assume age is a Number in the database
    console.log('User age:', userAge); // Error might occur here
    //Further processing of userAge, assuming it's always a number
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});
```
This code may throw an error if 'age' is not of type Number but instead a String or is null. 