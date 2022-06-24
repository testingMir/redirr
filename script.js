const db = firebase.firestore();




const obtenerr = () => db.collection('redird').get();
 window.addEventListener("DOMContentLoaded", async (e) =>{
   

   const QuerySnapshot = await obtenerr();
   


QuerySnapshot.forEach(doc => {
 
    const{redir}= doc.data();
    let mond = redir;
  
 
        window.location = mond;
     

  
   
   


});
})
