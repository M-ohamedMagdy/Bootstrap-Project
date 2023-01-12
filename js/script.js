/* scroll event */

window.document.addEventListener("scroll",()=>{
    // arrow-up appears
    if(window.scrollY > 100) {
        if($("#arrow-up").hasClass("d-none")){
            $("#arrow-up").removeClass("d-none");
        }
        // navbar opacity
        $(".navbar").css("background-color","rgba(40, 58, 90, 0.9)")
    }
    else{
        if(!$("#arrow-up").hasClass("d-none")){
            $("#arrow-up").addClass("d-none");
        }

        $(".navbar").css("background-color","#37517e")
    }
})

/* portfolio images filtering */

$(".f-all").on("click", () => {
    $(".div-img-container").show();
    $(".portfolio-list-item").css({
        "background-color": "white",
        "border-color": "white",
        "color": "black"
    });
    $(".f-all").css({
        "background-color": "#47b2e4",
        "border-color": "#47b2e4",
        "color": "white"
    });
})

$(".f-app").on("click", () => {
    $(".filter-app").show();
    $(".filter-card").hide();
    $(".filter-web").hide();
    $(".portfolio-list-item").css({
        "background-color": "white",
        "border-color": "white",
        "color": "black"
    });
    $(".f-app").css({
        "background-color": "#47b2e4",
        "border-color": "#47b2e4",
        "color": "white"
    });
})

$(".f-card").on("click", () => {
    $(".filter-app").hide();
    $(".filter-card").show();
    $(".filter-web").hide();
    $(".portfolio-list-item").css({
        "background-color": "white",
        "border-color": "white",
        "color": "black"
    });
    $(".f-card").css({
        "background-color": "#47b2e4",
        "border-color": "#47b2e4",
        "color": "white"
    });
})

$(".f-web").on("click", () => {
    $(".filter-app").hide();
    $(".filter-card").hide();
    $(".filter-web").show();
    $(".portfolio-list-item").css({
        "background-color": "white",
        "border-color": "white",
        "color": "black"
    });
    $(".f-web").css({
        "background-color": "#47b2e4",
        "border-color": "#47b2e4",
        "color": "white"
    });
})

/* portfolio images title */

$(".div-img-container").hover((e)=>{
    if(e.type == 'mouseenter'){
        e.currentTarget.lastElementChild.classList.remove("d-none");
    }
    else if(e.type == 'mouseleave'){
        e.currentTarget.lastElementChild.classList.add("d-none");
    }
})
