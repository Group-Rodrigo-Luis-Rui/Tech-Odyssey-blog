![image](https://github.com/Group-Rodrigo-Luis-Rui/4Geeks-Final-Project-Team-1/assets/64076622/d6055c00-dd38-4c66-8854-c8fe56856932)
  # Welcome to Tech Odyssey blog

## WebApp with React JS and Flask API

“Tech Odyssey blog” is an app where you can post and read reviews and opinions related to technology. There are 4 main themes like computers, movies related to tech, artificial inteligence and electric mobility as well as other topics that the user may find relevant.
On the main page you’ll find the 3 most recent posts and the posts listed by category where you can find an abstract and a link to the main post. Then there is a brief description of blog’s propose.<br>
After login or create account the user can create a post where can upload an image to wrap with the text.<br>
There is a “My Stuff” section where users can find their profile (“My Profile” subsection) with their information and a list of the posts created by them where posts can be deleted. There’s also a subsection, “My Readings” where users can find the posts they want to read later and after that they can delete from the reading list.<br>
Finally, the user can view the post in its entirety via the link on the main page, “My Profile” section or from “My Readings” that takes them to the single view page where they can add the post to the reading list.

### Instruction to test this Webapp

- Start backend;
```sh
$ pipenv run start
```
- Open the page and copy the backend URL;
- paste the backend URL on the .env file at #BACKEND_URL= (uncomment first);
- paste cloudinary credentials on the same file:
- 
- See below how to populate the blog with posts.



### Backend Populate Table Users and Posts

To insert test users in the database execute the following command:

```sh
$ flask insert-test-users 5
```

And you will see the following message:

```
  Creating test users
  test_user1@test.com created.
  test_user2@test.com created.
  test_user3@test.com created.
  test_user4@test.com created.
  test_user5@test.com created.
  Users created successfully!
```

To update with all yours tables you can edit the file app.py and go to the line 80 to insert the code to populate others tables

### Front-End Manual Installation:

-   Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

## Publish your website!

This boilerplate it's 100% read to deploy with Render.com and Heroku in a matter of minutes. Please read the [official documentation about it](https://start.4geeksacademy.com/deploy).

### Contributors

This template was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

You can find other templates and resources like this at the [school github page](https://github.com/4geeksacademy/).
