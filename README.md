##json proxy

The purpose is to create a webservice that makes API requests to registered endopoints and returns the values in JSON.

###Ex:

	1. <User> requests data about author from goodreads to the proxy
	2. <Proxy> redirects the <User>'s request to <Goodreads>
	3. <Goodreads> send response back to <Proxy>
	4. <Proxy> parsed the response
	5. <Proxy> sends JSON parsed response to <User>