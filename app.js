document.getElementById("validar").addEventListener("click", function() {
    const numerosInput = document.getElementById("numeros").value.trim();
    
    // Valida si el campo está vacío
    if (numerosInput === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor ingrese una lista de números.',
            confirmButtonColor: '#007bff'
        });
        return;
    }

    const numeros = numerosInput.split(',').map(Number);

    if (numeros.some(isNaN)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor ingrese solo números separados por comas.'
        });
        document.getElementById("numeros").value = "";
        return;
    }

    // Media 
    const suma = numeros.reduce((acc, val) => acc + val, 0);
    const media = suma / numeros.length;

    // Mediana
    const sortedNumeros = numeros.slice().sort((a, b) => a - b);
    let mediana;
    if (numeros.length % 2 === 0) {
        mediana = (sortedNumeros[numeros.length / 2 - 1] + sortedNumeros[numeros.length / 2]) / 2;
    } else {
        mediana = sortedNumeros[Math.floor(numeros.length / 2)];
    }

    // Moda
    const frecuencia = {};
    let maxFrecuencia = 0;
    let moda;
    for (let i = 0; i < numeros.length; i++) {
        if (frecuencia[numeros[i]] === undefined) {
            frecuencia[numeros[i]] = 1;
        } else {
            frecuencia[numeros[i]]++;
        }
        if (frecuencia[numeros[i]] > maxFrecuencia) {
            maxFrecuencia = frecuencia[numeros[i]];
            moda = numeros[i];
        }
    }
    Swal.fire({
        title: 'Resultados',
        html: `
                    <li>Media: ${media}</li>
                    <li>Mediana: ${mediana}</li>
                    <li>Moda: ${moda}</li>
                `,
        icon: 'success',
        confirmButtonColor: '#007bff'
    });
});
