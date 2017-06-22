// API Docs at:
// http://www.tvmaze.com/api
    let select = $(‘#show-select’);
    	let details = $(‘#show-detail’);

    const submit = $(‘input[type=“submit”]‘)
    	const search = $(‘input[type=“search”]‘)



   select.hide()
   // Hide
	   


	   function selections(response){
	        response.forEach(function(show, i){
	            select.append(`<option id="${i}">${show.show.name}</option>`)
	        })
	    }

	   function description(response) {

	       $(‘#show-select’).change(function () {
	            let desc = “”;
	            $(“option:selected”).each(function() {
	                let id = $(“option:selected”).attr(‘id’)
	                desc = `<h1>${response[id].show.name}</h1>
	                	<img src="${response[id].show.image.medium}">
	                		<p>${response[id].show.summary}</p>`
	           })
	            details.html(desc)
	        })
	    }

		       function search(){
		        $.getJSON(`http://api.tvmaze.com/search/shows?q=${search.val()}`, function(response){
		            selections(response);
		            	description(response)
		        })
		    }

				   submit.click(function(e){
				        e.preventDefault();
				        	select.show()
				        		search();
				    });


