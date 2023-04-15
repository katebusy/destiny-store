const httpRequest = new XMLHttpRequest();
const url = 'http://localhost:8080/api/v1/items';
httpRequest.open("GET", url);
httpRequest.send();

httpRequest.onreadystatechange = (e) => {
  let container = document.getElementById("main_container");
  let content = "<div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3\">";

  let response = httpRequest.responseText
  let responseJson = JSON.parse(response);

  for (let i = 0; i < responseJson.length; i++) {
    let item = responseJson[i];

    content += "<div class=\"col  text-center\">\n"
        + "          <div class=\"card shadow-sm\">\n"
        + "            <!--Carucel-->\n"
        + "            <div id=\"myCarousel" + i
        + "\" class=\"carousel slide\" data-bs-interval=\"false\">\n"
        + "              <div class=\"carousel-indicators\">\n"
        + "                <button type=\"button\" data-bs-target=\"#myCarousel"
        + i + "\" data-bs-slide-to=\"0\" class=\"active\"\n"
        + "                        aria-current=\"true\" aria-label=\"Slide 1\"></button>\n"
        + "                <button type=\"button\" data-bs-target=\"#myCarousel"
        + i + "\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\"></button>\n"
        + "              </div>\n"
        + "              <div class=\"carousel-inner\">\n"
        + "                <div class=\"carousel-item active\">\n"
        + "                  <div class=\"container\">\n"
        + "                    <div class=\"carousel-caption\">\n"
        + "                      <img src=\"images/T-Shirt_huntcoloredblack.png\" width=\"100%\" height=\"100%\" alt=\""
        + item.type + " " + item.name + "\">\n"
        + "                    </div>\n"
        + "                  </div>\n"
        + "                </div>\n"
        + "                <div class=\"carousel-item\">\n"
        + "                  <div class=\"container\">\n"
        + "                    <div class=\"carousel-caption\">\n"
        + "                      <img src=\"images/T-Shirt_huntcoloredblack_folded.png\" width=\"100%\" height=\"100%\"\n"
        + "                           alt=\"" + item.type + " " + item.name
        + "\">\n"
        + "                    </div>\n"
        + "                  </div>\n"
        + "                </div>\n"
        + "              </div>\n"
        + "              <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#myCarousel"
        + i + "\" data-bs-slide=\"prev\">\n"
        + "                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n"
        + "                <span class=\"visually-hidden\">Previous</span>\n"
        + "              </button>\n"
        + "              <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#myCarousel"
        + i + "\" data-bs-slide=\"next\">\n"
        + "                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n"
        + "                <span class=\"visually-hidden\">Next</span>\n"
        + "              </button>\n"
        + "            </div>\n"
        + "            <!--Carucel end -->\n"
        + "            <div class=\"card-body\">\n"
        + "              <div>\n"
        + "                <p class=\"fs-3\">" + item.type + " " + item.name
        + "</p>\n"
        + "                <p class=\"quote\">«" + item.quoteText + "»</p>\n"
        + "                <p class=\"quote\">- (с)" + item.quoteAuthor
        + "</p>\n"
        + "                </p>\n"
        + "              </div>\n"
        + "              <div class=\"d-flex justify-content-between align-items-center\">\n"
        + "                <div class=\"btn-group\">\n"
        + "                  <!-- Кнопка-триггер модального окна 1-->\n"
        + "                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-bs-toggle=\"modal\"\n"
        + "                          data-bs-target=\"#modal" + i
        + "\">Просмотр\n"
        + "                  </button>\n"
        + "                  <a href=\"#\" class=\"btn btn-sm btn-outline-secondary\">В корзину</a>\n"
        + "                </div>\n"
        + "                <small class=\"text-body-secondary\">" + item.price
        + " ₽</small>\n"
        + "              </div>\n"
        + "            </div>\n"
        + "          </div>\n"
        + "        </div>\n";

    content += "<div class=\"modal fade\" id=\"modal" + i
        + "\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\" tabindex=\"-1\"\n"
        + "             aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\n"
        + "          <div class=\"modal-dialog\">\n"
        + "            <div class=\"modal-content mx-auto\" style=\"width: 838px;\">\n"
        + "              <div class=\"modal-header\">\n"
        + "                <p class=\"modal-title fs-2\">" + item.type
        + "</p>\n"
        + "                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Закрыть\"></button>\n"
        + "              </div>\n"
        + "              <div class=\"modal-body module\">\n"
        + "                <!--Carucel-->\n"
        + "                <div id=\"myCarouselmodal" + i
        + "\" class=\"carousel slide module col\" data-bs-interval=\"false\">\n"
        + "                  <div class=\"carousel-indicators\">\n"
        + "                    <button type=\"button\" data-bs-target=\"#myCarouselmodal"
        + i + "\" data-bs-slide-to=\"0\" class=\"active\"\n"
        + "                            aria-current=\"true\" aria-label=\"Slide 1\"></button>\n"
        + "                    <button type=\"button\" data-bs-target=\"#myCarouselmodal"
        + i + "\" data-bs-slide-to=\"1\"\n"
        + "                            aria-label=\"Slide 2\"></button>\n"
        + "                  </div>\n"
        + "                  <div class=\"carousel-inner\">\n"
        + "                    <div class=\"carousel-item active\">\n"
        + "                      <div class=\"container\">\n"
        + "                        <div class=\"carousel-caption\">\n"
        + "                          <img src=\"images/T-Shirt_huntcoloredblack.png\" width=\"100%\" height=\"100%\" alt=\" + "
        + item.type + " " + item.name + " + \">\n"
        + "                        </div>\n"
        + "                      </div>\n"
        + "                    </div>\n"
        + "                    <div class=\"carousel-item\">\n"
        + "                      <div class=\"container\">\n"
        + "                        <div class=\"carousel-caption\">\n"
        + "                          <img src=\"images/T-Shirt_huntcoloredblack_folded.png\" width=\"100%\" height=\"100%\"\n"
        + "                               alt=\" + " + item.type + " "
        + item.name + " + \">\n"
        + "                        </div>\n"
        + "                      </div>\n"
        + "                    </div>\n"
        + "                  </div>\n"
        + "                  <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#myCarouselmodal"
        + i + "\"\n"
        + "                          data-bs-slide=\"prev\">\n"
        + "                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n"
        + "                    <span class=\"visually-hidden\">Previous</span>\n"
        + "                  </button>\n"
        + "                  <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#myCarouselmodal"
        + i + "\"\n"
        + "                          data-bs-slide=\"next\">\n"
        + "                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n"
        + "                    <span class=\"visually-hidden\">Next</span>\n"
        + "                  </button>\n"
        + "                </div>\n"
        + "                <!--Carucel end -->\n"
        + "                <div class=\"card-body\">\n"
        + "                  <div>\n"
        + "                    <div class=\"module-text\">\n"
        + "                      <p class=\"fs-2\">" + item.name + "</p>\n"
        + "                      <p class=\"quote\">«" + item.quoteText
        + "»</p>\n"
        + "                      <p class=\"quote\">- (с)" + item.quoteAuthor
        + "</p>\n"
        + "                      <p>Цвет: " + item.color + "</p>\n"
        + "                      <p>Материал: " + item.material + "</p>\n"
        + "                    </div>\n"
        + "                  </div>\n"
        + "                  <div class=\"d-flex justify-content-between align-items-center\">\n"
        + "                    <div class=\"btn-group\">\n"
        + "                    </div>\n"
        + "                  </div>\n"
        + "                  <div class=\"modal-body\">\n"
        + "                    <div class=\"modal-footer\">\n"
        + "                      <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Назад</button>\n"
        + "                      <button type=\"button\" class=\"btn btn-primary\">"
        + item.price + " ₽</button>\n"
        + "                    </div>\n"
        + "                  </div>\n"
        + "                </div>\n"
        + "              </div>\n"
        + "            </div>\n"
        + "          </div>\n"
        + "        </div>\n";
  }

  content += "</div>";
  container.innerHTML = content;
}
