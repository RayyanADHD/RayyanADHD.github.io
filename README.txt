REUSED CODE FROM A1 AND A2

1)index.html: My homepage html file
Line-1: This line indicates what is the document type and in our case is HTML.
Line-2: This line indicates the opening tag of html where all the code will be written and the “lang=en” shows the language of the website.
Line-3: Opening tag of head
Line-4:This line shows the charset attribute specifies the character encoding for the HTML document.
Line-5: title of the website
Line-6:Linking my css file to the html file
Line-7: This line is for adding a favicon that is displayed on the tab.
Line-8:Adding the meta tag for media tools
Line-9: Closing tag of head
Line-10: Opening tag of header
Line-11: Opening tag of nav
Line-13: anchor tags are used to add links to your website and this line is used for navigating through our three webpages. So,all my pages are linked in “href”. 
Line-16: Closing tag of nav
Line-17:Closing tag of header 
Line-18: Opening tag of body
Line-19:We create a div class for "hero-image" to add a hero image with "hero text"
Line-20:img tags for hero image
Line-21:Add div class for hero text
Line-22:Add hero text
Line-25:Close div tag
Line 26:p tags for introducing color schemes
Line 27:div class for color schemes
Line 28-30;:We add 3 buttons indicating 3 different color schemes
Line 31:Close div tag
Line-32:Adding division class "intro"
Line-33: My first header(h1) between opening/closing tags of h1
Line-34: My first sentence between <p> tags and <br> is used to break lines.
Line-35: Closing tag of the paragraph
Line-36:Closing tag of div class "intro"
Line-37: Second header
Line-38:Adding div class "gallery" for modifying my images
Line-39/41: Adding images on my website using img tag where src is the link of the image, alt is the alternate text and adjusting my images using width, length and height dimensions.Added respective classes to the images for external styling purposes.
Line-42:Closing tag of div class "gallery"
Line-43:Adding div class "main"
Line-44:Adding div class "about" within main for grid purposes
Line 45: Third header
Line 46-52: Another paragraph written while changing fonts of some words such as <strong> tag to make the text bold,<u> tag to make the text underlined,<mark> tag to highlight the text.
Line 53: Adding another image
Line 54:Closing div tag for "about"
Line 56:Opening tag for "list" within div class "main" for grid purposes
Line 57: My fourth header
Line 58: Opening tag of ul i.e unordered list where the list elements are displayed in bulletins and naming it as class "a"
Line 59-68: Using <li> tags are for list elements, I also added anchor tags to some words so that if they click on it, it will take them to their official respective websites.
Line 60-62:A yes/no question having 2 buttons which will display a fun fact if yes button is clicked
Line-69: Closing tag of ul
Line-70:Closing tag of div class "list"
Line-71:Closing tag of div class "main"
Line-72:Opening tag of form with id="myform" hacing onsubmit function and POST method
Line 73-76:Opening tag of p which adds a label to which the user has to "type" within the box his/her fullname followed by closing tag of p
Line 77-80:Opening tag of p which adds another label and "type" for user to type his/her dal mail and the box already has a value of "@dal.ca" within it.
Line 81-100: Two labels of type "select" followed by options for the user to select for their college year and the residence.
Line 101/104-: This time we add a textarea for the feedback for website.
Line 106:Input type submit for a submit button
Line 107:Closing tag for form
Line 111:A line written for my social media directory
Line 112-116: Adding images in anchor tags so the images will have links on them and when clicked will navigate it to my respective social media profiles.
Line 117: Closing tag of body
Line 119:Opening tag for script
Line 120:Declare a constant using id of the images we used for social media
Line 121-128:Adding an "event handler" such that if clicked a prompt pops up asking whether I would like to go to the respective social media platform.If agreed,it directs us to the page.
Line 129-146:Similar method done for the other social media platforms
Line 149:Closing tag of script
Line 150:Adding script tag to link the external javascript to the HTML file
Line 154: Closing tag of html


2)educational.html: My second html file(second webpage)
Lines 1-20: The lines of codes above are similar to that of index.html. The nav bar has one link navigating back to the homepage and we link the css file to the html file as well.


