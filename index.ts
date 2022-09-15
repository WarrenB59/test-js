/* Petite introduction a TypeScript
Typage fort. Les erreurs sont tout
de suite affichées. C'est une surcouche
de JavaScript qui est plus stricte */

let chiffre:number;
chiffre = "voiture"

let chaine = "Hello";
chaine = 8;

const sayName = (name?:string) => {
    console.log("Bonjour" + name);
}

sayName(23);