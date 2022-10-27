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
    

}
