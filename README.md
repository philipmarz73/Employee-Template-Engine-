# Employee Template Engine

The task assigned for this Homework assignment was to build an Employee Template Engine, which takes in information about employees and generates an HTML webpage populated with examples of templates corresponding to different Employee types. The model is a Software Engineering Team composed of a Manager and any number of team members. The three classes of employee that are represented by their own template design are 'Manager', 'Engineer', and "Intern'. The Employees' first names appear, along with an ID number and email. Each template also bears personalized information in three different categories about the individual employee it represents. In order to accomplish this, I had to build a Node CLI capable of taking in information about employees and generating an HTML webpage that displays the 'employee type' in template form and returns the individuals' information and displays it in the template. All unit tests also had to be passed. 

The application prompts a User to input information using the CLI. Each team ostensibly contains at least one of each type of employee. Each is distinguished by at least one 'role-specific property': Managers have Office Numbers; Engineers a GitHub username, and Interns have their School affiliation appearing on their 'badges'. 


## Project Motivation

We were challenged to build a functional Node CLI that can take in information and subsequently generate an HTML webpage that coherently displays that information in a usable form and following a uniform format. The 'Inquirer' NPM package was essential to set up the framework to collect and organize this information. Jest was used to test the functionality of each JavaScript file and also for the testing of each Class of employee. These classes had a basic Employee parent class that the three specialized employee categories drew from, and extended. It was useful and instructive to view the 'construction' of these classes in this way, using 'Constructors' themselves. It was also instructive to see the data being incorporated and tested in the CLI itself, which then dynamically generated the HTML, without the need for CSS styling. This in particular motivated me to consider the potential to more dynamically render pages and elements in the browser.

We were invited to add some individual styling, which I did, using a brighter color palette with distinctive colors for each employee class, and experimenting with light-colored text against a darker background to further distinguish the Interns. I would like to explore more opportunities for styling, including determining a more flexible arrangement of the basic Bootstrap Cards on the page, and incorporating shading and other subtle styling touches to make the templates more visually-friendly.  


## Resources

Two image files were included to demonstrate functionality, showing the badge templates of "My Team" as they would appear on the browser. We were supplied with an Employee.js file in the 'lib' folder, which was the basis for constructing the .js files for the Engineer, Manager, and Intern employee classes. As mentioned the Inquirer npm package was installed, and Jest was used for testing. Both the 'Path' modules and the 'FS' modules were also required. 

## Video Links 

Find video links here to two videos exhibiting functionality:  https://drive.google.com/file/d/1-HC7Mtluv8ftqj1H9rgPTvLEDrzdYVPY/view
https://drive.google.com/file/d/1favNwTc1vvoAtCrbZQKBpKdn7Y2dQVC6/view

## Acknowledgments

It goes without saying (but I will say it anyway) that it is only my esteemed Instructor, Jonathan Watson, who makes my participation in this project at all possible; the TAs' help is essential every week, and my tutor Kris Renaldi keeps me on the right track, or puts me there when I can't find it. Also, my fellow student Steven Mccarther is always there to discuss, suggest, and cheerlead. I thank you all.


## License

&copy; MIT
