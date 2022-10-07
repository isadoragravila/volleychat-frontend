# <p align = "center"> VolleyChat front-end </p>

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

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
