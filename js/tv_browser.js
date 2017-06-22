// API Docs at:
// http://www.tvmaze.com/api



    let showSelect = $('#show-select');
    let showDetail = $('#show-detail');
    const submit = $('input[type="submit"]')
    const search = $('input[type="search"]')

    showSelect.hide()

    submit.click(function(e){
        e.preventDefault();
        showSelect.show()
        query();
    });

    function query(){
        $.getJSON(`http://api.tvmaze.com/search/shows?q=${search.val()}`, function(res){
            console.log(res);
            appendResults(res);
            appendDetail(res)
        })
    }

    function appendResults(res){
        res.forEach(function(show, index){
            showSelect.append(`<option data-id="${index}">${show.show.name}</option>`)
        })
    }

    function appendDetail(res) {

        $('#show-select').change(function () {
            let detail = "";
            $("option:selected").each(function() {
                let showId = $("option:selected").attr('data-id')
                console.log(showId)
                detail = `<img src="${res[showId].show.image.medium}"><br><h2>${res[showId].show.name}</h2><p>${res[showId].show.summary}</p>`
            })
            $("#show-detail").html(detail)
        })
    }


