// Data
const rest1 = {
  name: "The Dining Room",
  address:
    "No 39 Velachery Main Road, Near Raj Bhavan, Chennai (Madras) 600032 India ",
  website: "http://chennai.park.hyatt.com/en/hotel/dining/TheDiningRoom.html",
  menu: "http://chennai.park.hyatt.com/en/hotel/dining/TheDiningRoom.html",
  openinghours: "7:00 am - 11:00 pm",
  img: "the-dining-room",
  cuisines: "Italian, Mexican, Indian, Mediterranean",
  specialdiets: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
  meals: "Breakfast, Lunch, Dinner, Drinks",
  iframe:
    "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d163872.2451283577!2d80.15152293327425!3d12.989168347750894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d12.991004!2d80.21979499999999!5e0!3m2!1sen!2sin!4v1709137377806!5m2!1sen!2sin",
  maplink:
    "https://www.google.com/maps/dir//12.991004,80.219795/@12.9911316,80.1374735,12z?entry=ttu",
};

const rest2 = {
  name: "The Residency",
  address:
    "132 Residency T T K Road Crowne Plaza Chennai Adyar Park, Chennai (Madras) 600018 India",
  website: "https://www.ihg.com/chennai-india",
  menu: "https://www.zomato.com/chennai/the-residency-crowne-plaza-alwarpet/menu",
  openinghours: "12:30 pm - 3:00 pm | 7:30 pm - 11:30 pm",
  img: "the-residency",
  cuisines: "Indian, Asian, Street Food",
  specialdiets:
    "Vegetarian Friendly, Vegan Options, Halal, Gluten Free Options",
  meals: "Lunch, Dinner, Brunch, Drinks",
  iframe:
    "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d124387.01171682858!2d80.16728534460526!3d13.029678284677864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d13.02947!2d80.24969999999999!5e0!3m2!1sen!2sin!4v1708869516627!5m2!1sen!2sin",
  maplink:
    "https://www.google.com/maps/dir//13.02947,80.2497/@13.0296783,80.1672853,12z?entry=ttu",
};

const restaurantsarr = [rest1, rest2];

const res_name = document.querySelector(".rest-name");
const res_card = document.querySelectorAll(".restaurants");

const contentcontainer = document.querySelector(".content");

function displaycontent(rest) {
  // contentcontainer.innerHTML = " ";
  const html = `<header class="container header-flex">
  <h2 class="res-name">${rest.name}</h2>
  <ul class="res-details">
    <li class="location">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="location-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
      <span>${rest.address}</span>
    </li>
    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="website-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
      <span
        ><a
          href="${rest.website}"
          target="_blank"
          >Website</a
        ></span
      >
    </li>
    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="menu-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
        />
      </svg>
      <span
        ><a
          href="${rest.menu}"
          target="_blank"
          >Menu</a
        ></span
      >
    </li>
    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="clock-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <span>${rest.openinghours}</span>
    </li>
  </ul>
</header>
<main>
  <section class="container img-section">
    <div class="img-gallery">
      <img src="/img/${rest.img}1.jpg" alt="restaurent-image" />
      <img src="/img/${rest.img}2.jpg" alt="restaurent-image" />
      <img src="/img/${rest.img}3.jpg" alt="restaurent-image" />
      <img src="/img/${rest.img}4.jpg" alt="restaurent-image" />
      <img src="/img/${rest.img}5.jpg" alt="restaurent-image" />
      <img src="/img/${rest.img}6.jpg" alt="restaurent-image" />
    </div>
  </section>
  <section class="container details-section">
    <div class="box">
      <div class="heading">
        <h3>Details</h3>
      </div>
      <div class="details">
        <div class="detail-box">
          <p class="sub-heading">CUISINES</p>
          <p>${rest.cuisines}</p>
        </div>
        <div class="detail-box">
          <p class="sub-heading">SPECIAL DIETS</p>
          <p>${rest.specialdiets}</p>
        </div>
        <div class="detail-box">
          <p class="sub-heading">${rest.meals}</p>
          <p>Breakfast, Lunch, Dinner, Drinks</p>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="heading">
        <h3>Location</h3>
      </div>
      <div class="map">
        <iframe
          src="${rest.iframe}"
          width="100%"
          height="250"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="location-map">
        <a
          href="${rest.maplink}"
          target="_blank"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="location-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <span>${rest.address}</span></a
        >
      </div>
    </div>
  </section>
</main>`;

  contentcontainer.insertAdjacentHTML("afterbegin", html);
  console.log(html);
}

let currentrest = rest1;

res_card.forEach((card) => {
  card.addEventListener("click", function () {
    // alert("clicked");
    res_name.textContent = card.querySelector(".rest-name").textContent;
    currentrest = restaurantsarr.find(
      (res) => res.name === res_name.textContent
    );
    console.log(currentrest);
  });
});

displaycontent(currentrest);
// displaycontent(rest1);
