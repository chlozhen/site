/////////////////////////////////////////////////
///////////// Repeatable Elements ///////////////
/////////////////////////////////////////////////

// notFound content: display a cat gif and redirect user to home page
class notFound extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <style>
            #cat-stretch {
                text-align: center;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .row {
                padding: 1px;
                border-radius: 10px;
                margin-bottom: 2px;
            }
            .img {
                height: auto;
                max-width: 100%;
                padding: 4px;
            }
        </style>
        <p>Work in Progress! Come back later.</p>
        <div id="cat-stretch" class="row">
            <img class="img"
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGM5NzAwOWU5ODkwYWM4ZDQwODg3MzU1Nzc4NTAyNGE3YmZlMDdjMiZjdD1n/NfzERYyiWcXU4/giphy.gif"
                height="200px" />
        </div>
        <a href="index.html" class="navLink">Return to Main Page</a>
    `;
  }
}


/////////////////////////////////////////////////
////////////// Running Functions ////////////////
/////////////////////////////////////////////////

customElements.define('test-element', notFound);