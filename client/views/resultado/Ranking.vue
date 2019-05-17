<template>
  <div>
     <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="control">
          <span class="select">
            <!-- <select>
              <option>Selecione a atividade com as questões que deseja visualizar...</option>
              <option>With options</option>
            </select> -->
            <seletor-classes @seletorAlterado="visibilidade = $event"></seletor-classes>
          </span>
        </p>
      </article>
    </div>
  </div>

    <div class="tile is-ancestor" v-show="visibilidade">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">Questões classificadas automaticamente por índice de acertos</h4>
            <table class="table is-bordered is-striped is-narrow">
              <thead>
                <th>Posição</th>
                <th>Questão (código)</th>
                <th>Descrição resumida</th>
                <th>Acertos aluno (%)</th>
                <th>Acertos grupo (%)</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>19A</td>
                  <td>Construa a classe StaticField de forma que o método main crie 10 instâncias dessa classe e mostre a quantidade criada.</td>
                  <td>30</td>
                  <td>54</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>12P</td>
                  <td>Na classe abaixo quais alterações são necessárias para deixá-la aderente as boas práticas utilizadas em Java?</td>
                  <td>45</td>
                  <td>70</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>18A</td>
                  <td>Reconstrua a classe Pessoa de forma que o método addTelefones carregue o atributo telefones com as informações que são passadas no parâmetro do método.</td>
                  <td>57</td>
                  <td>63</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>10Q</td>
                  <td>Quais são exemplos de linguagens orientadas a objetos?</td>
                  <td>60</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>a_tt_pa</td>
                  <td>Reconstrua o algoritmo.</td>
                  <td>63</td>
                  <td>79</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>16A</td>
                  <td>Reconstrua a classe Pessoa de forma que o método equals retorne true caso o nome seja igual ao do objeto passado como parâmetro do método.</td>
                  <td>63</td>
                  <td>81</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>12</td>
                  <td>Reconstrua o algoritmo abaixo para permitir que o método construtor seja definido.</td>
                  <td>75</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>a_tt_pa</td>
                  <td>Quais as vantagens do paradigma da programação OO</td>
                  <td>80</td>
                  <td>95</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>17A</td>
                  <td>Construa a classe LoopTest de forma que os números no array sejam impressos na mesma sequência que estão armazenados.</td>
                  <td>81</td>
                  <td>81</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>a_tt_pa</td>
                  <td>Monte a classe Figura de tal forma que o método desenha() imprima o nome da forma que foi atribuída a figura....</td>
                  <td>88</td>
                  <td>90</td>
                </tr>
              </tbody>
            </table>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import SeletorClasses from '../components/ezclass/SeletorClasses'

export default {
  data () {
    return {
      visibilidade: false
    }
  },
  components: {
    SeletorClasses
  }
}
</script>


<style lang="scss">
.table-responsive {
  display: block;
  width: 100%;
  min-height: .01%;
  overflow-x: auto;
}
.select {
  width: 100%;
}
select {
  width: 100%;
}
</style>