Line 21: Opening tag of body 
Line 22:Adding div class "school" for flexbox
Line 23-28:Similar to index.html we add 3 buttons of different colors to give 3 different color schemes.
Line 29: First header of the page and using <center> tag to center the text
Line 30-31: Few sentences written
Line 32: Opening tag of ol i.e. ordered list where the list elements are numbered.This time I already added styling for the nested lists in opening tags itself.
Line 34: First element of the list enclosed in <li> tags
Line 35: Opening tag of ul nesting an unordered list in an ordered one,also adding the styling within the opening tag rather than in external CSS.This has been done for the other ul lists as well.
Line 36-78: Adding elements in ul and ol respectively as well as adding some images after the end of every ordered list element
Line 73: Adding an embedded YouTube link to the <iframe> tags and controls so that the respective YouTube video can be played on my website.
Line 79: Closing tag for div class "school"
Line 80: Closing tag of body
Line 81:Adding script tag to link the external javascript to the HTML file
Line 82: Closing tag of html


3)hobbies.html: My third html file (third webpage)

Lines 1-17: The lines of codes above are similar to that of index.html. The nav bar has one link navigating back to the homepage and we link the css file to the html file as well.

Line 18: Opening tag of body 
Line 20-25:Similar to index.html we add 3 buttons of different colors to give 3 different color schemes.
Line 27: First header of the page and using <center> tag to center the text
Line 28: Few sentences written
Line 29-62: Adding another nested ordered list with unordered lists inside to describe all my hobbies.Already added styling for the nested lists in opening tags itself.
Line 50: Adding a video using <video> tags as well as controls and adding <source> tags for thr video link as well as it’s type i.e. mp4.
Line 58-60:Adding an audio using <audio> tags as well as controls and adding <source> tags for the audio link as well as its type.

Line 65: Opening tag for table
Line 66: Opening tag for tr i.e. adding of a row in a table
Line 67-70: Using th tags for adding columns to the table
Line 71-91: Adding 4 rows in the table using tr tags, between those tags I used <td> tags to add elements within the table row wise respectively.
Line 92: Closing tag for table
Line 95: Closing tag for body
Line 96: Adding script tag to link the external javascript to the HTML file
Line 97: Closing tag for html


4)mystyle.css: My first CSS file(linked to index.html)

Line 1-7: Styling my nav bar by adding background color,color,font size and aligning the text to the center.
Line 8-11: Styling h1 to the center
Line 12-32:Styling div class hero image,the hero image and hero text such that the hero text is on the hero image and centred between it while hero image is big enough to occupy a big section of the website
Line 33-59:Styling the buttons class, the design of the buttons and adding hovering colors for the respective color scheme
Line 61-66:Hovering colors for another set of buttons
Line 67-81:Adding respective background colors for the respective color scheme
Line 82-91:Styling the .intro class which is the start of the index.html file.Aligning text to center,adding background colord and colors as well as adding colored borders and border radius for curving them at the ends.Adding margin-top and bottom to have gap between other div classes.
Line 92-103:Styling .gallery class for my images in index.html by flex display to have my images of same size and give them borders,margins and paddings as well as borders etc.For displaying it with equal spaces,we use justfiy-content:space between.
Line 104-107:Another example of multiple selector by styling h2,h3,h4 for font size and text align.
Line 108-112: Styling my images respectively with paddings,borders and margins as suggested.
Line 113-121: Displaying my .main class as grid for .about and .list classes to be displayed as grid.Adding grid gap for neatness as well as grid-template for rows and columns which is used for how you want to divide your grid.
Line 122-133:Styling both classes within main(i.e .about and .list) so that they can be neatly divided.
Line 134-136:Styling my unordered list to display the bullets as squares.
Line 137-139:Styling my links to red color.


Line 141-170:Adding different stylings to my form such as input type text and email will have bolder boxes,paddings,widths etc. and input type submit will be colored and enlarged.


SELECTORS:
Universal Selector: 
Line 172:Font style remains normal for the whole website.
Multiple Selector:
Line 104:Multiple values are styled once.
Child selector:
Line 177:All p tags within the div classes will go through this change i.e. change in font size.
Adjacent Sibling Selector: 
Line 181:The selected li successor li will go through the change i.e. change in font family.
Sibling selector:
Line 185:Every first p after h1 will get styled red color and change in font family.
Attribute selector:
Line 190(and others): The class mentioned i.e. main will change to color white.
Psuedo Element selector:
Line 194:Every first line of an unordered list will change it's font style to italic.

