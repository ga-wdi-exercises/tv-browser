### These are notes I took when I was digging this apart on Monday night.  I think I understand the concepts, but I'm still missing something. ###


what’s happening:

submit on click (some event)
	event.preventDefault (this prevents the submit action from submitting the title searched for)
	INSTEAD
that title searched for gets assigned to a variable.  for example:
	var title = movieSearch.val()

earlier in your code, you defined a variable movieSearch to equal the user input in the field that has index movie-search

so now, you’re taking the value of that field (instead of submitting it), and you are setting that value equal to the variable title.

then, you are taking that variable title, and inserting into the url for omdbapi, as a query string.  you need to use the escape command for that, so that js generates a new encoded string with that value title that can be seamlessly integrated into that url.

this is how you get the information back from the api re: whatever movie title has been searched for.
