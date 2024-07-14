<div align="center">
  <a href="https://graphql.org/" target="_blank"><img src="https://graphql.org/img/logo.svg" width="200" alt="GraphQL Logo"></a>
  <a href="https://www.apollographql.com/" target="_blank"><img src="https://global.discourse-cdn.com/business5/uploads/apollographql/original/1X/25bd5104d61020fe4dc0777a5919cd009bca633e.png" width="200" alt="Apollo Logo"></a>
  <h1>GraphQL as Microservice</h1>
  <p>"GraphQL as Microservice" is a project aimed at creating a modular GraphQL server architecture, deployed as a microservice, to seamlessly connect with various frontend applications. By dockerizing both the GraphQL server and the frontend applications, the project ensures portability and scalability. Utilizing AWS EC2 for deployment provides a reliable and scalable infrastructure. This setup allows for efficient development, easy integration with different frontend technologies, and robust deployment options for scalable applications.</p>
</div>


<p align="center">
  <a href="https://www.npmjs.com/package/graphql"><img src="https://img.shields.io/npm/dt/graphql" alt="Total NPM Downloads"></a>
  <a href="https://www.npmjs.com/package/graphql"><img src="https://img.shields.io/npm/v/graphql" alt="Latest Stable Version"></a>
  <a href="https://www.npmjs.com/package/graphql"><img src="https://img.shields.io/npm/l/graphql" alt="License"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@apollo/client"><img src="https://img.shields.io/npm/dt/@apollo/client" alt="Total NPM Downloads"></a>
  <a href="https://www.npmjs.com/package/@apollo/client"><img src="https://img.shields.io/npm/v/@apollo/client" alt="Latest Stable Version"></a>
  <a href="https://www.npmjs.com/package/@apollo/client"><img src="https://img.shields.io/npm/l/@apollo/client" alt="License"></a>
</p>


<h2 id="installation">Installation</h2>
<p>To get started, clone this repository to your local machine:</p>
<pre><code class="language-bash">git clone https://github.com/your_username/project_name.git
</code></pre>
<p>Then, install the dependencies using npm:</p>
<pre><code class="language-bash">npm install
</code></pre>
<h2 id="usage">Usage</h2>
<p>To run the project locally, use the following command:</p>
<pre><code class="language-bash">npm start
</code></pre>
<p>This will start the application in development mode. Open <a href="http://localhost:3000">http://localhost:3000</a> to view it in your browser.</p>
<h2 id="contribution">Contribution</h2>
<p>If you want to contribute to this project, follow these steps:</p>
<ul>
<li>Fork the repository.</li>
<li>Create a branch for your feature: <code>git checkout -b feature/FeatureName</code>.</li>
<li>Make your changes and commit describing your modifications: <code>git commit -am &#39;Add a new feature&#39;</code>.</li>
<li>Push to the branch: <code>git push origin feature/FeatureName</code>.</li>
<li>Open a pull request on GitHub.</li>
</ul>
<h2 id="project-structure">Project Structure (will update periodically)</h2>
<p>Description of the project&#39;s file and folder structure.</p>
<pre><code class="language-java">.
BACKEND (main folder)
node_modules/
src/
├── config/
│   └── index.ts
├── data/
│   └── data.json
├── mongo/
│   └── index.ts
├── graphql/
│   ├── index.ts
│   ├── resolvers/
│   │   ├── resolverInventory.ts
│   │   └── resolverPayments.ts
│   └── schemas/
│       ├── inventory.graphql
│       └── payments.graphql
└── index.ts
.env
.gitignore
package-lock.json
package.json
tsconfig.json
</code></pre>
<h2 id="dependencies">Dependencies</h2>
<p>List of the main project dependencies and their function:</p>
<ul>
<li><strong>React:</strong> JavaScript library for building user interfaces.</li>
<li><strong>React Router:</strong> Router for React applications.</li>
<li><strong>TypeScript:</strong> Typed superset of JavaScript.</li>
</ul>

