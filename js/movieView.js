function SearchView(searchTerms){
    this.results = searchTerms
    this.el = $('#movie-select')
    this.render(searchTerms)
}

SearchView.prototype= {
    render: function(searchTerms){
        $(this.el).removeAttr('hidden')
        $(this.el).append('<option>Options Matching: '+$('#movie-search').val()+'</option>');
        for (i=0;i<searchTerms.response.length;i++){
            $(this.el).append('<option value='+ i +'>'+searchTerms.response[i].Title +'</option>');
        }
        function getVal(sel){
            return (sel.value)
        }
        $(this.el).change(function(){
            $('#movie-detail').empty()
            var yas = getVal(this)
            $('#movie-detail').append('<h1>'+searchTerms.response[yas].Title+'</h1>')
            $('#movie-detail').append('<img src='+searchTerms.response[yas].Poster+' alt='+searchTerms.response[yas].Type+' />')
        })
    }
}
