import { humanizeList } from "../index";

describe("humanizeList", () => {
  it("deve ser retornado o elemento da lista quando for conjuncao", () => {
    const resultado = humanizeList([1], 'conjunction')
    expect(humanizeList(resultado)).toBe('1');
  });

  it("deve ser retornado o elemento da lista quando for disjuncao", () => {
    const resultado = humanizeList([1], 'disjunction')
    expect(humanizeList(resultado)).toBe('1');
  });

  it("quando for um array de 3 itens deve ser retornado os elementos com o conectivo and quando for conjuncao", () => {
    const resultado = humanizeList([1, 2, 3], 'conjunction')
    expect(resultado).toBe("1, 2 and 3")
  })

  it("quando for um array de 3 itens deve ser retornado os elementos com o conectivo or quando for disjuncao", () => {
    const resultado = humanizeList([1, 2, 3], 'disjunction')
    expect(resultado).toBe("1, 2 or 3")
  })

  it("quando for um array de 2 itens deve ser retornado os elementos com o conectivo and quando for conjuncao", () => {
    const resultado = humanizeList([1, 2], 'conjunction')
    expect(resultado).toBe("1 and 2")
  })

  it("quando for um array de 2 itens deve ser retornado os elementos com o conectivo or quando for disjuncao", () => {
    const resultado = humanizeList([1, 2], 'disjunction')
    expect(resultado).toBe("1 or 2")
  })

  it("quando for um array de 5 elementos deve retornar os elementos com o limite e o conectivo AND quando for conjuncao ", () => {
    const resultado = humanizeList([1, 2, 3, 4, 5], 'conjunction', 3)
    expect(resultado).toBe("1, 2 ... and 5")
  })
});
