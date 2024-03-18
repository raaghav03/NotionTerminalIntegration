require("dotenv").config();
const express = require("express");
const app = express();

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Notion SDK
const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

async function listDatabaseItems() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  response.results.forEach((page) => {
    const todoItem = page.properties["Todo Item"].title[0].plain_text;
    const priorityLevel = page.properties["Priority"].select.name;
    const taskDate = page.properties["Due Date"].date["start"];
    console.log(
      `${todoItem} is a ${priorityLevel} priority and has to be done by ${taskDate}`
    );
  });
}

listDatabaseItems();

// async function addItemstoDatabase() {
//   const response = await notion.databases.query({
//     database_id: process.env.NOTION_DATABASE_ID,
//   });

//   response.results.forEach((page) => {
//     const todoItem = page.properties["Todo Item"].title;
//     // console.log(todoItem);
//   });
//   rl.question("What is the task you want to add ? \n ", async (taskName) => {
//     try {
//       const addItem = await notion.pages.create({
//         parent: { database_id: process.env.NOTION_DATABASE_ID },
//         properties: {
//           "Todo Item": {
//             title: [
//               {
//                 text: {
//                   content: taskName,
//                 },
//               },
//             ],
//           },
//         },
//       });
//       console.log(`${taskName} is added to the db`);
//     } catch (error) {
//       console.error("Error adding the task to the database:", error);
//     } finally {
//       rl.close(); // Ensure readline is closed after the operation
//     }
//   });
// }
// addItemstoDatabase();
