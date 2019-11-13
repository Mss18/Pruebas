const promesa = new Promise((resolve, reject) => {
    if(true) {
        resolve('La operación ha sido correcta');
    }
    reject('La operación ha sido erronea');
});

promesa.then((response) => {
    console.log(`Response: ${response}`);
})
.catch((error) => {
    console.log(`Reject: ${error}`);
});
