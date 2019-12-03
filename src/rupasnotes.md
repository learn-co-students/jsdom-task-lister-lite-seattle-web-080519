Here are my notes on your solution. I didn't look at the OO branch because that looked like the original solution. Feel free to correct me if I'm wrong.
Functionality is superb. You even fixed the bugs in the original task lister, including the one where all the notes with the same content get deleted when clicking delete. There are no warnings or errors in the console, whooo!


In terms of how the master branch solution is coded, here are some tips. Do what you will with them:
	•	Think about how you can make this code more declarative. There's a lot going on in clickSubmit(), so it would be easier to understand this code if it were broken up into functions. 
  [x]For example, populating the note could be its own method (one that returns the note). 
  [x]Similarly, clearing the content from the fields could also be its own method.
	•	Since it's unlikely that the input fields, such as newTaskDescription, priority, and date, will ever change.
	[x] These variables can be converted to const. 
  [x] If you decide to make your code more declarative / modular, it would then be helpful to place these variables outside of clickSubmit() to make them more accessible to other functions. This means you could also remove those variable assignments from editNote().
	[ignore]•	On line 24, you can probably get away with testing for editMode only unless there's some edge case I'm not thinking of.
	•	On line 25, this would be considered a misuse of map(), since it's meant to be used to return a new array without mutating the source array. It is better to return either the noteIterator or note based on the index as opposed to manually mutating the array by indexing into it, and to then reassign the return value of map() to notesArray. Alternatively, use forEach() and mutate away! You could also use splice() since it mutates.
	[x]•	I would rename numberValue to priorityValue, or something like that so it's more obvious what this key relates to.
	[x]•	I can't read the yellow text against the pink background. Maybe choose a different color for Medium priority?
	[ok] •	Notes for appendOneNote are similar to clickSubmit(). Think about how to make this more declarative. For example, you could create a single function that returns one button rather than writing all the code for the edit and delete buttons line by line. The innerText and callback for each button are the only parts that differ.
	•	Line 79: I can't find a reason for the return. It seems the important part is the reassignment of notesArray after filtering. Also, since the code inside filter is a one-liner, you can switch to implicit return aka no curly braces, but parentheses instead around the condition being tested :scream:
[x]	•	Check out lines 85 and 93. Dupe editMode
[x] Extra feature: Change the submit button text based on whether you're editing or creating a new task.


Let me know if you have any questions or comments.