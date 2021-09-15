export const procesoPesado = ( iteraciones )=>{
    for (let i = 0; i < iteraciones; i++) {
        console.log('calculando');
    }

    return `${ iteraciones } calculos`
}