<div align="center">
  <h1>BOOKS-LIST</h1>

  Back-end for Books-list, an aplication that keeps your reading list fresh and updated.
  <br>
</div>
 <h2>About</h2>
 Books-List is a web app on which you can keep your reading list updated, adding your personal scores and overviews to your books. You can also insert the books you want to read, keeping your reading wish-list fresh.
  <br>
  <br>
 The app has the following funcionalities:
  <br>
  <br>
 
  - Adding the books you wish to read;
  - Updating the books you read, adding an optional score and overview;
  - Deleting the books you want;
  - Listing all the books added;
  - Listing the books by genre;
  
 <h2>Tecnologies</h2>
 The following tools and frameworks were used in the construction of the project:
 <br>
  <br>
 <p>

  <img style='margin: 5px;' src='https://img.shields.io/badge/NodeJS-323330?style=for-the-badge&logo=node.js&logoColor=F7DF1E'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/TypeScript-13cf35?style=for-the-badge&logo=typescript&logoColor=080808"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Express%20-%2320232a.svg?&style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
   <img style='margin: 5px;' src="https://img.shields.io/badge/Dotenv%20%20-%2320232a.svg?&style=for-the-badge&logo=dotenv"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Cors%20-%2320232a.svg?&style=for-the-badge&color=f28dc7&logo=cors&logoColor=%2361DAFB'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Postgres-09f68a?style=for-the-badge&logo=Postgres&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/>
</p>

  <h2>Documentation</h2>
   The following routes can be used with the app:
   
- POST: "/books"

 ``` json
     {
      "title": "book's title",
      "author": "book's author",
      "genre": "book's genre",
     }
 ```

 - GET: "/books"<br>
 Optional query parameter: genre (ex: /books?genre=fantasy)

- PUT: "/books/:id"
 ``` json
     {
      "score": "book's score from 0 to 10",
      "overview": "book's overview" 
     }
 ```
 - DELETE: "/books/:id"
 - GET: "/books-by-genre"
 
<h2>How to run</h2>
   
This app is deployed on Heroku (until 11/28/2022) at https://poc-bookslist.herokuapp.com. You can use this url to acess all routes.

#### Attached data base URI: 
postgres://dhyfiuspmbgcfz:08bdda97a318a4eb637a565a5594ef4f97442684a50561cadfa1ee6381f9d824@ec2-18-215-41-121.compute-1.amazonaws.com:5432/d5lkf4fv6pdlci

## Alternative
1. Clone this repository
2. Install all dependencies
```bash
npm i
```
3. Create the database following the file dump.sql
4. Configure the `.env` file following the file `.env.example` 
5. Run the app:
```bash
npx nodemon ./src/server.ts
```
