const fs = require('fs');  

  
fs.writeFile('welcome.txt', 'Hello Node', (err) => {  
    if (err) {  
        console.error('Erreur lors de la création du fichier :', err);  
        return;  
    }  
    console.log('welcome.txt créé avec succès.');  
 
    fs.readFile('welcome.txt', 'utf8', (err, data) => {  
        if (err) {  
            console.error('Erreur lors de la lecture du fichier :', err);  
            return;  
        }  
        console.log('Contenu de welcome.txt :', data);  
    });  
});