Line 198-239:Media tools used for css styling webpage when it has max width till 768px
Here,the CSS styling is done on the basis of a mobile layout to make the website look presentable even on mobile thus images in my photo gallery are in one column rather in one row of desktop layout etc.

Line 240-305:Media tools used for css styling webpage when it has width from 768px till 1024pxHere,the CSS styling is done on the basis of a tablet layout to make the website look presentable even on tablet

5)mystyle2.css: My second CSS file(linked to educational.html)

Line 1-6:Displaying all the content within my educational.html webpage as a flexbox so that when minimized the whole webpage can still be displayed.

Line 7-33:Styling the buttons class, the design of the buttons and adding hovering colors for the respective color scheme
Line 35-46:Adding respective background colors for the respective color scheme
Line 47-51:Media tools used for css styling webpage when it has max width till 768px
Here,the CSS styling is done on the basis of a mobile layout to make the website look presentable even on mobile
Line 52-55:Media tools used for css styling webpage when it has width from 768px till 1024pxHere,the CSS styling is done on the basis of a tablet layout to make the website look presentable even on tablet

6)mystyle3.css: My third CSS file(linked to hobbies.html)

Line 1-7:Adding borders to my table and centering it using margin-left and right.
Line 8-12:Adding colors and padding within table cells to make the table look neat not much congested.

Line 13-40:Styling the buttons class, the design of the buttons and adding hovering colors for the respective color scheme
Line 41-53:Adding respective background colors for the respective color scheme

Line 54-70:Media tools used for css styling webpage when it has max width till 768px
Here,the CSS styling is done on the basis of a mobile layout to make the website look presentable even on mobile

Line 71-86:Media tools used for css styling webpage when it has width from 768px till 1024pxHere,the CSS styling is done on the basis of a tablet layout to make the website look presentable even on tablet


7)script.js:My first javascript file(linked to index.html)

Line 1-32:These are the edits used for color schemes.First we define the 3 buttons by taking id names.Then we add Event Listener for each button such that the background color of the respective color is added and rest removed.Font color and family changes have also been made.Similar process is done for the next two buttons.

Line 34-41:Javascript for the yes/no question in index.html.Introducing variable answer and if answer is picked yes, a fun fact sentence is displayed else nothing.This is an example of "notification" in Javascript.

Line 45-72:Function formsubmit() already been defined from the onsubmit form which declares 2 variables to find "conditionals" in javascript such as if the dropdown option has an option selected form will not be submitted thus an if else nested statement is made and shown.

8)script2.js:My second javascript file(linked to educational.html)

Line 1-32:These are the edits used for color schemes.First we define the 3 buttons by taking id names.Then we add Event Listener for each button such that the background color of the respective color is added and rest removed.Font color and family changes have also been made.Similar process is done for the next two buttons.

9)script3.js:My second javascript file(linked to hobbies.html)

Line 1-32:These are the edits used for color schemes.First we define the 3 buttons by taking id names.Then we add Event Listener for each button such that the background color of the respective color is added and rest removed.Font color and family changes have also been made.Similar process is done for the next two buttons.


ACM CITATION:
HeroImage.W3Schools https://www.w3schools.com/howto/howto_css_hero_image.asp [7 April 2023]
Emirates.Google.URL https://images.app.goo.gl/av7hhG3vLgE1WrEo7 [7 April 2023]
twitter.Google.URL https://images.app.goo.gl/zAzC7eBicFp8MvW86 [8 February 2023].
instagram.Google.URL https://images.app.goo.gl/MDbpNEfdn2xSwAif7 [8 February 2023]
linkedn.Google.URL https://images.app.goo.gl/sVnAMrsMgtWZoB4W9  [8 February 2023]
UAE.Google.URL https://images.app.goo.gl/NKhKMU7SeagTFfXK9  [8 February 2023]
Oman.Google.URL https://images.app.goo.gl/KWHotZGKGU4Tnoiw8  [8 February 2023]
DanceVideo.YouTube.URL https://www.youtube.com/embed/YAAdjOphJsU 
[8 February 2023]
Arsenal.Google.URL https://www.arsenal.com/ [8 February 2023]
Ariana Grande.Google.URL https://www.arianagrande.com/ [8 February 2023]
Chase Atlantic.Instagram.URL https://www.instagram.com/chaseatlantic/?hl=en [8 February 2023]



