### User Stories

#### Students

##### For a given lecture topic, I want to freely communicate when I do not understand so that the teaching experience is more effective for both my instructor and the class.

* As student, I want to login via a social provider so that I can conveniently let the application know my identity.

  * The app to do the following:
    * Setup Oauth authentication within HipChat and/or GitHub
    * Setup URL authentication (for demo day)
    * Configure login and enable providers
    * Login user and store/retrieve user data
    * Identify that user is a student and not an instructor
    * Route user to Student UI upon successful login

* As student, I want to rate my level of understanding so that my instructor can decide if he or she needs to re-explain a topic that I do not fully understand.

  * The app to do the following:  
    * Display a question with a series of response buttons (scaled 1 to 5)
    * Allow students to respond more than once for a given poll question
    * Display confirmation message after each button click
    * Store individual student responses in database

* As student, I want my responses to be anonymous in the class so that my responses are free from classmate comparison.

  * The app to do the following:
    * Aggregate student responses into polling percentages
    * Use hover and clicked states for mobile
    * Hide hover and click states for non-mobile views


#### Instructors

##### I want to poll my class so that I can gauge the class level of understanding.

* As instructor, I want to login via a social provider so that I can conveniently let the application know my identity.

  * The app to do the following:
    * Setup Oauth authentication within HipChat and/or GitHub
    * Configure login and enable login provider
    * Login user and store/retrieve user data
    * Identify that user is an instructor and not a student
    * Route user to Instructor UI upon successful login

* As instructor, I want to see a graphical display of class responses in real-time.

  * The app to do the following:
    * Default all authenticated students to a rating of 5 when polling begins
    * Calculate and adjust percentages based on student responses in real-time
    * Ignore all but the last response for each student
    * Synchronize data-binding of the UI with database backend
    * Display dynamic stacked progress bar in Instructor UI that adjusts as students submit responses
    * Display dynamic total number of students that have submitted responses

##### I want to see polling history by topic so that I can gauge individual student understanding.

  * The app to do the following:
    * Display input for customized poll questions with datepicker
    * Display start and stop poll buttons
    * Display class list with individual student polling data in a readable, tabular format
