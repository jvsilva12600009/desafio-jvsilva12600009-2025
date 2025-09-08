
export function temDuplicados(lista) {
  return new Set(lista).size !== lista.length;
}


export function validarItens(lista, validos) {
  return lista.every(item => validos.includes(item));
}

/*essa funcao serve para manter a ordem, porem de forma que possa intercalar*/ 
export function contemSubsequencia(lista, subseq) {
  let i = 0;
  for (const item of lista) 
    {
    if (item === subseq[i])
    {
        i++;
    } 
    if (i === subseq.length) 
    {
        return true;
    }
  }
  return false;
}

