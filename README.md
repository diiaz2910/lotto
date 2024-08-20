<div align="center">
  <a href="https://graphql.org/" target="_blank"><img src="https://graphql.org/img/logo.svg" width="120" alt="GraphQL Logo"></a>
  <img src="https://github.com/diiaz2910/assets-repo/blob/master/Typescript_logo_2020.svg-removebg-preview.png?raw=true" width="110">
  <img src="https://github.com/diiaz2910/assets-repo/blob/master/mongodb-logo-D13D67C930-seeklogo.com.png?raw=true" width="120"><br />
  <img src="https://github.com/diiaz2910/assets-repo/blob/master/png-transparent-js-logo-node-logos-and-brands-icon-removebg-preview.png?raw=true" width="90">
  <img src="https://github.com/diiaz2910/assets-repo/blob/master/png-transparent-google-colab-logo-tech-companies-removebg-preview.png?raw=true" width="140">
  <h1>Lotto Project
   </h1>
  <h2>https://lotto-dusky-one.vercel.app/api </h2><br/>
  <p>This Lotto project aims to display statistics about numbers in the New Zealand lottery game. It will present numbers and statistics obtained from Google Colab and display them on both web and mobile applications. The app is designed to be updated every time a game is played, ensuring that the data and statistics remain current. A copy of historical results is stored in a MongoDB database, and the data will be continuously modeled.


</p>
</div>

### 
<li>This project will hopefully shows coincidences between more than 1200 past games against sequences, and against Simple Consecutive Sequences:
Consecutive numbers, such as: 1, 2, 3, 4, 5 or 35, 36, 37, 38, 39.</li>
<li>
Constant Increment Sequences:
Numbers with a fixed increment between them, such as 2, 4, 6, 8, 10 (increment of 2) or 5, 10, 15, 20, 25 (increment of 5).</li>
<li>
Non-linear Increment Sequences:
Examples like 1, 5, 10, 15, 20 (non-constant increment but follows a non-linear arithmetic pattern) or 1, 10, 20, 30, 40 (increment of 9 between each number except the first).</li>
<li>
Geometric Increment Sequences:
Numbers multiplied by a constant value, such as 1, 2, 4, 8, 16 (multiplied by 2).</li>
<li>
Combined Sequences:
More complex examples, such as 1, 2, 3, 30, 31 (combining consecutive and non-consecutive) or 3, 6, 9, 12, 21 (increment of 3 and then a large jump).</li>

### Current Status:
COLAB Connected to MongoDB and fetching data done. GRAPHQL Server working receiving queries from playground/postman and pending to deploy on VERCEL.
Developing forms to connect front and back and writing graphql documentation on frontend project.
Evualuating best way to present charts and tables with search and sort.


<h2 id="installation">Installation</h2>
<p>To get started, clone this repository to your local machine:</p>
<pre><code class="language-bash">git clone https://github.com/diiaz2910/lotto.git
</code></pre>
<p>Then, install the dependencies using npm:</p>
<pre><code class="language-bash">npm install
</code></pre>


<h2 id="graphql">GraphQL Queries</h2>
<pre><code class="language-bash"><li>getBonuses, getLastBonus</li>
<li>getCombinations, getLastCombination</li>

<li>getPowerBalls, getLastPowerBall</li>
<li>getStrikes, getLastStrike</li>
</code></pre>

<h2 id="usage">Usage</h2>
<p>To run the project locally, use the following command:</p>
<pre><code class="language-bash">npm run dev
</code></pre>
<p>This will start the application in development mode. Open <a href="http://localhost:4500/api">http://localhost:4500/api</a> to view it in your browser.</p>
<h2 id="contribution">Contribution</h2>
<p>If you want to contribute to this project, follow these steps:</p>
<ul>
<li>Fork the repository.</li>
<li>Create a branch for your feature: <code>git checkout -b feature/FeatureName</code>.</li>
<li>Make your changes and commit describing your modifications: <code>git commit -am &#39;Add a new feature&#39;</code>.</li>
<li>Push to the branch: <code>git push origin feature/FeatureName</code>.</li>
<li>Open a pull request on GitHub.</li>
</ul>
<h2 id="project-structure">section</h2>
<p>section</p>
<pre><code class="language-java">
section
</code></pre>

