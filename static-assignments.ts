import { Assignment } from "./assignment";

export const ASSIGNMENTS: Assignment[] = [
  {
    id: "HTML-11",
    title: "Basics",
    instructions: ["First", "First", "First", "First"],
    code: `
function(){
  var test;
}
    `,
  },
  {
    id: "HTML-12",
    title: "Pyramid",
    instructions: ["First", "First", "First", "First"],
    code: "function(){}",
  },
  {
    id: "HTML-13",
    title: "Your Page",
    instructions: ["First", "First", "First", "First"],
    code: "function(){}",
  },
  {
    id: "HTML-14",
    title: "Challenges",
    instructions: ["First", "First", "First", "First"],
    code: "function(){}",
  },
  {
    id: "HTML-15",
    title: "Columns",
    instructions: ["First", "First", "First", "First"],
    code: "function(){}",
  },
  {
    id: "HTML-17",
    title: "What do you need?",
    instructions: ["A folder", "A new file – pyramid.html"],
    code: "",
  },
  {
    id: "HTML-18",
    title: "Set up",
    instructions: [
      "Inside the folder – Create a new HTML page - call it pyramid.html",
      "Using HTML tag, create basic HTML",
      "Inside <title> tag, give it a title, e.g. your name",
      "Link bootstrap to this page inside <head>",
      "Change background color of body to dark. Apply class=“bg-dark” to <body>",
    ],
    code:
      '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">',
  },
  {
    id: "HTML-19",
    title: "Challenge 1",
    instructions: [
      "Inside the body - Create a section ",
      "Give it h2 heading – “Section 1”",
      "Create 1 row",
      "Divide the row into 4 EQUAL columns, write column number inside each column",
      "Center the text inside the row. Use “text-center” class on the row div",
    ],
    code: `
<div class="container">
        <div class="row bg-warning">
          <div class="col-sm-3 border text-center">1</div>
          <div class="col-sm-3 border text-center">2</div>
          <div class="col-sm-3 border text-center">3</div>
          <div class="col-sm-3 border text-center">4</div>
        </div>
 </div>
      `,
  },
  {
    id: "HTML-20",
    title: "Challenge 2",
    instructions: [
      "Inside the body – create another section",
      'Give it h2 heading – “Section 2"',
      "Divide the section into 6 EQUAL columns , write column number inside each column",
      "Center the text inside the row. Use “text-center” class on the row div",
    ],
    code: `
<div class="container">
        <div class="row bg-warning">
          <div class="col-sm-2 border text-center">1</div>
          <div class="col-sm-2 border text-center">2</div>
          <div class="col-sm-2 border text-center">3</div>
          <div class="col-sm-2 border text-center">4</div>
          <div class="col-sm-2 border text-center">5</div>
          <div class="col-sm-2 border text-center">6</div>
        </div>
 </div>
      `,
  },
  {
    id: "HTML-21",
    title: "Challenge 3",
    instructions: [
      "Inside the body – create another section",
      'Give it h2 heading – “Section 3"',
      "Create 2 rows",
      "Divide first row into 4 EQUAL columns , write column number inside each column",
      "Divide next row into 3 EQUAL columns , write column number inside each column",
      "Center the text inside the row. Use “text-center” class on the row div",
    ],
    code: `
<div class="container">
        <div class="row bg-warning">
          <div class="col-sm-3 border text-center">1</div>
          <div class="col-sm-3 border text-center">2</div>
          <div class="col-sm-3 border text-center">3</div>
          <div class="col-sm-3 border text-center">4</div>
        </div>
        <div class="row bg-warning">
          <div class="col-sm-4 border text-center">1</div>
          <div class="col-sm-4 border text-center">2</div>
          <div class="col-sm-4 border text-center">3</div>
        </div>
 </div>
      `,
  },
  {
    id: "HTML-22",
    title: "Challenge 4",
    instructions: [
      "Inside the body – create another section",
      'Give it h2 heading – “Section 4"',
      "Create 3 rows",
      "Divide first row into 4 EQUAL columns , write column number inside each column",
      "Divide next row into 3 EQUAL columns , write column number inside each column",
      "Divide next row into 2 EQUAL columns , write column number inside each column",
      "Center the text inside the row. Use “text-center” class on the row div",
    ],
    code: "",
  },
  {
    id: "HTML-23",
    title: "Challenge 5",
    instructions: [
      "Inside the body – create another section",
      'Give it h2 heading – “Section 5"',
      "Create 3 rows",
      "Divide next row into 2 columns , write column number inside each column",
      "Divide next row into 3 columns , write column number inside each column",
      "Divide next row into 4 columns , write column number inside each column",
      "Center the text inside the row. Use “text-center” class on the row div",
    ],
    code: "",
  },
  {
    id: "HTML-24",
    title: "Challenge 6",
    instructions: [
      "Change the background color of each section that you created, by applying one of the following classes on section – ",
      "bg-dark",
      "bg-light",
      "bg-info",
      "bg-danger",
      "bg-primary",
    ],
    code: ``,
  },
  {
    id: "HTML-25",
    title: "How many columns in a row? - Challenge 1",
    instructions: [
      "Create a new HTML page - call it columns.html",
      "Using HTML tag, create basic HTML",
      "Inside <title> tag, give it a title, e.g. your name",
      "Link bootstrap to this page inside <head>",
      "Change background color of body to dark. Apply class=“bg-dark” to <body>",
      "Create a section inside <body>",
      "Create container and row divs",
      "Inside first row, create a column using col-1, write column number inside it",
      "Center the text",
      "Add a border to the column by applying class='border'",
    ],
    code: `
<div class="container">
  <div class="row">
    <div class="col-1 border">1</div>
  </div>
</div>
    `,
  },

  {
    id: "HTML-26",
    title: "How many columns in a row? - Challenge 1",
    instructions: [
      "Keep adding columns to the row just created, write column number inside it",
      "Center the text",
      "Add a border to the column by applying class='border'",
    ],
    code: `
<div class="container">
  <div class="row">
    <div class="col-1 border">1</div>
    <div class="col-1 border">1</div>
  </div>
</div>
    `,
  },
  {
    id: "HTML-27",
    title: "How many columns in a row? - Challenge 1",
    instructions: ["How many columns were you able to create?"],
    code: ``,
  },
  {
    id: "HTML-28",
    title:
      "How many columns in a row with a different column size? - Challenge 2",
    instructions: [
      "Add a total of 12 columns to the row you created using class='col-1'",
      "Create a new row",
      "This time add a column using class='col-2', write column number inside it",
      "Center the text",
      "Add a border to the column by applying class='border'",
      "Keep adding columns with class col-2",
      "How many columns are you able to create before it goes to next row?",
    ],
    code: ``,
  },
  {
    id: "HTML-29",
    title:
      "How many columns in a row with a different column size? - Challenge 2",
    instructions: ["How many columns were you able to create this time?"],
    code: ``,
  },
  {
    id: "HTML-30",
    title: "Stairs - Challenge 1",
    instructions: [
      "Create a new HTML page - call it stairs.html",
      "Using HTML tag, create basic HTML",
      "Inside <title> tag, give it a title, e.g. your name",
      "Link bootstrap to this page inside <head>",
      "Change background color of body to dark. Apply class=“bg-dark” to <body>",
      "Create a section inside <body>",
      "Create container and row divs",
      "Inside first row, create a column using col-2, write column number inside it",
      "Apply class='bg-danger border'",
      "To make the total number of columns in this row as 12, create another column with col-10, leave it blank",
    ],
    code: ``,
  },
  {
    id: "HTML-31",
    title: "Stairs - Challenge 2",
    instructions: [
      "Create another row",
      "Create a column using col-2, write column number inside it",
      "Apply class='bg-danger border'",
      "Create another column with col-2, write column number inside it",
      "To make the total number of columns in this row as 12, create another column with col-8, leave it blank",
    ],
    code: ``,
  },
  {
    id: "HTML-32",
    title: "Stairs - Challenge 3",
    instructions: [
      "Create another row",
      "This time add 3 columns using class='col-2' write column number inside it",
      "Apply class='bg-danger border' to each column",
      "To make the total number of columns in this row as 12, create another column with col-6, leave it blank",
    ],
    code: ``,
  },
  {
    id: "HTML-33",
    title: "Stairs - Challenge 4",
    instructions: [
      "Create another row",
      "This time add 4 columns using class='col-2' write column number inside it",
      "Apply class='bg-danger border' to each column",
      "To make the total number of columns in this row as 12, create another column with col-4, leave it blank",
    ],
    code: ``,
  },

  {
    id: "HTML-34",
    title: "Stairs - Challenge 5",
    instructions: [
      "Create another row",
      "This time add 5 columns using class='col-2' write column number inside it",
      "Apply class='bg-danger border' to each column",
      "To make the total number of columns in this row as 12, do you need to add any additional column? If so how many?",
    ],
    code: ``,
  },
  {
    id: "HTML-35",
    title: "Stairs - Challenge 6",
    instructions: [
      "Create another row",
      "This time add 6 columns using class='col-2' write column number inside it",
      "Apply class='bg-danger border' to each column",
      "To make the total number of columns in this row as 12, do you need to add any additional column? If so how many?",
    ],
    code: ``,
  },
  {
    id: "HTML-36",
    title: "Inverse Stairs - Challenge 7",
    instructions: [
      "Create a new section",
      "Create a pedestal that is the inverse of the pedestal you just created. That is, first row should have 6 equal columns, second should have 5 columns, third should have 4 columns, fourth should have 3 columns, fifth should have 2 columns, sixth should have 1 columns",
      "Fill each column with a column number and color of your choice",
    ],
    code: ``,
  },
  {
    id: "HTML-37",
    title: "Pedestal - Challenge 1",
    instructions: [
      "Create a new HTML page - call it pyramid.html",
      "Using HTML tag, create basic HTML",
      "Inside <title> tag, give it a title, e.g. your name",
      "Link bootstrap to this page inside <head>",
      "Change background color of body to dark. Apply class=“bg-dark” to <body>",
      "Create a new section inside <body>",
      "Create a container and row div",
      "Create a col 5 units wide using col-5, leave it empty",
      "Create a col 2 units widee using col-2, and put column number in. Fill the column with a color using class='bg-danger' ",
      "To make the total number of columns in this row as 12, create another col 5 units wide, leave it empty",
    ],
    code: ``,
  },
  {
    id: "HTML-38",
    title: "Pedestal - Challenge 2",
    instructions: [
      "Add a row",
      "Create a col 4 units wide using col-4, leave it empty",
      "Create two columns 2 units wide using col-2, and put column number in. Fill the column with a color using class='bg-danger' ",
      "To make the total number of columns in this row as 12, create another col 4 units wide, leave it empty",
    ],
    code: ``,
  },
  {
    id: "HTML-39",
    title: "Pedestal - Challenge 3",
    instructions: [
      "Add a row",
      "Create a col 3 units wide using col-3, leave it empty",
      "Create three columns 2 units wide using col-2, and put column number in. Fill the column with a color using class='bg-danger' ",
      "To make the total number of columns in this row as 12, create another col 3 units wide, leave it empty",
    ],
    code: ``,
  },
  {
    id: "HTML-40",
    title: "Pedestal - Challenge 4",
    instructions: [
      "Add a row",
      "Create a col 2 units wide using col-2, leave it empty",
      "Create four columns 2 units wide using col-2, and put column number in. Fill the column with a color using class='bg-danger' ",
      "To make the total number of columns in this row as 12, create another col 2 units wide, leave it empty",
    ],
    code: ``,
  },
];
