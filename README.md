This is just a quick start kit with a basic configuration for a project with the following stack :
- TypeScript
- Express
- React
- Tailwind
- And ESLint + Prettier + Husky to guarantee consistency and respect for good practices.

Th purpose is not to waste time configuring a project and thus only worry about the code.
Here's the process to follow : 

1. The first thing you have to do is to create a database named "example". The aim is simply to test very quickly that everything is working correctly. Once your database is created, "use" it.

2. Now, run "CREATE TABLE example (
    id INT AUTO_INCREMENT PRIMARY KEY,
    example_name VARCHAR(255),
    example_something VARCHAR(255)
);"

3. And then, run "INSERT INTO example (example_name, example_something) VALUES
('Perfect!', 'Value 1'),
('Example 2', 'Value 2'),
('Example 3', 'Value 3'),
('Example 4', 'Value 4'),
('Example 5', 'Value 5'),
('Example 6', 'Value 6'),
('Example 7', 'Value 7'),
('Example 8', 'Value 8'),
('Example 9', 'Value 9'),
('Example 10', 'Value 10');
"

4. Clone this repository.
5. Open it & open a new terminal.
3. Rename it as you want and don't forget the "name" line of the package.json at the project's root.
4. Run "npm install".
5. Go to packages/backend & run "npm install".
6. Copy the .env.sample file & paste it into a new .env file.
7. Replace the values in the .env file and use the "example" database in a first time. Don't worry, the .env file is already mentioned in the .gitignore file.
6. Go to packages/frontend & run "npm install".
7. Copy the .env.sample file & paste it into a new .env file.
9. From the root, run "npm run dev", you should see something like "Local: http://localhost:xxxx/, Example app listening on port 9000!"
10. Go to the link... you will see an extremely basic home page.
11. Click on "Example details" in the Nav Bar ... If you can read a pinky "Perfect!", everything is ok, now you just have to code.
