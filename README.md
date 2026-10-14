# 🛡️ pureweb (ublock origin lite enhanced)

> **extensão de navegação limpa, focada e sem distrações para chromium (microsoft edge, google chrome, brave).**  
> baseada no motor oficial e open-source do **ublock origin lite (manifest v3)** de raymond hill (*gorhill*), aprimorada com regras cirúrgicas de higiene visual, privacidade e remoção de poluição algorítmica.

---

## 🎯 o que esta extensão faz e bloqueia?

além do bloqueio nativo e completo de anúncios (*adblock*) sem deixar espaços em branco, esta versão traz proteções adicionais personalizadas:

### 1. 🤖 bloqueio total de ia nas buscas
- **google**: remove instantaneamente (sem piscar a tela) o bloco de **"visão geral criada por ia"** (*ai overview*) e a aba **"modo ia"** do menu superior.
- **bing**: oculta o painel lateral do **copilot** e caixas conversacionais de ia.
- **duckduckgo**: suprime os resumos automáticos do **duckassist**.

### 2. 🧹 faxina completa na serp do google (pesquisa orgânica pura)
- remove a caixa sanfonada **"as pessoas também perguntam"** (*people also ask*).
- remove carrosséis invasivos de **"vídeos curtos"** (*shorts, tiktok, reels*) inseridos no meio dos resultados.
- oculta blocos de pesquisas relacionadas desnecessárias, devolvendo a experiência clássica de links diretos e relevantes.

### 3. 📺 limpeza do youtube (foco & produtividade)
- remove prateleiras e carrosséis de **shorts** na página inicial e nas inscrições.
- remove a prateleira e atalhos da **"sala de jogos"** (*playables*).
- oculta o botão shorts do menu lateral de navegação.

### 4. 🍪 supressão automática de banners de cookies / lgpd
- oculta caixas de consentimento de cookies e fundos escuros/congelados (onetrust, cookiebot, didomi, usercentrics e banners nacionais de lgpd) **sem que você precise clicar em "aceitar"** ou conceder permissões de rastreamento.
- destrava automaticamente o scroll de páginas bloqueadas por avisos de cookie.

### 5. 🛡️ desativação de click tracking e limpeza de urls
- **desativação de click tracking no google**: remove o atributo `ping` e intercepta eventos que transformam links orgânicos em urls de telemetria (`google.com/url?sa=t&...`). você clica e vai direto ao site de destino.
- **limpeza de parâmetros de rastreamento**: remove automaticamente tags de telemetria da barra de endereços e links antes do clique (`utm_source`, `utm_medium`, `utm_campaign`, `fbclid`, `gclid`, `msclkid`, `igshid`, `si`).

### 6. 📰 bloqueio de chumbox e anti-sensacionalismo
- **widgets de fofoca**: oculta blocos de rodapé de redes como **taboola**, **outbrain**, **revcontent** e **mgid** (*"recomendados da web"*).
- **anti-clickbait seguro**: oculta matérias e posts estruturados com fórmulas de apelação barata (*"você não vai acreditar"*, *"o segredo que os médicos escondem"*, *"descubra antes que apaguem"*).
- **desarme de caps lock**: converte títulos do youtube escritos em caixa alta histérica para texto legível e normal.
- **filtro de editorias de fofoca**: oculta seções de fofoca de subcelebridades em portais de notícias (uol splash, g1 quem, metrópoles famosos, r7 entretenimento), mantendo as notícias reais de economia, ciência, tecnologia e cidades 100% intactas.

---

## 📦 como instalar no microsoft edge ou google chrome

1. **baixar o repositório**:
   - clique no botão verde **code** > **download zip** (ou clone via git).
   - extraia o arquivo zip em uma pasta permanente no seu computador.
2. **abrir a página de extensões**:
   - no edge: digite `edge://extensions` na barra de endereços.
   - no chrome: digite `chrome://extensions`.
3. **ativar o modo de desenvolvedor**:
   - no edge: ative a chave no menu lateral esquerdo.
   - no chrome: ative a chave no canto superior direito.
4. **carregar a extensão**:
   - clique em **"carregar sem pacote"** (*ou "carregar sem compactação"*).
   - selecione a pasta onde os arquivos estão descompactados (a pasta que contém o arquivo `manifest.json`).

---

## ⚖️ aviso legal & termo de isenção de responsabilidade (legal disclaimer)

> **leia com atenção**: este software é disponibilizado gratuitamente sob a licença pública **gnu general public license v3.0 (gplv3)**, para fins estritamente pessoais, educacionais e de estudo sobre acessibilidade e controle de interface pelo usuário (*user stylesheet / client-side dom modification*).

1. **sem intenção de prejudicar terceiros**:
   - este projeto **não tem como objetivo prejudicar, difamar, denegrir, interceptar indevidamente ou causar prejuízos econômicos** a qualquer provedor de conteúdo, veículo de imprensa, plataforma digital, buscador ou empresa mencionada (incluindo, mas não se limitando a google llc, microsoft corporation, youtube llc ou portais de notícias).
   - o projeto não invade servidores, não quebra proteções criptográficas, não altera códigos de terceiros nos servidores de origem e não redistribui conteúdo protegido por direitos autorais.

2. **soberania do navegador e acessibilidade do usuário**:
   - a extensão opera **exclusivamente do lado do cliente (client-side)**, atuando como uma ferramenta de acessibilidade e customização de folhas de estilo (css) e manipulação visual do dom, conforme o direito legítimo do usuário de configurar como os dados recebidos em seu próprio dispositivo são exibidos em sua tela pessoal.

3. **isenção de garantias ("as is")**:
   - o software é fornecido *"no estado em que se encontra"* (*"as is"*), sem garantias de qualquer tipo, expressas ou implícitas, quanto à disponibilidade contínua de layouts, compatibilidade de versões futuras de websites ou ausência de erros.
   - o usuário assume total responsabilidade pelo uso da ferramenta e pela conformidade com os termos de serviço dos websites que navega individualmente.

4. **marcas registradas**:
   - todas as marcas comerciais, nomes de serviços, logotipos e nomes de empresas mencionados neste repositório pertencem aos seus respectivos proprietários e são utilizados aqui estritamente para fins de referência descritiva de compatibilidade (*nominative fair use*). o projeto não possui qualquer vínculo oficial com os serviços mencionados.
