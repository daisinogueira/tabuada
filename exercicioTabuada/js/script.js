function tabuada(){
    let num = document.getElementById('txtn')//pegar o valor da tabuada que será executada
    let tab = document.getElementById('seltab')

    if(num.value.length == 0 ) { // verificar se possui valor
        window.alert('Por favor, digite um numero!')
    }else{
        let n = Number(num.value) //salvando num como numero
        let c = 1
        tab.innerHTML = '' //limpar
        while(c <=10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }






    }

    
}