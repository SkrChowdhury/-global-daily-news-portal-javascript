// Load Categories and Display Them in List

const loadCategories = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCategories(data.data.news_category));
};

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById('catagories-container');
  categories.forEach((category) => {
    const categoriesLi = document.createElement('li');
    categoriesLi.classList.add('nav-item');

    categoriesLi.innerHTML = `
        <a onclick="loadNews('${category.category_id}')" class="nav-link active text-white rounded-pill" href="#"
              >${category.category_name}</a
        >
    `;
    categoriesContainer.appendChild(categoriesLi);
  });
};

// Display category wise news in card
const loadNews = (category_id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayNews(data.data));
};

const displayNews = (newsCards) => {
  const cardContainer = document.getElementById('card-container');
  newsCards.forEach((card) => {
    cardContainer.innerHTML = `
        <div class="card mb-3 shadow-lg rounded">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body m-3">
                  <h5 class="card-title">${card.title}</h5>
                  <p class="card-text">
                    ${card.details.slice(0, 400) + '...'}
                  </p>
                  <div
                    class="card-text d-flex justify-content-between align-items-center"
                  >
                    <div
                      class="d-flex align-items-center justify-content-start w-25"
                    >
                      <img
                        class="rounded-circle w-25 h-25"
                        src="${card.author.img}"
                        alt=""
                      />
                      <p class="mb-0 mx-2">${card.author.name}</p>
                    </div>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <i class="fa-solid fa-eye"></i>
                      <p class="mb-0 mx-2">${card.total_view}</p>
                    </div>
                    <div class="d-none d-lg-block">
                      <i class="fa-solid fa-star-half-stroke"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                    <div>
                      <button class="btn btn-danger rounded-pill" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Details
                      </button>
                      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              ...
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-danger rounded-pill" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
  </div>
</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
  });
};

loadCategories();

loadNews();
