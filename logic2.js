/* "search-term"
searchTerm
records
startYear
endYear

search-btn
clear-btn

articleDiv */
console.log("scriptsloaded")
    var searchTerm = $("#searchTerm").val().trim()
    var records = $("#records").val()
    var startYear = $("#startYear").val()+"0101"
    var endYear = $("#endYear").val()+"0101"
    
    function generateArticles(){
        for(var i = 0; i < records; i++){
            var articleDiv = $("<div>");
            var snippet = results[i].snippet;
            var p = $("<p>").text(snippet);
            var byLine = results[i].byline.original;
            var b = $("<p>").text(byLine);
            articleDiv.append(p);
            articleDiv.append(b);
            $("#articleDiv").prepend(articleDiv);
        }
    }



$("#search-btn").on("click", function(){

    var queryURL = ("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f4fb5f4efcc84af1b215d47ef81cd71f&p=" + 
    searchTerm + "&begin_date=" + startYear + "&end_date=" + endYear + "&page=0");

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(result){
        
        generateArticles()
        



    })
})


$("#clear-btn").on("click", function(){
    searchTerm.empty();
    records.empty();
    startYear.empty();
    endYear.empty();
})