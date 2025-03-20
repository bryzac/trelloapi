const form = document.querySelector('#formularioTrello');
const formBtn = document.querySelector('#btn');

const inputTablero = document.querySelector('#nombreTablero');
const inputTarjeta = document.querySelector('#nombreTarjeta');

const inputTipoCuenta = document.querySelector('#tipoCuenta');
const inputUsuario = document.querySelector('#usuario');
const inputCelular = document.querySelector('#celular');
const inputCorreo = document.querySelector('#correo');
const inputFecha = document.querySelector('#fecha');
const inputCaso = document.querySelector('#caso');
const inputMonto = document.querySelector('#monto');
const inputJerarquia = document.querySelector('#jerarquia');
const inputImagenes = document.querySelector('#imagenes');

// Validations
let nombreTarjetaValidation = false;
let nombreTableroValidation = false;

let tipoCuentaValidation = false;
let usuarioValidation = false;
let celularValidation = false;
let correoValidation = false;
let fechaValidation = false;
let casoValidation = false;
let montoValidation = false;
let jerarquiaValidation = false;

const validation = (input, regexValidation) => {
    formBtn.disabled = nombreTableroValidation && nombreTarjetaValidation && tipoCuentaValidation && usuarioValidation && celularValidation && correoValidation && fechaValidation && casoValidation && montoValidation && jerarquiaValidation ? false : true;
    if (input.value === '') {
        input.classList.remove('outline-red-700', 'outline-green-700', 'outline-2', 'outline');
        input.classList.add('focus:outline-slate-700');
    } else if (regexValidation) {
        input.classList.remove('focus:outline-slate-700', 'outline-red-700');
        input.classList.add('outline-green-700', 'outline-2', 'outline');
    } else {
        input.classList.remove('focus:outline-slate-700', 'outline-green-700');
        input.classList.add('outline-red-700', 'outline-2', 'outline');
    };
};

inputTablero.addEventListener('input', e => {
    if (inputTablero.value !== '') {
        nombreTarjetaValidation = true;
        validation(inputTablero, nombreTarjetaValidation);
    } else {
        nombreTarjetaValidation = false;
        validation(inputTablero, nombreTarjetaValidation);
    }
});

inputTarjeta.addEventListener('input', e => {
    if (inputTarjeta.value !== '') {
        nombreTableroValidation = true;
        validation(inputTarjeta, nombreTableroValidation);
    } else {
        nombreTableroValidation = false;
        validation(inputTarjeta, nombreTableroValidation);
    }
});

inputTipoCuenta.addEventListener('input', e => {
    if (inputTipoCuenta.value === '') {
        tipoCuentaValidation = false;
        validation(inputTipoCuenta, tipoCuentaValidation);
    } else {
        tipoCuentaValidation = true;
        validation(inputTipoCuenta, tipoCuentaValidation);
    }
});

inputUsuario.addEventListener('input', e => {
    if (inputUsuario.value === '') {
        usuarioValidation = false;
        validation(inputUsuario, usuarioValidation);
    } else {
        usuarioValidation = true;
        validation(inputUsuario, usuarioValidation);
    }
});

inputCelular.addEventListener('input', e => {
    if (inputCelular.value === '') {
        celularValidation = false;
        validation(inputCelular, celularValidation);
    } else {
        celularValidation = true;
        validation(inputCelular, celularValidation);
    }
});

inputCorreo.addEventListener('input', e => {
    if (inputCorreo.value === '') {
        correoValidation = false;
        validation(inputCorreo, correoValidation);
    } else {
        correoValidation = true;
        validation(inputCorreo, correoValidation);
    }
});

inputFecha.addEventListener('input', e => {
    if (inputFecha.value === '') {
        fechaValidation = false;
        validation(inputFecha, fechaValidation);
    } else {
        fechaValidation = true;
        validation(inputFecha, fechaValidation);
    }
});

inputCaso.addEventListener('input', e => {
    if (inputCaso.value === '') {
        casoValidation = false;
        validation(inputCaso, casoValidation);
    } else {
        casoValidation = true;
        validation(inputCaso, casoValidation);
    }
});

inputMonto.addEventListener('input', e => {
    if (inputMonto.value === '') {
        montoValidation = false;
        validation(inputMonto, montoValidation);
    } else {
        montoValidation = true;
        validation(inputMonto, montoValidation);
    }
});

inputJerarquia.addEventListener('input', e => {
    if (inputJerarquia.value === '') {
        jerarquiaValidation = false;
        validation(inputJerarquia, jerarquiaValidation);
    } else {
        jerarquiaValidation = true;
        validation(inputJerarquia, jerarquiaValidation);
    }
});


form.addEventListener('submit', async e => {
    e.preventDefault(); 
    try {
        const nombreTablero = inputTablero.value;
        const nombreTarjeta = inputTarjeta.value;
        const tipoCuenta = inputTipoCuenta.value;
        const usuario = inputUsuario.value;
        const celular = inputCelular.value;
        const correo = inputCorreo.value;
        const fecha = inputFecha.value;
        const caso = inputCaso.value;
        const monto = inputMonto.value;
        const jerarquia = inputJerarquia.value;
        const imagenes = inputImagenes.value;
        const descripcionTarjeta = `Tipo de cuenta: ${tipoCuenta} %0d%0a Usuario: ${usuario} %0d%0a Celular: ${celular} %0d%0a Correo: ${correo} %0d%0a Fecha de contacto: ${fecha} %0d%0a Caso: ${caso} %0d%0a Monto: ${monto} %0d%0a Jerarquía: ${jerarquia} %0d%0a Link de imágenes: ${imagenes}`;

        const { data } = await axios.post('/api/trello', {nombreTablero, nombreTarjeta, descripcionTarjeta});

        alert('¡Tarjeta creada con éxito!');

        inputTarjeta.value = '';
        inputTipoCuenta.value = '';
        inputUsuario.value = '';
        inputCelular.value = '';
        inputCorreo.value = '';
        inputFecha.value = '';
        inputCaso.value = '';
        inputMonto.value = '';
        inputJerarquia.value = '';
        inputImagenes.value = '';
        formBtn.disabled = true;
        
    } catch (error) {
        console.log(error)
        alert('Error al crear la tarjeta. Por favor, inténtalo de nuevo.');
    }

});