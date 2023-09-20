
<img align="right" src="https://github.com/Group-Rodrigo-Luis-Rui/4Geeks-Final-Project-Team-1/assets/64076622/d6055c00-dd38-4c66-8854-c8fe56856932" />

# Welcome to Tech Odyssey blog

## WebApp with React JS and Flask API
<p align="justify">
    “Tech Odyssey blog” is an app where you can post and read reviews and opinions related to technology. There are 4 main themes like computers, movies related to tech, artificial inteligence and electric mobility as well as other topics that the user may find relevant.
On the main page you’ll find the 3 most recent posts and the posts listed by category where you can find an abstract and a link to the main post. Then there is a brief description of blog’s propose.<br>
After login or create account the user can create a post where can upload an image to wrap with the text.<br>
There is a “My Stuff” section where users can find their profile (“My Profile” subsection) with their information and a list of the posts created by them where posts can be deleted. There’s also a subsection, “My Readings” where users can find the posts they want to read later and after that they can delete from the reading list.<br>
Finally, the user can view the post in its entirety via the link on the main page, “My Profile” section or from “My Readings” that takes them to the single view page where they can add the post to the reading list.
</p>


### Instruction to test this Webapp

- Start backend;
```sh
pipenv run start
```
- Open the page and copy the backend URL;
- paste the backend URL on the .env file at "#BACKEND_URL=" (uncomment first);
- paste cloudinary credentials on the same file:
```
CLOUDINARY_CLOUD_NAME="deog4jy3t"
CLOUDINARY_UPLOAD_PRESET="u8sisass"
```
- See below how to populate the blog with fictional users and posts.
- Then, run the following command:
```sh
pipenv run start
```
### Backend populate table users and posts

To insert test fictional users and posts in the database got to backend web page and click on */api/hello*, as shown in image below.

![howto_populate](https://github.com/Group-Rodrigo-Luis-Rui/4Geeks-Final-Project-Team-1/assets/64076622/0857b175-cefa-4531-8827-373f04c8ea4b)


### Contributors
<a target="_blank" href="https://www.linkedin.com/in/ruisilva775/"><strong>Rui Silva<strong/><a/><br>
<a target="_blank" href="https://www.linkedin.com/in/lu%C3%ADs-miguel-lopes-santos-5a669370/"><strong>Luís Santos<strong/><a/><br>
<a target="_blank" href="https://www.linkedin.com/in/rodrigo-almeida-99181a277/"><strong>Rodrigo Almeida<strong/><a/>
