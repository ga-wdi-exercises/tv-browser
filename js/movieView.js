function SearchView(searchTerms){
    this.results = searchTerms
    this.el = $('#movie-select')
    this.render(searchTerms)
}

SearchView.prototype= {
    render: function(searchTerms){
        $(this.el).removeAttr('hidden')
        test = searchTerms
        for (i=0;i<searchTerms.response.length;i++){
            $(this.el).append('<option value='+ i +'>'+searchTerms.response[i].Title +'</option>');
        }
        $(this.el).change(function(){

        })
    }
}
