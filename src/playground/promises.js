const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
    //     resolve ({
    //         name: 'Smolka Tash',
    //         age: 39,
    //     });   
    reject('wrong!!!')     
   }, 5000);   

});


console.log ('before') ;

promise.then((data) => {
    console.log ('1', data) ;
}).catch( (error) => {
    console.log ('error:', error) ;
});

// promise.then((data) => {
//     console.log ('1', data) ;
// }, (error) => {
//     console.log ('error:', error) ;
// })


console.log ('after') 