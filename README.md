# 🎬 CineAnime

CineAnime é uma aplicação web que permite navegar por diferentes títulos através de um **carrossel dinâmico**, com **troca automática de informações**, **imagem de fundo contextual**, **busca inteligente** e **design totalmente responsivo**.

> ⚠️ **Aviso importante:**  
> Este projeto foi desenvolvido **como estudo e prática**, inspirado em um layout apresentado em um vídeo do YouTube (link abaixo).  
> O **código não foi copiado**, toda a estrutura, lógica e funcionalidades foram **reescritas, adaptadas e expandidas**.

---

## 🎯 Inspiração

Este projeto foi inspirado no vídeo:

🔗 https://youtu.be/rjAIv7Fb_S8

O vídeo serviu apenas como **referência visual**.  
As seguintes partes **não seguem o código original**:

- Estrutura do NAVBAR
- Responsividade
- Lógica do JavaScript
- Sistema de busca sem backend
- Menu mobile
- Controle de estado do carrossel
- Sincronização entre cards, thumbnails e background

---

## 🚀 Funcionalidades

- 🎠 **Carrossel de animes**
  - Navegação por setas
  - Navegação ao clicar nos cards (thumbnails)
  - Destaque visual do anime ativo (borda dourada)

- 🔄 **Atualização dinâmica**
  - Troca automática do conteúdo (título, descrição, botões)
  - Alteração do background conforme o anime selecionado

- 🔍 **Busca inteligente (sem backend)**
  - Lista de sugestões enquanto o usuário digita
  - Exibição do nome e imagem do anime
  - Seleção do anime ao clicar no resultado
  - Campo é limpo automaticamente ao clicar fora

- 📱 **Design Responsivo**
  - Layout adaptado para desktop, tablet e mobile
  - Menu mobile

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
  - Flexbox
  - Media Queries
  - `clamp()` para responsividade fluida
- **JavaScript (Vanilla JS)**
- **Boxicons** para ícones

---

## 📂 Estrutura do Projeto

```text
📦 cineanime
├── 📁 assets
│   ├── icons
│   └── imagens
│   └── video
│
├── 📁 css
│   └── style.css
├── 📁 js
│   └── index.js
├── index.html
└── README.md
```
