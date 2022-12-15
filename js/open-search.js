function open_search_mobile(){
    const opensearch= document.getElementById('search-mobile')
    const opencancle = document.getElementById('cancle-btn')
    document.querySelector('#cancle-btn').style.display = 'block'
    document.querySelector('#search-mobile').style.display = 'block'
    // opensearch.classList.add('open-search')
    // opencancle.classList.add('open-search')
}   




function close_search_mobile(){
    const closesearch = document.getElementById('search-mobile')
    const closecancle = document.getElementById('cancle-btn')
    document.querySelector('#cancle-btn').style.display = 'none'
    document.querySelector('#search-mobile').style.display = 'none'
}