// API Docs at:
// http://www.tvmaze.com/api

$(document).ready(function(){
	// $('#show-select').hide()
	let input = $('#show-search')
	let button = $('#submit')

	button.click((e)=>{
		e.preventDefault()
		clearMenu()
		queryData()
		showDiv()
	})

	function showDiv(){
		$('#show-select').show()
	}

	function queryData() {
		$.getJSON( "http://api.tvmaze.com/search/shows?q="+input.val(), function( datas ) {
    			console.log(datas);
    			let data = datas
    			popList(data)
    			popDetail(data)
    		})
	}
	function popList(data) {
		for (let i = 0; i<data.length;i++){
			$('#show-select').append(`<option value="${i}">${data[i].show.name}</option>`)
		}

	}
 	function clearMenu() {
 		$('#show-select > *').remove()
 		$('#show-detail > *').remove()
 	}

 	function popDetail(data) {
 		
 		$('#show-select').change(function () {
			let text = "";
			$("option:selected").each(function() {
				let sel = $("option:selected").val()
				text = '<h3>'+data[sel].show.name+'</h3>'+
						data[sel].show.summary+
						'<img src="'+data[sel].show.image.medium+'">';
			})
			$( "#show-detail" ).html( text )
		})
 	}

})

	


// http://api.tvmaze.com/search/shows?q=
//ajax call
// ('#show-select').append(`<option>${data.show.name}</option>`)
