import { contemSubsequencia } from "./utils.js";
import { ANIMAIS } from "./animais.js";





export function podeAdotar(animal, brinquedosPessoa) {
  const brinquedosAnimal = ANIMAIS[animal].brinquedos;

  if (animal === "Loco") {
    return brinquedosPessoa.some(b => brinquedosAnimal.includes(b));
  }
  return contemSubsequencia(brinquedosPessoa, brinquedosAnimal);
}
