/********************************************************
Realizar en JavaScript un programa, de nombre “merge”, que integre n ficheros en uno solo.

El programa se debe invocar de la siguiente forma

node merge.js <dest> <f1> <f2> .. <fn>

El programa debe crear un fichero <dest> concatenando los contenidos de <f1> a <fn>, siendo n un número variable de ficheros.
*********************************************************/

var fs = require('fs');
var i;

for(i = 3; i < process.argv.length; i++)
{
    //el fichero es process.argv[i];
    fs.readFile(
        process.argv[i],
        function(err, data){
            fs.appendFile(
                process.argv[2],
                data,
                function(err){
                    if(err){
                        throw err;
                    }
                    console.log('file appened');
                }
            );
        }
    );
}
