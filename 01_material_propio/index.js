
/*  Que representa ? Representa la cuenta del capital de mercado de todas las variables 
    como se maneja un activo digital
*/


/* Liquidez */
let l = 500000000

/* total de activos */
let ta = 2000000000

/* total de activos a la venta  */
let av = 1000000000

/* Porcentaje que se le hace al total de activos a la venta */
let pav = 50

/*  Minima fraccion de un activo en porcentaje  AV /  %PAV*/
let rmfa = 0.00000000005

/* Minima fraccion de un activo */
let mfa = 0.001

/* Capital de mercado inicial sin agregar o sacar un activo*/
let cm = l / (pav/100)

/* Precio de un activo */
let pa = cm / ta

/* Precio de una minima fraccion de un activo */
let pmfa = mfa * pa




let ncm = (l + pmfa) / ((pav - rmfa) / 100)
let newPav = pav - rmfa
let newL = l + pmfa
let newPa = ncm / ta
let newPmfa = newPa * mfa



let newCm2 = (newL + newPmfa) / ((newPav - rmfa) / 100)
let newPav2 = newPav - rmfa
let newL2 = newL + newPmfa
let newPa2 = newCm2 / ta
let newPmfa2 = newPa2 * mfa



let newCm3 = (newL2 + newPmfa2) / ((newPav2 - rmfa) / 100)
let newPav3 = newPav2 - rmfa
let newL3 = newL2 + newPmfa2
let newPa3 = newCm3 / ta
let newPmfa3 = newPa3 * mfa



console.log(newCm3);


 


