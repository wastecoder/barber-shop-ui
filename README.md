# Sistema de Agendamento para Barbearia

## Visão Geral
Este projeto consiste em um sistema de agendamento para uma barbearia, composto por duas partes:
uma aplicação front-end desenvolvida em Angular e uma API back-end implementada com Spring Boot.
O sistema permite o cadastro e gerenciamento de clientes, bem como a realização de agendamentos, garantindo que cada horário de serviço tenha uma duração fixa de uma hora.

Os repositórios do front-end e do back-end são separados, sendo necessário configurar ambos para o funcionamento completo da aplicação.

## Funcionalidades
- __Cadastro de Clientes:__ Possibilidade de adicionar, editar e excluir clientes.
- __Agendamento de Horários:__ O usuário seleciona uma data e um horário inicial; o término do serviço é automaticamente definido para uma hora depois.
- __Restrição em Agendamentos:__ Os agendamentos criados podem apenas ser excluídos, não editados.
- __Interface Amigável:__ Tema escuro, notificações visuais para informações de sucesso e erro.

## Tecnologias Utilizadas
- __Angular:__ Framework principal da interface.
- __Bootstrap e Angular Material:__ Para estilização e componentes visuais.
- __Uso de Interfaces:__ Para garantir tipagem adequada e melhor desacoplamento do código.
- __Tema Escuro:__ Interface visual otimizada para conforto do usuário.
- __Gerenciamento de Configuração:__ O endereço da API é definido no arquivo environments/environment.ts.
- __Notificações:__ Indicam quando um usuário é cadastrado, editado ou excluído.

## Configuração
Para rodar a aplicação, é necessário que o back-end esteja em execução.
Certifique-se de que a API está disponível na porta correta e que a URL está configurada no arquivo [environment.ts](https://github.com/wastecoder/barber-shop-ui/blob/main/src/environments/environment.ts).

Repositório do back-end: [Barber-Shop-API](https://github.com/wastecoder/barber-shop-api)

## Instalação
1. Clone o projeto na pasta desejada:
```bash
git clone https://github.com/wastecoder/barber-shop-ui.git
```
2. Baixe as dependências do projeto
```bash
npm install
```
  - O comando acima criará a pasta "node_modules"
3. Execute o projeto localmente
```bash
ng s -o
```
  - Isso irá iniciar e abrir o projeto no navegador
