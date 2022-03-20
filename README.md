# Requisitos

- Geral
    - [X]  Manipule o HTML usando somente React (**sem usar o document, nem o localStorage,** nem bibliotecas React, JavaScript e/ou CSS). **Todo o armazenamento de informações deve ser feito via estados.**
    - [X]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub.
    - [ ]  **A cada requisito implementado** faça um *commit* com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários *commits*, não há problema. Mas evite colocar mais de um requisito no mesmo *commit*.
- Layout
    
    [ZapRecall (Proposta T5 )](https://www.figma.com/file/DACvsO649ncOAfI0PWzyl3/ZapRecall-(Proposta-T5-)?node-id=0%3A1)
    
    - [X]  Aplicar layout para seguindo o Figma.
    - [X]  Você pode usar o *deck* que desejar, temos aqui o exemplo de um *deck* sobre React:
        1. **Q:** O que é JSX? **R:** Uma extensão de linguagem do JavaScript
        2. **Q:** O React é __ **R:** uma biblioteca JavaScript para construção de interfaces
        3. **Q:** Componentes devem iniciar com __ **R:** letra maiúscula
        4. **Q:** Podemos colocar __ dentro do JSX **R:** expressões
        5. **Q:** O ReactDOM nos ajuda __ **R:** interagindo com a DOM para colocar componentes React na mesma
        6. **Q:** Usamos o npm para __ **R:** gerenciar os pacotes necessários e suas dependências
        7. **Q:** Usamos props para __ **R:** passar diferentes informações para componentes 
        8. **Q:** Usamos estado (state) para __ **R:** dizer para o React quais informações quando atualizadas devem renderizar a tela novamente
    - [X]  Use as fontes indicadas no Layout do Figma
- Componentização e dados
    - [X]  Os elementos da página devem ser componentizados com React em arquivos separados.
    - [X]  Os dados dinâmicos da página (como o *deck*, *flashcards*, etc) devem ser representados como *arrays* ou objetos no JavaScript e renderizados na tela.
- Início
    - [X]  Ao iniciar, uma “tela de início” deverá ser exibida.
    - [X]  Ao clicar no botão “Iniciar Recall!”, o *deck* de *flashcards* é exibido na tela.
- *Flashcards*
    - [ ]  Toda vez o que o usuário for jogar, os *flashcards* devem ser embaralhados.
    - [X]  Todos os *flashcards* devem aparecer na tela virados e indexados por números (ex: Flashcard 1, Flashcard 2), de modo a “esconder” o termo ou pergunta que ele contém.
    - [X]  Ao clicar em um *flashcard*, a pergunta ou termo correspondente ao *flashcard* deve aparecer (não é necessária nenhuma animação).
    - [X]  Para ver a resposta do *flashcard*, o usuário deve clicar no ícone de “virar” (o componente é o mesmo, apenas teve seu *layout* adaptado).
        - Ao virar um *flashcard*...
            - [X]  Ao clicar em qualquer um dos botões (Não lembrei, Quase não lembrei ou Zap), o *flashcard* deverá ser dado como respondido e terá seu status alterado para refletir a escolha do usuário:
                - *Flashcard* incorreto (Não lembrei)
                - *Flashcard* correto com esforço (Quase esqueci)
                - *Flashcard* correto imediatamente (Zap!)
            - [X]  Uma borda deverá surgir em volta do *flashcard* respondido, com a cor correta correspondente ao seu status e um ícone.
- Resultado final
    - [X]  O resultado deve estar fixado na parte debaixo da página.
    - [ ]  Sempre que uma carta for virada...
        - [X]  O número de flashcards respondidos deve ser atualizado
        - [ ]  A sequência de respostas deve ser registrada e aparecer no formato de ícones (importante: os ícones devem aparecer de acordo com a ordem de respostas do usuário e não da ordem dos flashcards!).
    - [ ]  Quando todos os flashcards forem respondidos...
        - [ ]  A mensagem de parabéns deve ser exibida se somente as respostas dos *flashcards* forem “ZAP!” ou “Lembrei com esforço”.
            - [ ]  Ao responder todos os *flashcards* e houver pelo menos um *status* "Incorreto", a mensagem de “Putz” deverá ser exibida.

# Bônus (opcional)

- Reiniciar
    - [ ]  Ao final de uma rodada, insira um botão de reiniciar que volta para a tela inicial e zera todas as respostas anteriores. Faça isso usando estados (coisas como `window.location` são proibidas para esse bônus).
- Meta de Zaps
    - [ ]  Um *input* deverá existir na primeira tela para perguntar ao usuário a sua meta de **zaps**. Essa meta deverá ser no mínimo 1 e **ela definirá se o usuário terá sucesso ou não**.
        - Ex. O usuário define sua meta como 2 **zaps**, e acerta apenas um *flashcard* com status **zap**, ao responder todos os *flashcards*, a mensagem “Putz” deverá ser renderizada, caso contrário, a mensagem de “Parabéns”.