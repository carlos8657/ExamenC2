function cambio(){
    let mOrigen = document.getElementById('monedaOrigen');
    let mDestino = document.getElementById('monedaDestino')
    
    // Moneda origen cambia a Moneda Destino
    if(mOrigen.selectedIndex == 1){
        mDestino.options[1].style.display = 'none';
        mDestino.options[2].style.display = 'block';
        mDestino.options[3].style.display = 'block';
        mDestino.options[4].style.display = 'block';
    }else if(mOrigen.selectedIndex == 2){
        mDestino.options[2].style.display = 'none';
        mDestino.options[1].style.display = 'block';
        mDestino.options[3].style.display = 'block';
        mDestino.options[4].style.display = 'block';
    }else if(mOrigen.selectedIndex == 3){
        mDestino.options[3].style.display = 'none';
        mDestino.options[2].style.display = 'block';
        mDestino.options[1].style.display = 'block';
        mDestino.options[4].style.display = 'block';
    }else if(mOrigen.selectedIndex == 4){
        mDestino.options[4].style.display = 'none';
        mDestino.options[2].style.display = 'block';
        mDestino.options[3].style.display = 'block';
        mDestino.options[1].style.display = 'block';
    }

    // Moneda destino cambia a Moneda Origen
    if(monedaDestino.selectedIndex == 1){
        monedaOrigen.options[1].style.display = 'none';
        monedaOrigen.options[2].style.display = 'block';
        monedaOrigen.options[3].style.display = 'block';
        monedaOrigen.options[4].style.display = 'block';
    }else if(monedaDestino.selectedIndex == 2){
        monedaOrigen.options[2].style.display = 'none';
        monedaOrigen.options[1].style.display = 'block';
        monedaOrigen.options[3].style.display = 'block';
        monedaOrigen.options[4].style.display = 'block';
    }else if(monedaDestino.selectedIndex == 3){
        monedaOrigen.options[3].style.display = 'none';
        monedaOrigen.options[2].style.display = 'block';
        monedaOrigen.options[1].style.display = 'block';
        monedaOrigen.options[4].style.display = 'block';
    }else if(monedaDestino.selectedIndex == 4){
        monedaOrigen.options[4].style.display = 'none';
        monedaOrigen.options[2].style.display = 'block';
        monedaOrigen.options[3].style.display = 'block';
        monedaOrigen.options[1].style.display = 'block';
    }

}

function calcular(){
    let cantidad = document.getElementById('cantidad').value;
    let monedaOrigen = document.getElementById('monedaOrigen').value;
    let monedaDestino = document.getElementById('monedaDestino').value;

    conversion(cantidad,monedaOrigen,monedaDestino);

    function conversion(cantidad, monedaOrigen, monedaDestino){
        let subtotal = 0;
        // Calcular subtotal
        if(monedaOrigen == 19.85){
            // Peso Mexicano
            subtotal =  cantidad / 19.85 * monedaDestino;
        }else if(monedaOrigen == 1){
            // Dolar Estadounidense
            subtotal = cantidad * monedaOrigen * monedaDestino;
        }else if(monedaOrigen == 1.35){
            // Dolar canadiense
            subtotal = cantidad / 1.35 * monedaDestino;
        }else if(monedaOrigen == .99){
            // Euro
            subtotal = cantidad / .99 * monedaDestino
        }

        // Calcular comision
        let totalComision = subtotal * 0.03;

        // Calcular total a pagar
        let totalPagar = subtotal + totalComision;

        // Mostrar valores
        if(document.getElementById('cantidad').value == 0 || document.getElementById('monedaOrigen').value == 0 || document.getElementById('monedaDestino').value == 0){
            alert("Falta un campo")
        }else{
            document.getElementById('subtotal').value = subtotal.toFixed(2);
            document.getElementById('totalComision').value = totalComision.toFixed(2);
            document.getElementById('totalPagar').value = totalPagar.toFixed(2);
        }
        

    }

}
