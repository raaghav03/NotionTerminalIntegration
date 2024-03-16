require("dotenv").config();
const express = require("express");
const app = express();

// Notion SDK
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_KEY });

// async function listDatabaseItems() {
//   const response = await notion.databases.query({
//     database_id: process.env.NOTION_DATABASE_ID,
//   });

//   response.results.forEach((page) => {
//     const todoItem = page.properties["Todo Item"].title[0].plain_text;
//     const priority = page.properties["Priority"].select.name;
//     const dueDate=page.properties["Due Date"].date.start;

//      console.log(`The priority of the task - ${todoItem} is ${priority} and date is ${dueDate}`);
//   });
// }

let taskName=prompt("What is the task you want to add")

// listDatabaseItems();
