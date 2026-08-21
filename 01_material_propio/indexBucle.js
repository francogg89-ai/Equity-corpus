/* Liquidez */
let l = 500000000;

/* Total de activos */
let ta = 2000000000;

/* Total de activos a la venta */
let av = 1000000000;

/* Porcentaje que se le hace al total de activos a la venta */
let pav = 50;

/* Minima fraccion de un activo en porcentaje  AV /  %PAV */
let rmfa = 0.00000000005;

/* Minima fraccion de un activo */
let mfa = 0.001;

/* Capital de mercado inicial sin agregar o sacar un activo */
let cm = l / (pav / 100);

/* Precio de un activo */
let pa = cm / ta;

/* Precio de una minima fraccion de un activo */
let pmfa = mfa * pa;

/* Inicialización de variables para el bucle */
let newL = l + pmfa;
let newPav = pav - rmfa;
let newCm = (l + pmfa) / ((pav - rmfa) / 100);
let newPa = newCm / ta;
let newPmfa = newPa * mfa;

/* Bucle para repetir la lógica 1000 veces */
for (let i = 0; i < 13; i++) {
    newCm = (newL + newPmfa) / ((newPav - rmfa) / 100);
    newPav = newPav - rmfa;
    newL = newL + newPmfa;
    newPa = newCm / ta;
    newPmfa = newPa * mfa;
}

console.log(newCm);