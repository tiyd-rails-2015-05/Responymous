### Respondimus User Stories

#### Instructor Users

##### I can poll the class so that I can gauge their level of understanding.
* Should see real-time graphic display of vote totals inside Chrome extension, using red-yellow-green circle display.
* Should initiate question and timer via extension UI.
* Should reset or clear an existing polling result.
* Should alert students via HipChat when next question has been launched.
* Instructor must supply OAuth token to identify himse/herself via extension.

#### Student Users

##### I can rate my understanding of a given lecture topic so that my teacher knows where the class is tracking.
* Student should load Chrome extension.
* Student must supply an OAuth token to identify himself/herself on Chrome extension.
* Student should click Chrome extension button to fire voting page in the browser.
* Browser should check if student is logged in before firing an event and prompt student to login if applicable.
* UI must include display of question and response scale of 1 to 5. 
* Student must click on or touch answer depending on viewport.
* Student responses should be added to Firebase.
* Should allow student to vote more than once where last vote is counted.
* Should communicate to Chrome extension polling results in real-time. 

##### I can ask my instructor a question via chat so that my teacher knows that I need further clarification for a given topic.
* Should have a button for posing questions.
* When clicked, button should launch HipChat window to private instructor message.
