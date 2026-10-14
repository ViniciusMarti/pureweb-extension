# pureweb.

> navegação limpa, silenciosa e sem distrações para chromium (edge, chrome, brave).  
> construído sobre o motor oficial do **ublock origin lite (manifest v3)** por raymond hill (*gorhill*), com ajustes cirúrgicos para remover a poluição moderna da web.

---

### o que isso faz?

além do bloqueio nativo de anúncios sem deixar espaços em branco, o pureweb foca na higiene visual e na preservação da sua atenção:

* **sem ia na busca**: oculta instantaneamente o *modo ia* e a *visão geral por ia (ai overview)* no google, o copilot no bing e o duckassist.
* **pesquisa limpa no google**: remove caixas de *as pessoas também perguntam*, carrosséis de vídeos curtos e buscas relacionadas no meio dos resultados. apenas links orgânicos reais.
* **youtube focado**: sem prateleiras de shorts na home/inscrições, sem aba shorts e sem a prateleira da *sala de jogos (playables)*.
* **sem avisos de cookies / lgpd**: suprime banners e cortinas escuras (onetrust, cookiebot, didomi, etc.) sem que você precise clicar em aceitar ou ceder permissões.
* **desativação de click tracking**: remove o redirecionador do google (`google.com/url?...`) e limpa parâmetros de rastreamento antes do clique (`utm_*`, `fbclid`, `gclid`, `si`).
* **sem fofoca & anti-clickbait**: remove redes de rodapé (*taboola*, *outbrain*, *revcontent*), desativa títulos apelativos em caixa alta no youtube e oculta editorias de fofoca nos portais de notícias.

---

### como instalar

1. baixe o projeto clicando em **code** > **download zip** (ou clone o repositório).
2. extraia o arquivo em uma pasta permanente.
3. no seu navegador, abra a página de extensões:
   * edge: `edge://extensions`
   * chrome: `chrome://extensions`
4. ative a opção **modo do desenvolvedor**.
5. clique em **carregar sem pacote** (ou *carregar sem compactação*) e selecione a pasta da extensão.

---

### nota legal & isenção de responsabilidade

> este software é distribuído sob a licença pública gplv3, exclusivamente para uso pessoal, estudo e acessibilidade visual do usuário (*client-side dom/css modification*).

* **sem intenção de dano**: este projeto não visa prejudicar, difamar ou causar perdas econômicas a qualquer empresa, veículo ou plataforma. não acessa nem modifica dados em servidores de terceiros.
* **soberania do dispositivo**: a extensão opera estritamente no navegador local do usuário, exercendo o direito de estilizar e controlar a renderização dos dados exibidos na sua própria tela.
* **sem garantias**: o projeto é fornecido *"no estado em que se encontra"* (*as is*). o usuário é o único responsável pela utilização da ferramenta. marcas citadas pertencem aos seus respectivos proprietários e são mencionadas apenas para fins descritivos (*nominative fair use*).
