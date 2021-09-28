# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

<p style="text-align: justify">
As considerações levantadas para entender o problema e suas características principais foram desenvolvidas pela equipe por meio de pesquisa e entrevistas com as pessoas que seriam beneficiadas com esta aplicação web. Trouxemos mais detalhes na forma de personas e histórias de usuário.</p>
<br>

## Personas

- Conceição Aparecida tem 44 anos, é técnica em enfermagem, buscando ser cuidadora de idosos como renda complementar. Principais aplicativos: Intagram, LinkedIn e WhatsApp.

- Patrícia Freitas tem 43 anos, está en transição de carreira, atualmente estudando programação. Busca por cuidadores para sua mãe. Principais aplicativos: Intagram, LinkedIn, Telegram e WhatsApp.

- Eleonora Alves tem 48 anos, é cuidadora de idosos há mais de 20 anos. Utiliza o WhatsApp.

- Neusa Costa tem 82 anos, é aposentada e pensionista. Principais aplicativos: Intagram, Facebook, Telegram, WhatsApp e Zoom.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE`                                                                                                                                                                                                                                                                           | PARA ... `MOTIVO/VALOR`                                                                                                                                                                                                                                                                             |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Patrícia             | Um acompanhante que fique com minha mãe em casa, para ela não ficar sozinha                                                                                                                                                                                                                                  | Porque ela teve um AVC (que afetou as habilidades cognitivas).                                                                                                                                                                                                                                      |
| Eleonora             | Gostaria do recurso de avaliação.                                                                                                                                                                                                                                                                            | Pois cuidar é um aprendizado contínuo.                                                                                                                                                                                                                                                              |
| Eleonora             | Gostaria de encontrar algumas dicas de como lidar com emergências.                                                                                                                                                                                                                                           | Para ajudar a aprimorar os conhecimentos dos cuidadores.                                                                                                                                                                                                                                            |
| Conceição            | Gostaria de encontrar boas oportunidades de trabalho, segurança e orientações.                                                                                                                                                                                                                               | Para me sentir mais segura e ter mais autonomia para encontrar emprego.                                                                                                                                                                                                                             |
| Conceição            | Oportunidades de conhecer as famílias e suas necessidades antes de apresentar meus serviços.                                                                                                                                                                                                                 | Para facilitar a procura neste trabalho.                                                                                                                                                                                                                                                            |
| Conceição            | Poder criar um perfil onde possa expor minhas qualificações, experiências, referências e valor a ser cobrado pelo serviço.                                                                                                                                                                                   | Ter uma vitrine onde as famílias possam me conhecer melhor e saber se eu atendo aos requisitos que elas procuram.                                                                                                                                                                                   |
| Neusa                | Um(a) acompanhante que possa me entender melhor, conversar, passear e fazer compras e que tenha algumas afinidades. Não possuo doenças muito graves, mas tenho problemas e necessidades relacionados a minha idade. Preciso de ajuda para atividades que precisam de força, mas também preciso de companhia. | Porque gostaria de poder contratar um cuidador que seja na verdade uma companhia. Um(a) profissional que me ajude, mas que eu possa escolher uma pessoa não muito nova para me entender melhor (40/50), do sexo feminino, que possua religião semelhante à minha etc. Enfim, ter opções de escolha. |

<br>

## Requisitos

<p style="text-align: justify">
O sistema web proposto deve ser uma solução acessível, prática e segura para aproximar cuidadores que buscam oportunidades profissionais e idosos que necessitam de cuidadores por um período específico ou não, possibilitando uma relação profissional entre as partes.</p>
<br>

### Requisitos Funcionais

| ID    | Descrição do Requisito                                                                                                                                                         | Prioridade |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| RF-01 | Permitir o cadastro dos usuários (cuidadores, idosos e responsáveis), realizando a validação através de um e-mail de confirmação ou SMS.                                       | ALTA       |
| RF-02 | Possibilitar o usuário redefinir a sua senha utilizando um e-mail ou SMS de um número cadastrado, seguido de uma pergunta de segurança informada no momento do cadastro.       | ALTA       |
| RF-03 | Permitir ao usuário a visualização, alteração e exclusão de seus dados do sistema.                                                                                             | ALTA       |
| RF-04 | Avaliar o profissional através do sistema de 5 estrelas.                                                                                                                       | ALTA       |
| RF-05 | Fornecer página de FAQ, com as principais dúvidas, e um e-mail de contato para maiores esclarecimentos.                                                                        | ALTA       |
| RF-06 | Incluir destaque na página principal com informações do sistema e as soluções oferecidas.                                                                                      | ALTA       |
| RF-07 | No momento do cadastro ter fácil identificação para o direcionamento do perfil – cuidador ou idoso/responsável.                                                                | ALTA       |
| RF-08 | O site deverá permitir a comunicação entre usuários sem o compartilhamento de informações de contato.                                                                          | ALTA       |
| RF-09 | Ter a função de conceder ou solicitar recomendações para os serviços prestados.                                                                                                | MÉDIA      |
| RF-10 | Oferecer pesquisa dos profissionais cuidadores através de filtro de busca por especialidade, localização e perfil.                                                             | MÉDIA      |
| RF-11 | Seção de depoimento dos usuários com relação ao uso do sistema.                                                                                                                | MÉDIA      |
| RF-12 | No perfil dos profissionais cuidadores deverá haver campos para especificarem suas habilidades e disponibilidades e inserção de anexos (certificações e cartas de referência). | BAIXA      |
| RF-13 | No perfil dos idosos deverá haver campos para especificarem suas necessidades, horários e quaisquer informações essenciais que devam ser de conhecimento dos cuidadores.       | BAIXA      |
| RF-14 | Exibir resultados da busca por ordem de menor distância do usuário.                                                                                                            | BAIXA      |
| RF-15 | Apresentar uma sessão de notícias e dicas referentes a todo o universo de cuidados e acompanhamento de idosos.                                                                 | BAIXA      |

<br>

### Requisitos não Funcionais

| ID     | Descrição do Requisito                                                                        | Prioridade |
| ------ | --------------------------------------------------------------------------------------------- | ---------- |
| RNF-01 | O site deverá ser responsivo possibilitando a visualização em qualquer dispositivo.           | ALTA       |
| RNF-02 | O site deverá rodar 24 horas por dia 7 dias por semana, com disponibilidade garantida de 98%. | ALTA       |
| RNF-03 | O sistema deverá seguir a norma de qualidade ISSO 9126.                                       | ALTA       |
| RNF-04 | O site deverá funcionar nos navegadores Google Chrome, Microsoft Edge, Firefox e Safari.      | ALTA       |
| RNF-05 | O site deverá permitir o cadastro usando Google/Facebook.                                     | MÉDIA      |
| RNF-06 | O site deverá enviar uma confirmação de email em até 5 min.                                   | MÉDIA      |

<br>

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID    | Restrição                                                                                                                                             |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| RE-01 | O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 06/12/2021.                                               |
| RE-02 | A equipe não pode subcontratar o desenvolvimento do trabalho.                                                                                         |
| RE-03 | O termo de responsabilidade aceito no cadastro isenta o sistema de quaisquer ocorrências resultantes de atendimentos e comunicação entre os usuários. |
| RE-04 | O site não será responsável por pagamentos e negociações de valores.                                                                                  |
| RE-05 | A localização geográfica deverá ser restrita a usuários dentro do Brasil.                                                                             |
| RE-06 | O sistema deverá ser implementado em linguagem JavaScript, HTML, CSS e Bootstrap.                                                                     |
| RE-07 | Os usuários não poderão ter acesso aos dados pessoais de outros usuários.                                                                             |
