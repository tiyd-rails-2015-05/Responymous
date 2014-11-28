### User Stories

#### Instructors

##### I want to poll my class so that I can gauge their level of understanding.

* As instructor, I want to login via a social login provider so that the application knows my identity.

  * The app to do the following:
    * Setup authentication with HipChat
    * Setup authentication with Facebook (for demo day)
    * Setup authentication with Twitter (for demo day)
    * Setup authentication with with Google (for demo day)
    * Configure login and enable providers
    * Login user and store/retrieve user data
    * Identify that user is an instructor and not a student
    * Route user to Instructor UI upon successful login

* As instructor, I want to see a class list, so that I can confirm that I am receiving only responses from my students.

  * The app to do the following:
    * Retrieve the current class list of authenticated students
    * Show/hide class list in Instructor UI

* As instructor, I want to see a graphical display of class responses in real-time.

  * The app to do the following:
    * Default all authenticated students to a rating of 5 when polling begins
    * Calculate and adjust percentages based on student responses in real-time
    * Ignore all but the last response for each student
    * Synchronize data-binding of the UI with database backend
    * Display dynamic stacked progress bar in Instructor UI that adjusts as students submit responses
    * Display dynamic total number of active students that have submitted responses


#### Students

##### For a given lecture topic, I want to freely communicate when I do not understand so that the teaching experience is more effective for both my instructor and the class.

* As student, I want to login via a social login provider so that the application knows I am a member of the class.

  * The app to do the following:
    * Setup authentication with HipChat
    * Setup authentication with Facebook (for demo day)
    * Setup authentication with Twitter (for demo day)
    * Setup authentication with with Google (for demo day)
    * Configure login and enable providers
    * Login user and store/retrieve user data
    * Identify that user is a student and not an instructor
    * Route user to Student UI upon successful login

* As student, I want to rate my level of understanding so that my instructor can decide if he or she needs to re-explain a topic that I do not fully understand.

  * The app to do the following:  
    * Display a question with a series of response buttons (scaled 1 to 5)
    * Allow students to respond more than once for a given poll question
    * Enforce timed intervals for when a student can vote again
    * Store individual student responses in database

* As student, I want my responses to be anonymous in the class so that my responses are free from classmate comparison.

  * The app to do the following:
    * Aggregate student responses into polling percentages
