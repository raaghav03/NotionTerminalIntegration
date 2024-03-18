Getting Started
Prerequisites
Node.js installed on your system.
A Notion account and a Notion database set up for tasks.
The Notion Integration and API key.
Setup
Clone the Repository



git clone https://your-repository-link-here.git
cd NotionCLI
Install Dependencies

Copy code
npm install
Setting up Notion Integration

Go to Notion Integrations and create a new integration. Save the generated Internal Integration Token.
Share your Notion database with the integration by opening the database in Notion, clicking Share, and inviting the integration.
Configuration

Create a .env file in the project root directory and add your Notion API Key and Database ID:

makefile
Copy code
NOTION_KEY=<Your-Notion-API-Key>
NOTION_DATABASE_ID=<Your-Notion-Database-ID>
Finding Your Database ID: Open your Notion database in a browser. The URL will be something like https://www.notion.so/{workspace_name}/{database_id}?v={view_id}. The database_id is the long string of numbers and letters after your workspace name and before the ?v=.
Usage
To start the tool, run:

Copy code
node index.js
Follow the prompts to list database items or add a new task.

Adding a New Task
When choosing to add a new task, you'll be prompted for:

The task name.
The priority level (low, medium, hard).
The due date in the format YYYY-MM-DD.
Listing Tasks
Selecting the list option will display tasks from your Notion database, including their names, priority levels, and due dates.





Roadmap
Upcoming Features
Task Completion: Introduce the ability to mark tasks as complete.
Input Validation: Enhance validation for task names and dates to ensure data integrity.
Edge Case Handling: Improve resilience against API unavailability and database structure changes.
Enhancements
Task Editing: Enable updating tasks directly via the CLI.
Search and Filter: Implement functionality to easily locate tasks.
Technical Improvements
Testing: Add tests to ensure reliability.