$(document).ready(function () {
  // open close menu side
  $(".menuIcon i").click(function () {
    $(".menu").addClass("active");
  });
  $(".close i").click(function () {
    $(".menu").removeClass("active");
  });

  //dropdown slide
  $(function () {
    $(".nav-links li").hover(
      function () {
        $(">ul.sub:not(:animated)", this).slideDown(350);
      },
      function () {
        $(">ul.sub", this).slideUp(70);
      }
    );
  });

  //dropdown icon rotate
  $(".menu-links .sub").hide();
  $(".mlist").click(function () {
    $(this).find(".rightIcn").toggleClass("ndeg udeg");
    $(this).next(".sub").slideToggle(200);
  });

  //product Categoriyaya gore uygunlasdirma

  let category = document.querySelectorAll(".category");
  let catContent = document.querySelectorAll(".content .all");

  for (let i = 0; i < category.length; i++) {
    category[i].addEventListener(
      "click",
      filterContents.bind(this, category[i])
    );
  }

  function filterContents(item) {
    changeActive(item);
    for (let i = 0; i < catContent.length; i++) {
      if (catContent[i].classList.contains(item.attributes.id.value)) {
        catContent[i].style.display = "block";
      } else catContent[i].style.display = "none";
    }
  }
  function changeActive(activeitem) {
    for (let i = 0; i < category.length; i++) {
      category[i].classList.remove("active2");
    }
    activeitem.classList.add("active2");
  }
});
