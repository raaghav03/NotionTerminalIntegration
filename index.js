require("dotenv").config();

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// importing inquire library to ease out command line questions
const inquirer = require("inquirer");

// Notion SDK
const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

function initialQuery() {
  const options = [
    {
      type: "list",
      name: "initialOption",
      message: "What do you want to do ",
      choices: ["list", "add"],
    },
  ];
  inquirer.prompt(options).then((options) => {
    if (options.initialOption == "list") listDatabaseItems();
    else if (options.initialOption == "add") addItemstoDatabase();
  });
}
initialQuery();

async function listDatabaseItems() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  response.results.forEach((page) => {
    const todoItem = page.properties["Todo Item"].title[0].plain_text;
    const priorityLevel = page.properties["Priority"].select.name;
    const taskDate = page.properties["Due Date"].date["start"];
    console.log(
      `${todoItem} is a ${priorityLevel} priority and has to be done by ${taskDate} \n`
    );
  });
}

async function addItemstoDatabase() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is the task you want to add?",
      name: "taskName",
    },
    {
      type: "list",
      message: "What is the level of priority of this task?",
      name: "priorityLevel",
      choices: ["low", "medium", "hard"],
    },
    {
      type: "input",
      message: "Enter the date for the task (YYYY-MM-DD)",
      name: "taskDate",
    },
  ]);

  try {
    const addItem = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        "Todo Item": {
          title: [
            {
              text: {
                content: answers.taskName,
              },
            },
          ],
        },
        Priority: {
          select: {
            name: answers.priorityLevel,
          },
        },
        "Due Date": {
          date: {
            start: answers.taskDate,
          },
        },
      },
    });
    console.log(
      `${answers.taskName} is added to the database with ${answers.priorityLevel} priority and date ${answers.taskDate}.`
    );
  } catch (error) {
    console.log(error);
  }
}
