let TecnologiaOline = [];
window.onload = cargarDesdeLocalStorage;

function cargarTecnologiaOline() {
    let codigo = document.getElementById('codigo').value;
    let producto = document.getElementById('producto').value;
    let marca = document.getElementById('marca').value;
    let precio = document.getElementById('precio').value;
    let fecha = document.getElementById('fecha').value;

    if (codigo === '' || producto === '' || marca === '' || precio === '' || fecha === '') {
        alert("Debe llenar todos los campos");
        return;
    }

    TecnologiaOline.push([codigo, producto, marca, precio, fecha]);
    guardarEnLocalStorage();
    console.log(TecnologiaOline);
    limpiarCampos();
    mostrarTecnologiaOline();
}

function mostrarTecnologiaOline() {
    let tabla = document.getElementById('TecnologiaOline');
    tabla.innerHTML = `
     <tr>
                <th width="20%">CODIGO </th>
                <th width="20%">PRODUCTO</th>
                <th width="20%">MARCA</th>
                <th width="25%">PRECIO</th>
                <th width="25%">FECHA</th>
            </tr>`;

    TecnologiaOline.forEach((producto) => {
        let fila = `
        <tr>
            <td>${producto[0]}</td>
            <td>${producto[1]}</td>
            <td>${producto[2]}</td>
            <td>${producto[3]}</td>
            <td>${producto[4]}</td>
        </tr>`;
        tabla.innerHTML += fila;
    });
}

function buscarTecnologiaOline() {
    let busquedaId = document.getElementById('identidad').value;
    if (busquedaId === '') {
        alert("Debe ingresar el número de código");
        return;
    }

    let encontrado = TecnologiaOline.find(est => est[0] === busquedaId);
    if (encontrado) {
        document.getElementById('codigo').value = encontrado[0];
        document.getElementById('producto').value = encontrado[1];
        document.getElementById('marca').value = encontrado[2];
        document.getElementById('precio').value = encontrado[3];
        document.getElementById('fecha').value = encontrado[4];
    } else {
        alert("Producto no encontrado");
    }
}

function actualizarTecnologiaOline() {
    let codigo = document.getElementById('codigo').value;
    let producto = document.getElementById('producto').value;
    let marca = document.getElementById('marca').value;
    let precio = document.getElementById('precio').value;
    let fecha = document.getElementById('fecha').value;

    if (codigo === '' || producto === '' || marca === '' || precio === '' || fecha === '') {
        alert('Debe llenar todos los campos');
        return;
    }

    let indice = TecnologiaOline.findIndex(est => est[0] === codigo);
    if (indice !== -1) {
        TecnologiaOline[indice] = [codigo, producto, marca, precio, fecha];
        guardarEnLocalStorage();
        limpiarCampos();
        mostrarTecnologiaOline();
        alert('El producto ha sido actualizado correctamente');
    } else {
        alert('Producto no encontrado');
    }
}

function eliminarTecnologiaOline() {
    let codigo = document.getElementById('codigo').value;
    if (codigo === '') {
        alert('Debe llenar el campo de código');
        return;
    }

    let indice = TecnologiaOline.findIndex(est => est[0] === codigo);
    if (indice !== -1) {
        TecnologiaOline.splice(indice, 1);
        guardarEnLocalStorage();
        limpiarCampos();
        mostrarTecnologiaOline();
        alert('El producto ha sido borrado correctamente');
    } else {
        alert('Producto no encontrado');
    }
}

function guardarEnLocalStorage() {
    localStorage.setItem("TecnologiaOline", JSON.stringify(TecnologiaOline));
}

function cargarDesdeLocalStorage() {
    let datosGuardados = localStorage.getItem("TecnologiaOline");
    if (datosGuardados) {
        TecnologiaOline = JSON.parse(datosGuardados);
        mostrarTecnologiaOline();
    }
}

function limpiarCampos() {
    document.getElementById('codigo').value = '';
    document.getElementById('producto').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('fecha').value = '';
}
