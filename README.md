# 🛡️ PureWeb (uBlock Origin Lite Enhanced)

> **Extensão de navegação limpa, focada e sem distrações para Chromium (Microsoft Edge, Google Chrome, Brave).**
> Baseada no motor oficial e open-source do **uBlock Origin Lite (Manifest V3)** de Raymond Hill (*gorhill*), aprimorada com regras cirúrgicas de higiene visual, privacidade e remoção de poluição algorítmica.

---

## 🎯 O que esta extensão faz e bloqueia?

Além do bloqueio nativo e completo de anúncios (*adblock*) sem deixar espaços em branco, esta versão traz proteções adicionais personalizadas:

### 1. 🤖 Bloqueio Total de IA nas Buscas
- **Google**: Remove instantaneamente (sem piscar a tela) o bloco de **"Visão geral criada por IA"** (*AI Overview*) e a aba **"Modo IA"** do menu superior.
- **Bing**: Oculta o painel lateral do **Copilot** e caixas conversacionais de IA.
- **DuckDuckGo**: Suprime os resumos automáticos do **DuckAssist**.

### 2. 🧹 Faxina Completa na SERP do Google (Pesquisa Orgânica Pura)
- Remove a caixa sanfonada **"As pessoas também perguntam"** (*People Also Ask*).
- Remove carrosséis invasivos de **"Vídeos Curtos"** (*Shorts, TikTok, Reels*) inseridos no meio dos resultados.
- Oculta blocos de pesquisas relacionadas desnecessárias, devolvendo a experiência clássica de links diretos e relevantes.

### 3. 📺 Limpeza do YouTube (Foco & Produtividade)
- Remove prateleiras e carrosséis de **Shorts** na página inicial e nas inscrições.
- Remove a prateleira e atalhos da **"Sala de Jogos"** (*Playables*).
- Oculta o botão Shorts do menu lateral de navegação.

### 4. 🍪 Supressão Automática de Banners de Cookies / LGPD
- Oculta caixas de consentimento de cookies e fundos escuros/congelados (OneTrust, Cookiebot, Didomi, Usercentrics e banners nacionais de LGPD) **sem que você precise clicar em "Aceitar"** ou conceder permissões de rastreamento.
- Destrava automaticamente o scroll de páginas bloqueadas por avisos de cookie.

### 5. 🛡️ Desativação de Click Tracking e Limpeza de URLs
- **Desativação de Click Tracking no Google**: Remove o atributo `ping` e intercepta eventos que transformam links orgânicos em URLs de telemetria (`google.com/url?sa=t&...`). Você clica e vai direto ao site de destino.
- **Limpeza de Parâmetros de Rastreamento**: Remove automaticamente tags de telemetria da barra de endereços e links antes do clique (`utm_source`, `utm_medium`, `utm_campaign`, `fbclid`, `gclid`, `msclkid`, `igshid`, `si`).

### 6. 📰 Bloqueio de Chumbox e Anti-Sensacionalismo
- **Widgets de Fofoca**: Oculta blocos de rodapé de redes como **Taboola**, **Outbrain**, **Revcontent** e **MGID** (*"Recomendados da Web"*).
- **Anti-Clickbait Seguro**: Oculta matérias e posts estruturados com fórmulas de apelação barata (*"você não vai acreditar"*, *"o segredo que os médicos escondem"*, *"descubra antes que apaguem"*).
- **Desarme de CAPS LOCK**: Converte títulos do YouTube escritos em caixa alta histérica para texto legível e normal.
- **Filtro de Editorias de Fofoca**: Oculta seções de fofoca de subcelebridades em portais de notícias (UOL Splash, G1 Quem, Metrópoles Famosos, R7 Entretenimento), mantendo as notícias reais de Economia, Ciência, Tecnologia e Cidades 100% intactas.

---

## 📦 Como Instalar no Microsoft Edge ou Google Chrome

1. **Baixar o repositório**:
   - Clique no botão verde **Code** > **Download ZIP** (ou clone via git).
   - Extraia o arquivo zip em uma pasta permanente no seu computador.
2. **Abrir a página de extensões**:
   - No Edge: digite `edge://extensions` na barra de endereços.
   - No Chrome: digite `chrome://extensions`.
3. **Ativar o Modo de Desenvolvedor**:
   - No Edge: ative a chave no menu lateral esquerdo.
   - No Chrome: ative a chave no canto superior direito.
4. **Carregar a extensão**:
   - Clique em **"Carregar sem pacote"** (*ou "Carregar sem compactação"*).
   - Selecione a pasta onde os arquivos estão descompactados (a pasta que contém o arquivo `manifest.json`).

---

## ⚖️ Aviso Legal & Termo de Isenção de Responsabilidade (Legal Disclaimer)

> **LEIA COM ATENÇÃO**: Este software é disponibilizado gratuitamente sob a licença pública **GNU General Public License v3.0 (GPLv3)**, para fins estritamente pessoais, educacionais e de estudo sobre acessibilidade e controle de interface pelo usuário (*User Stylesheet / Client-Side DOM Modification*).

1. **Sem Intenção de Prejudicar Terceiros**:
   - Este projeto **não tem como objetivo prejudicar, difamar, denegrir, interceptar indevidamente ou causar prejuízos econômicos** a qualquer provedor de conteúdo, veículo de imprensa, plataforma digital, buscador ou empresa mencionada (incluindo, mas não se limitando a Google LLC, Microsoft Corporation, YouTube LLC ou portais de notícias).
   - O projeto não invade servidores, não quebra proteções criptográficas, não altera códigos de terceiros nos servidores de origem e não redistribui conteúdo protegido por direitos autorais.

2. **Soberania do Navegador e Acessibilidade do Usuário**:
   - A extensão opera **exclusivamente do lado do cliente (client-side)**, atuando como uma ferramenta de acessibilidade e customização de folhas de estilo (CSS) e manipulação visual do DOM, conforme o direito legítimo do usuário de configurar como os dados recebidos em seu próprio dispositivo são exibidos em sua tela pessoal.

3. **Isenção de Garantias ("AS IS")**:
   - O software é fornecido *"no estado em que se encontra"* (*"AS IS"*), sem garantias de qualquer tipo, expressas ou implícitas, quanto à disponibilidade contínua de layouts, compatibilidade de versões futuras de websites ou ausência de erros.
   - O usuário assume total responsabilidade pelo uso da ferramenta e pela conformidade com os termos de serviço dos websites que navega individualmente.

4. **Marcas Registradas**:
   - Todas as marcas comerciais, nomes de serviços, logotipos e nomes de empresas mencionados neste repositório pertencem aos seus respectivos proprietários e são utilizados aqui estritamente para fins de referência descritiva de compatibilidade (*nominative fair use*). O projeto não possui qualquer vínculo oficial com os serviços mencionados.
