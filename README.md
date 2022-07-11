# NOME DO PROJETO

O projeto Hi-Life conta com a pesquisa de médicos incluidos no sistemas. Onde 
apenas o paciente logado no sistema poderia consulta com o médico escolhido, no horário escolhido. 

## Membros da equipe

- Giovana Vieira e Vitor Alves

## Tecnologias e frameworks utilizados

**Frontend:**

- Para o fontend do projeto foi utilizado os framework **Vue.js** e **Bootstrap** para o desenvolvimento de cada componente e views do projeto, além de 
**HTML**, **CSS**  e **JavaScript**.

**Backend:**
- Para o backend foi utilizado o framework **.NET Core**, utilizando a linguagen **C#**.
- Usamos também o banco de dados relaciol **MySQL**
- Deploy do projeto na **AWS - ElasticBeansTalk**
- Documentação Online via **Swagger**
- Repostório do projeto no GitHub [HiLife-API](https://github.com/aSTRonuun/web-server-HiLife-api)

## Papéis ou tipos de usuário do sistema

- Paciente não autenticado 
- Paciente autenticado 
- Médico autenticado 
- Médico não autenticado

## Entidades, Tabelas ou ColeÃ§Ãµes utilizadas

Nome das tabelas (bancos sql) ou coleções (bancos nosql) utilizadas
- Patient - Paciente
- Doctor - Médico
- AvailableTimes - Coleções de Horários disponíveis do médico
- Appointments - Coleções de Consultas do médico


Operações implementadas para cada entidade

| Entidade| Create | Read | Update | Delete |
| --- | --- | --- | --- | --- |
| Patient | ✅🌐 |  ✅🌐  | ✅🌐 | ✅🌐 |
| Doctor | ✅ |  ✅🌐  |  ✅ | ✅ |
| AvailableTimes | ✅ |  ✅🌐  | ❌ | ❌ |
| Appointment | ✅ | ✅ | ✅ | ✅

- OBS: 🌐 - Operações que o frontend consume da API

## Rotas da API REST utilizadas

OpenAPI com Documentação via Swagger [HiLife-API](http://hilifeapi4-env.eba-9z5dxudh.us-east-1.elasticbeanstalk.com/swagger/index.html)