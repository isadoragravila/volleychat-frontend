# <p align = "center"> VolleyChat front-end </p>

<p align="center">
   <img src="https://user-images.githubusercontent.com/102394075/194929187-4a1b3fde-336a-42d8-a741-3d701b625ee5.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-isadoragravila-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/isadoragravila/volleychat-frontend?color=4dae71&style=flat-square" />
</p>

##  :clipboard: Descrição

Aplicação dedicada aos amantes do vôlei, com o intuito de conectar essas pessoas.

Nela, o usuário poderá interagir com os outros através de salas de bate-papo temáticas, criadas pelos próprios usuários. 

Está acontecendo um jogo neste momento? Crie uma sala e ou entre em uma para conversar sobre!

***

## :computer:	 Tecnologias e Conceitos

- JavaScript
- React

***

## :rocket: Telas e rotas

- ### Tela de login ( ```/``` )
    - Usuário realiza login, enviando username e senha;
    - Em caso de sucesso, ele é redirecionado para a rota (```/feed```);

- ### Tela de cadastro (```/sign-up```)
    - Usuário realiza o cadastro, enviando os dados pedidos;
    - Em caso de sucesso, ele é redirecionado para a rota de login ( ```/``` );

- ### Tela inicial do usuário logado (```/feed```)
    - As categorias das salas de bate-papo são listadas;
    - Usuário pode escolher e navegar pelas categorias;
    - Ao clicar em uma das categorias, o usuário é redirecionado para a rota (```/feed/:categoryId```);
    - Na tela também são carregados os chats criados pelo usuário;
        - Ao clicar em "Join", o usuário é redirecionado para a sala selecionada, através da rota (```/feed/:categoryId/chat/:chatId```);

- ### Tela de feed de salas de bate-papo (```/feed/:categoryId```)
    - As categorias das salas de bate-papo são listadas;
    - Ao clicar no botão "Create a new chatroom", é exibido o formulário para criação de uma sala de bate-papo;
        - Após a criação, o usuário é redirecionado para a sala criada, através da rota (```/feed/:categoryId/chat/:chatId```);
    - As salas de bate-papo existentes da categoria selecionada são listadas;
        - A cada 5 segundos, essa lista é atualizada;
        - Ao clicar em "Join", o usuário é redirecionado para a sala selecionada, através da rota (```/feed/:categoryId/chat/:chatId```);
    - É possível retornar para a rota (```/feed```), clicando no botão "Return to timeline";

- ### Tela de perfil dos usuários (```/profile/:id```)
    - São exibidas informações sobre o usuário, como username, bio e imagem de perfil;
    - As categorias das salas de bate-papo são listadas;
    - As salas de bate-papo existentes criadas pelo usuário são listadas;
        - A cada 5 segundos, essa lista é atualizada;
        - Ao clicar em "Join", o usuário é redirecionado para a sala selecionada, através da rota (```/feed/:categoryId/chat/:chatId```);
    - É possível retornar para a rota (```/feed```), clicando no botão "Return to timeline";

- ### Tela de sala de bate-papo (```/feed/:categoryId/chat/:chatId```)
    - Os participantes da sala são listados;
        - A cada 3 segundos, os participantes são atualizados;
        - A cada 3 segundos, é enviado o status do usuário que permanece na sala;
        - Ao clicar no nome de um participante, o usuário é redirecionado à tela de perfil daquele usuário, através da rota (```/profile/:id```);
    - As mensagens da sala são exibidas;
        - A cada 3 segundos, as mensagens são atualizadas;
        - Ao clicar no nome de um participante, dentro da caixa da mensagem, o usuário é redirecionado à tela de perfil daquele usuário, através da rota (```/profile/:id```);
    - É possível enviar mensagens;
        - Ao enviar, as mensagens são atualizadas;
    - É possível retornar para a rota (```/feed:categoryId```), clicando no botão "Leave chatroom";

- ### Topo
    - Ao clicar na logo, o usuário é redirecionado para a tela inicial (```/feed```);
    - Ao clicar na imagem, o usuário é redirecionado para a tela de usuário (```/profile/:id```);
    - Ao clicar em logout, o usuário faz o logout, sendo redirecionado para a rota de login ( ```/``` );

***

## 🏁 Rodando a aplicação

### **1. Localmente** (ambiente de desenvolvimento)

Certifique-se que você tenha a última versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório em sua máquina:

```
git clone https://github.com/isadoragravila/volleychat-frontend.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependências:

```
npm install
```

Para inicializar o servidor, rode:
```
npm start
```

### **2. Deploy**

Link do deploy no Vercell :
```
https://volleychat-frontend.vercel.app/
```

***

## Rodando os testes

### Testes E2E

:stop_sign: Para o funcionamento dos testes, vá até o arquivo `/src/services/api.js` e certifique-se de que a url utilizadas seja a de testes (test);

Para rodar os testes E2E, primeiramente abra o diretório de back-end (volleychat-backend) no terminal e inicialize o servidor:

```
npm run dev:test
```
Em seguida, em uma nova aba, abra o diretório de front-end (esta aplicação) no terminal e inicialize o servidor:

```
npm start
```

Então, em uma nova aba, abra o diretório de front-end no terminal e inicialize o Cypress:

```
npx cypress open
```

Na janela do Cypress, selecione a opção "E2E Testing" e depois clique no botão "Start E2E Testing in Electron"

Dessa forma, é possível escolher os testes a serem rodados, selecionando os specs