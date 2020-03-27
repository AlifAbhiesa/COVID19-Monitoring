
function getNews() {
    $.ajax({
        url:"http://newsapi.org/v2/everything?q=COVID-19&domains=detik.com&from=2020-03-01&sortBy=publishedAt&apiKey=3ea3b5c45dab4a8491123c8567648e72",
        type:"GET",
        success:function(response) {

            for(i=0;i<15;i++){
                $('#newsPlace').append('<div class="bg-white col-12 col-lg-4 p-2" style="border-radius:.8rem;box-shadow:0 0 4px 0 rgba(0,0,0,.05)">'
                +'<img class="card-img-top" src="'+response['articles'][i]['urlToImage']+'" alt="Card image cap">'
                +'<div class="card-body">'
                +'<div>'
                +'<label>'+ response['articles'][i]['author'] +' / '+ response['articles'][i]['publishedAt'] +'</label>'
                +'</div>'
                +'<h5 class="card-title">'+ response['articles'][i]['title'] +'</h5>'
                +'<p class="card-text">'+ response['articles'][i]['description'] +'</p>'
                +'<a href="'+response['articles'][i]['url']+'" style="color: burlywood;">Baca Selengkapnya ...</a><br>'
                +'</div>'
                +'</div>');
            }
            $( "#closeModal" ).click();
        },
        error:function(){
            alert('error');
        }
});
}