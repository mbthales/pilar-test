# BLINTZ
## Componentes

### CardVue
Componente que é renderizado para cada imóvel.
#### Props

<table>
  <tr>
    <td>Nome</td>
    <td>Tipo</td>
    <td>Descrição</td>
  </tr>
  <tr>
    <td>house</td>
    <td>Object</td>
    <td>Este objeto possui as seguintes chaves:<ul><li>address = String</li><li>area = Number</li><li>asking_price = Number</li><li>bedrooms = Number</li><li>building (não é obrigatório) = String</li><li>condo_fee = Number</li><li>created_at = String</li><li>parking_spots = Number</li><li>property_type = String</li><li>region = String</li><li>rent = Number</li><li>suites = Number</li><li>tax = Number</li></ul></td>
  </tr>
</table>

#### Computed
<table>
  <tr>
    <td>Nome</td>
    <td>Tipo</td>
    <td>Descrição</td>
  </tr>
  <tr>
    <td>housePrice</td>
    <td>Function => string</td>
    <td>Converte um número para a formatação monetária brasileira.</td>
  </tr>
  <tr>
    <td>houseNome</td>
    <td>Function => string</td>
    <td>Caso o nome do imóvel exista, é mostrado o nome com o tipo de casa. Caso contrário, apenas o tipo de imóvel é exibido.</td>
  </tr>
  <tr>
    <td>houseBedroom</td>
    <td>Function => string</td>
    <td>
    Se n é quantidade de quartos:
    <br/>
      <pre>
if(n > 1){
  return "n quartos"
} else {
  return "n quarto"
}
      </pre>
    </td>
  </tr>
  <tr>
    <td>houseSuite</td>
    <td>Function => string</td>
    <td>
    Se n é quantidade de suites:
    <br/>
      <pre>
if(n > 1){
  return "n suítes"
} else {
  return "n suíte"
}
      </pre>
    </td>
  </tr>
  <tr>
    <td>houseParkSpaceQuantity</td>
    <td>Function => string</td>
    <td>
    Se n é quantidade de vagas no estacionomento:
    <br/>
      <pre>
if(n > 1){
  return "n vagas"
} else if(n === 1) {
  return "n vaga"
} else {
  return "Não há vaga"
}
      </pre>
    </td>
  </tr>
</table>

### ContainerHouses
Componente responsável por mandar renderizar os imóveis, além de realizar a lógica do filtro de imóveis.
#### Data
<table>
  <tr>
    <td>Nome</td>
    <td>Tipo</td>
    <td>Descrição</td>
  </tr>
  <tr>
    <td>houses</td>
    <td>Object</td>
      <td>Este objeto possui as seguintes chaves:<ul><li>Data:</li><ul><li>address: String</li><li>area: Number</li><li>asking_price: Number</li><li>bedrooms: Number</li><li>building (não é obrigatório): String</li><li>condo_fee: Number</li><li>created_at: String</li><li>parking_spots: Number</li><li>property_type: String</li><li>region: String</li><li>rent: Number</li><li>suites: Number</li><li>tax: Number</li></ul><li>error: Null</li><li>loading: Boolean</li></ul></td>
  </tr>
  <tr>
    <td>housesLimit</td>
    <td>Number</td>
    <td>Quantidade de imóveis sendo mostrados.</td>
  </tr>
  <tr>
    <td>housesOrder</td>
    <td>String</td>
    <td>Valor que ordena os imóveis de maior preço para o menor, ou de menor preço para o maior.</td>
  </tr>
  <tr>
    <td>inputSearchHouse</td>
    <td>String</td>
    <td>Valor do input do usuário ao procurar um imóvel.</td>
  </tr>
  <tr>
    <td>inputSearchHouseFocused</td>
    <td>Boolean</td>
    <td>Se o usuário focar no input de procura de imóvel, tal valor fica <code>true</code>. Se deixar de focar, o valor fica <code>false</code>.</td>
  </tr>
  <tr>
    <td>housesFound</td>
    <td>Array</td>
    <td>Armazena os imóveis filtrados de acordo com o input do usuário.</td>
  </tr>
</table>

#### Métodos
<table>
  <tr>
    <td>Nome</td>
    <td>Tipo</td>
    <td>Descrição</td>
  </tr>
  <tr>
    <td>removeStringAccent</td>
    <td>Function => String</td>
    <td>Remove a acentuação de uma string.</td>
  </tr>
  <tr>
    <td>FilterHouses</td>
    <td>Function</td>
    <td>Filtra os imóveis de <code>houses.data</code> e armazena o resultado em <code>housesFound</code>.</td>
  </tr>
  <tr>
    <td>checkIfInputSearchHouseHasFocus</td>
    <td>Function</td>
    <td>Esta função é disparada se um usuário focar ou desfocar do elemento de input de procura de imóvel. É armazenado <code>true</code> em <code>checkIfInputSearchHouseHasFocus</code> se tal valor for <code>false</code>. Por outro lado, é armazenado <code>false</code> se tal valor for <code>true</code></td>
  </tr>
  <tr>
    <td>getHouses</td>
    <td>Function</td>
    <td>Realiza uma requisição para a API. Armazena os valores em <code>houses</code>.</td>
  </tr>
  <tr>
    <td>setHousesLimit</td>
    <td>Function</td>
    <td>Armazena uma quantidade maior de imóveis em <code>housesLimit</code> de acordo com um viewport.</td>
  </tr>
  <tr>
    <td>showMoreHouses</td>
    <td>Function</td>
    <td>É disparado após o componente <code>LoadingTarget</code> ser montado. Tal função fica observando se tal componente é vísivel, se for, é adicionado 10 no valor de <code>housesLimit</code>.</td>
  </tr>
</table>

#### Watch
<table>
  <tr>
    <td>Nome</td>
    <td>Descrição</td>
  </tr>
  <tr>
    <td>housesOrder</td>
    <td>Se houver alguma alteração em <code>housesOrder</code>, o método <code>filterHouses()</code> é disparado.</td>
  </tr>
  <tr>
    <td>inputSearchHouse</td>
    <td>Se houver alguma alteração em <code>inputSearchHouse</code>, o método <code>filterHouses()</code> é disparado.</td>
  </tr>
</table>

#### Computed
<table>
  <tr>
    <td>Nome</td>
    <td>Descrição</td>
  </tr>
  <tr>
    <td>housesShown</td>
    <td>É retornado um Array com os imóveis filtrados de <code>housesFound</code>, porém, o tamanho do Array é igual ao valor de <code>housesLimit</code>.</td>
  </tr>
</table>

#### Create
<table>
  <tr>
    <td>Os metódos <code>setHousesLimit()</code> e <code>getHouses()</code> são disparados durante a criação do componente.</td>
  </tr>
</table>

### Navbar
Tal componente é o header do site.

### LoadingTarget
Componente que serve de target para o metódo <code>showMoreHouses()</code> do component <code>ContainerHouses</code>

#### Mounted
<table>
  <tr>
    <td>Quando tal componente for montado, será emitido um método <code>mounted</code> ao seu componente pai, que é o <code>ContainerHouses</code>.</td>
  </tr>
</table>