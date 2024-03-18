<h1>Notion CLI Tool</h1>

This CLI tool enables interaction with a Notion database, allowing users to list items or add new tasks directly from the terminal. It leverages the Notion SDK and the inquirer package for an interactive command-line experience.

<h2>Features</h2>
<ul>
<li>**List Database Items:** View a list of tasks, their priorities, and due dates from your Notion database.</li>
<li>**Add Items to Database:** Easily add new tasks with priorities and due dates to your Notion database.</li>
</ul>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
<li>Node.js installed on your system.</li>
<li>A Notion account and a Notion database set up for tasks.</li>
<li>The Notion Integration and API key.</li>
</ul>

<h2>Setup</h2>

<h3>Clone the Repository</h3>

```
git clone https://your-repository-link-here.git
cd NotionCLI
```
<h3>Install Dependencies</h3>

`npm install`

<h3>Setting up Notion Integration</h3>
<ul>
<li>Go to Notion Integrations and create a new integration. Save the generated Internal Integration Token.</li>
<li>Share your Notion database with the integration by opening the database in Notion, clicking Share, and inviting the integration.</li>
</ul>

<h3>Configuration</h3>

Create a .env file in the project root directory and add your Notion API Key and Database ID:
```
NOTION_KEY=<Your-Notion-API-Key>
NOTION_DATABASE_ID=<Your-Notion-Database-ID>
```
Finding Your Database ID: Open your Notion database in a browser. The URL will be something like `https://www.notion.so/{workspace_name}/{database_id}?v={view_id}` The database_id is the long string of numbers and letters after your workspace name and before the `?v=`


<h3>Usage</h3>
To start the tool, run:

`node index.js`

Follow the prompts to list database items or add a new task.

<h3>Adding a New Task</h3>
When choosing to add a new task, you'll be prompted for:
<ul>
<li>The task name.</li>
<li>The priority level (low, medium, hard).</li>
<li>The due date in the format YYYY-MM-DD.</li>
  </ul>
<h3>Listing Tasks</h3>
Selecting the list option will display tasks from your Notion database, including their names, priority levels, and due dates.





<h2>Roadmap</h2>
<h3>Upcoming Features</h3>
<ul>
<li>Task Completion: Introduce the ability to mark tasks as complete.</li>
<li>Input Validation: Enhance validation for task names and dates to ensure data integrity.</li>
<li>Edge Case Handling: Improve resilience against API unavailability and database structure changes.</li>
  </ul>
<h3>Enhancements</h3>
<ul>
<li>Task Editing: Enable updating tasks directly via the CLI.</li>
<li>Search and Filter: Implement functionality to easily locate tasks.</li>
</ul>

<h3>Technical Improvements</h3>
<ul><li>Testing: Add tests to ensure reliability</li></ul>
