class App extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
     <main class="bg-[#0a192f]">
    <my-navbar></my-navbar>
    <home-page></home-page>
    <about-page></about-page>
    <major-project></major-project>
   
  </main>
    `;
  }
}

customElements.define('app-page', App);
