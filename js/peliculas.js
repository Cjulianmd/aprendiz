let nombreplanetas = Array ('tierra', 'marte' , 'jupiter')
let distancia = [5,3,'67']
const tamaño = []

console.log(nombreplanetas)
console.log(distancia)
console.log(tamaño)

for (let index = 0; index < nombreplanetas.length; index++) {
    console.log(nombreplanetas[index])
}

for (const key in object) {
    if (Object.hasOwnProperty.call( object , key)){
        const element = object[key];
    }
}

for (const key in nombreplanetas){
    console.log(nombreplanetas[key])
}

for (const iterator of object){

}
for (const planeta of nombreplanetas){
    console.log(planeta)
}

for (const key in distancia){
    if(distancia[key] == '5'){
        console.log('se encontro distancia')
    }else{
        console.log('no se encontro la distancia')
    }
}

for (const key in distancia){
    if(distancia[key] === '5'){
        console.log('se encontro distancia')
    }else{
        console.log('no se encontro la distancia')
    }
}


