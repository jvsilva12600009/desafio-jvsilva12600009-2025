import { ANIMAIS } from "./animais.js";
import { temDuplicados, validarItens } from "./utils.js";
import { podeAdotar } from "./regras.js";

class AbrigoAnimais {
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const lista = [];
    const validBrinquedos = [
      ...new Set(Object.values(ANIMAIS).flatMap(a => a.brinquedos))
    ];
    const nomesAnimais = Object.keys(ANIMAIS);
    const p1 = brinquedosPessoa1
      .split(",")
      .map(b => b.trim().toUpperCase())
      .filter(Boolean);
    const p2 = brinquedosPessoa2
      .split(",")
      .map(b => b.trim().toUpperCase())
      .filter(Boolean);
    const ordem = ordemAnimais
      .split(",")
      .map(a => a.trim())
      .filter(Boolean);

    
    if (temDuplicados(p1) || temDuplicados(p2)) 
    {
      return { erro: "brinquedo inválido" };
    }

    if (!validarItens(p1, validBrinquedos) || !validarItens(p2, validBrinquedos)) 
    {
      return { erro: "brinquedo inválido" };
    }

    if (temDuplicados(ordem)) 
    {
      return { erro: "Animal inválido" };
    }

    if (!validarItens(ordem, nomesAnimais)) 
    {
      return { erro: "Animal inválido" };
    }

    let adotadosP1 = 0;
    let adotadosP2 = 0;

    for (const animal of ordem) {
      const adotaP1 = podeAdotar(animal, p1);
      const adotaP2 = podeAdotar(animal, p2);


      if (adotaP1 && adotaP2) 
        {
        
        if (adotadosP1 < 3 && adotadosP2 < 3) 
        {
          lista.push(`${animal} - abrigo`);
          continue;
        }
        if (adotadosP1 < 3 && adotadosP2 >= 3) 
        {
          lista.push(`${animal} - pessoa 1`);
          adotadosP1++;
          continue;
        }
        if (adotadosP2 < 3 && adotadosP1 >= 3) 
        {
          lista.push(`${animal} - pessoa 2`);
          adotadosP2++;
          continue;
        }
    
        lista.push(`${animal} - abrigo`);
        continue;
      }
      if (adotaP1) 
      {
        if (adotadosP1 < 3) 
        {
          lista.push(`${animal} - pessoa 1`);
          adotadosP1++;
        } 
        else 
        {
          lista.push(`${animal} - abrigo`);
        }
        continue;
      }
      if (adotaP2) {
        if (adotadosP2 < 3) 
        {
          lista.push(`${animal} - pessoa 2`);
          adotadosP2++;
        } 
        else 
        {
          lista.push(`${animal} - abrigo`);
        }
        continue;
      }

      lista.push(`${animal} - abrigo`);
    }
    lista.sort((a, b) => {
      const nomeA = a.split(" - ")[0].toLowerCase();
      const nomeB = b.split(" - ")[0].toLowerCase();
      if (nomeA < nomeB) 
        {
        return -1;
      }
      if (nomeA > nomeB)
        {
        return 1;
      } 
      return 0;
    });

    return { lista };
  }
}

export { AbrigoAnimais };
