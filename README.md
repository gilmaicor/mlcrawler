# Crawler Mercado Livre

Web crawler para busca de uma lista de produtos no Mercado Livre.


### Tecnologias

- [TypeScript] - Superconjunto de JavaScript que adiciona tipagem e alguns outros recursos a linguagem.
- [Express] - Estrutura de aplicativo de rede rápida node.js.
- [Axios] - Cliente HTTP baseado em promessa para o navegador e node.js.
- [Cheerio] - Implementação rápida, flexível e enxuta do núcleo do jQuery projetado especificamente para o servidor.
- [Jest] - É uma estrutura de teste de JavaScript mantida pelo Facebook, Inc. com foco na simplicidade.


### Instalação

Requer [Node.js](https://nodejs.org/) v11+ para funcionar.

Instale as dependências e inicio o servidor

```sh
$ cd mlcrawler
$ npm install
$ npm start
```


### Entrada

```json
{
  "search": String,
  "limit": Int
}
```


### Saída

````json
[
  {
    "name": String,
    "link": String,
    "price": Number,
    "store": String,
    "state": String
  },
  ...
]
````


### Teste

```sh
$ npm test
```


##### Timeout

A aplicação conta com um timeout de 30000ms, _requests_ com limites muito altos podem excede-lo.


[typescript]: https://www.typescriptlang.org/
[axios]: https://github.com/axios/axios/
[cheerio]: https://github.com/cheeriojs/cheerio/
[express]: http://expressjs.com/
[jest]: https://jestjs.io/
