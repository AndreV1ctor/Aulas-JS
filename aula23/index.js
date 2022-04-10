/*
&& -> as espressões precisam ser verdadeiras para ter retorno TRUE
|| -> true OR FALSE -> Pelo menos um precisa ser verdadeira para retornar TRUE
*/

console.log('André' && 'Victor'); // retorna true por ambos ser classificado como string

function falaOi () {
    return 'Oi';
}

let vaiExecutar = false;

console.log(vaiExecutar && falaOi()); // vai ser avaliado se algum valor é false

console.log(0 || false || null || "Victor" || true);

const corUsuario = 'Verde'
const corPadrao = corUsuario || 'Azul';

console.log(corPadrao); // Retornará o primeiro que der TRUE

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);