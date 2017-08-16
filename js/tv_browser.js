// API Docs at:
// http://www.tvmaze.com/api


angular.module('tv_browser',[])
.controller('ShowSearchController', [
  'showService',
  '$sce',
  IndexControllerFunction
])
.factory('showService',[
  '$http',
  showService
])





function showService($http){
  return function showSearch(searchString) {
    return $http({
      method: 'GET',
      url: `http://api.tvmaze.com/search/shows?q=${searchString}`
    })
  }
}


function IndexControllerFunction(showService, $sce){
  this.selectShow = function(){
    this.currentShow=this.shows[this.selectedShowIndex]
    this.currentShow.show.summary = $sce.trustAsHtml(this.currentShow.show.summary)

  }
  this.search = function(){
    showService(this.searchString).then(response =>{
      this.shows = response.data
      console.log(this.shows)

    })

  }


}
