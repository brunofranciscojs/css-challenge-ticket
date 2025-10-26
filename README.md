# 🎟️ CSS Challenge — Swiss Express Ticket UI

Um desafio de **CSS e criatividade**, inspirado em passagens de trem digitais.  
Este projeto combina **design moderno**, **geração dinâmica de conteúdo via JavaScript** e **experimentos com propriedades CSS recentes**, tudo renderizado apenas no navegador — sem frameworks.

---

## 🚄 Conceito

O objetivo foi recriar uma **passagem de trem digital**, com layout responsivo e estética realista, utilizando apenas **TailwindCSS (via CDN)** e **HTML + JavaScript puro**.

Cada bilhete é gerado dinamicamente a partir de um arquivo `tickets.json`, simulando diferentes rotas, passageiros, horários e classes de trem.

---

## 🧠 Destaques do Projeto

### 🧩 1. Geração dinâmica via JSON
Os dados de cada passagem são importados de `tickets.json` usando `fetch()`, permitindo criar múltiplos tickets sem duplicar HTML.

```js
fetch('./tickets.json')
  .then(res => res.json())
  .then(tickets => {
    tickets.map(ticket => {
      // Geração automática dos bilhetes
    })
  })
```
Isso transforma o layout em um componente reutilizável puramente em JavaScript.

🎨 2. Design fluido e detalhado
O cartão utiliza várias técnicas visuais de CSS moderno:

Bordas arredondadas personalizadas com [corner-shape:squircle]

Efeitos de recorte com clip-path para simular perfurações laterais

Tipografia e espaçamento inspirados em design suíço minimalista

Layout com TailwindCSS utilizando custom utilities

🧠 3. Código de barras fictício gerado proceduralmente
Um dos detalhes mais criativos do projeto é o código de barras falso, criado de forma generativa com JavaScript puro:

```js
const bars = Array.from({ length: 50 })
  .map((bar, index) => 
    `<span class="bg-black w-[${Math.floor(Math.random() * index)}px] inline-block h-full"></span>`
  ).join('')
```
🔸 Cada bilhete exibe um padrão único de barras aleatórias, simulando um código de barras artístico, que não representa nenhum dado real, mas reforça o tema visual de ticket.

Esse detalhe adiciona personalidade e textura visual ao design — um exemplo de creative coding aplicado à UI.

🧭 4. Navegação horizontal com botões nativos (scroll-button)
O container principal utiliza CSS Scroll Snap e novas pseudo-classes experimentais como ::scroll-button(left/right) e CSS Anchor Positioning:


```css
main {
  scroll-behavior: smooth;
  &::scroll-button(right),
  &::scroll-button(left) {
    content: '→';
    background: black;
    color: white;
    border-radius: 50%;
    position-anchor: --carrossel;
  }
}
```
💡 Isso cria botões de navegação embutidos no scroll, sem precisar de JavaScript adicional — uma inovação visual e técnica, demonstrando domínio de novas features CSS ainda pouco exploradas.

🧩 Tecnologias utilizadas
🧱 HTML5

🎨 TailwindCSS 4 (via CDN)

⚡ JavaScript ES6

🧾 JSON dinâmico para conteúdo

🧪 Propriedades CSS modernas
```css
anchor-name

position-area

::scroll-button

[clip-path:circle()]

[corner-shape:squircle]
```
🧑‍💻 Como rodar
Clone o repositório:

```bash
git clone https://github.com/seuusuario/css-ticket-challenge.git
cd css-ticket-challenge
```
Abra o arquivo index.html no navegador (não requer servidor local).

Certifique-se de que tickets.json esteja na mesma pasta.




