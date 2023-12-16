# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

### Scholarship Database Website
![image](https://github.com/ianpmaher/simply-scholars/assets/120536234/ee46442d-6426-4b32-86d7-068427d556e7)

**Live link to Deployment on Vercel: [https://simply-scholars-mxvkxuce6-ian-mahers-projects.vercel.app/](https://simply-scholars-mxvkxuce6-ian-mahers-projects.vercel.app/)**

I will be creating a website builder. I want to provide a templating solution for people to create and maintain their own webpages without needing to learn extensive code or spend hours troubleshooting. This is a scaleable project for schools to utilize in an open source framework.
For right now, I am going to focus on tools I wish I had as a guidance counselor, since the other solutions are too simple (Google Sites) or far too restrictive (BlackBoard) or far too expensive (SquareSpace, Wix).
This will also allow me to showcase how much tech I've been fortunate enough to learn over the course of this bootcamp. 

### Technologies

- Frontend: **Next.js 13/14** **Tailwind CSS**
- Backend: **Strapi** ( SQLite )
- _backup plan is going to be MongoDB Atlas because it's free and Django/maybe Flask_

### Dependencies: 
- Next.js
- Tailwind CSS
- Strapi (or your own Headless CMS) - with Postgres SQL
![image](https://media.git.generalassemb.ly/user/49628/files/b1ae58d8-3b9b-40f9-a154-3bb10b527428)


### Routes & Models :

**scholarship**
- id
- title: string, required
- description: string, required
- amount: int, required
- deadline: date (datetime for sql), required
- isActive: boollean (default: true)
- src: string [hopefully Strapi can handle this gracefully]

**scholarship requirements**
- id
- title: string
- description: string

**user**
- id
- email: string, required, unique
- nameFirst: string, required
- nameLast: string, required
- password: string, required, encrypted

> A list of routes (e.g. `POST /pins/ allows users to post a picture of a pin`)<br />
GET /home/ show user all scholarships

GET /scholarships/ show user all scholarships
GET /scholarships/:id show user specific scholarship (modal)
POST /scholarships/new create new scholarship
PUT /scholarships/edit/:id  edit scholarship details
DELETE /scholarships/:id delete specific scholarship

GET /user/ show user profile
GET /user/:id show user profile details

GET /scholarships/requirements/ show user explanation of the scholarship definitions
GET /scholarships/requirements/:id show user specific scholarship requirements details
POST /scholarships/requirements/new create new scholarship requirements details
PUT /scholarships/requirements/:id  edit scholarship requirement details
DELETE /scholarships/requirements/:id delete specific scholarship requirement detaills

### Wireframes
> Wireframes with basic page layouts<br />
> Copy and paste or drag and drop your images here.
![image](https://media.git.generalassemb.ly/user/49628/files/b30e9403-55c4-4cc4-9903-2998239fa840)
![image](https://media.git.generalassemb.ly/user/49628/files/684d01b4-2d79-4d62-9f91-f646f6f044d9)
![image](https://media.git.generalassemb.ly/user/49628/files/db44e7fe-41f1-4482-a60b-cb1103cd5aeb)

**example site**
![image](https://media.git.generalassemb.ly/user/49628/files/d3f5b16c-873b-4f02-8105-ee19997d5910)
![image](https://media.git.generalassemb.ly/user/49628/files/33de212c-c511-4197-8107-f29bb5208de5)


### User Stories
- As a guidance counselor, I want to be able to send out scholarship information with a digital interface.
- As a guidance counselor, I want to be able to personalize the scholarship information in a way beyond very basic things like Google Sites. 
- As a guidance counselor, I want to be able to create a scholarship website without needing to pay lots of money for something like Squarespace or Wix. 
- As a student, I want to have access to the most pertinent information about the scholarships, such as the award amount.
- As a student, I want to have be able to click on links to the scholarship applications all in one place.
- As a guidance counselor, I want to be able to maintain the scholarship information and update information efficiently.

### MVP Goals
- Fully functional public/student facing website that will use Next.js for the frontend and Strapi as a backend.
- The user will be able to edit their website very easily, with room for creativity and styling.
- Mobile responsiveness.
- Graceful error handling.
- Full CRUD functionality in all data collections. 

### Stretch Goals
- If I have enough time, reconfigure the app to use TYPESCRIPT.
- Allow the user to move stuff around on their website, instead of locking them into a particular layout. 
- Utilize Tailwind's Themes and such to allow user-defined themes to things.


<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
