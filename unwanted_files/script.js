function search() {
  let resinput, filter, searchlist, li, a, i, txtvalue;
  resinput = document.getElementById("res-input");
  filter = resinput.value.toUpperCase();
  searchlist = document.getElementById("search-list");
  li = searchlist.getElementsByTagName("li");

  if (filter === "") {
    searchlist.style.display = "none";
  } else {
    searchlist.style.display = "block";
  }

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtvalue = a.textContent || a.innerText;
    if (txtvalue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function filter() {
  let restaurants = document.getElementsByClassName("restaurants");
  let vegres = document.getElementById("veg-res");
  let nonvegres = document.getElementById("Non-veg-res");
  let rest = document.getElementById("restaurants-type");
  let cafe = document.getElementById("Cafe-type");
  let dessert = document.getElementById("dessert-type");
  let breakfast = document.getElementById("breakfast");
  let lunch = document.getElementById("lunch");
  let dinner = document.getElementById("dinner");
  let bf = document.getElementById("budget-friendly");
  let mr = document.getElementById("mid-range");
  let us = document.getElementById("upscale");

  for (let i = 0; i < restaurants.length; i++) {
    restaurants[i].style.display = "block";
  }

  for (let i = 0; i < restaurants.length; i++) {
    let restaurant = restaurants[i];
    let isVeg = restaurant.classList.contains("veg");
    let isNonVeg = restaurant.classList.contains("nonveg");
    let isRest = restaurant.classList.contains("rest");
    let isCafe = restaurant.classList.contains("cafe");
    let isDessert = restaurant.classList.contains("dessert");
    let isBreakfast = restaurant.classList.contains("breakfast");
    let isLunch = restaurant.classList.contains("lunch");
    let isDinner = restaurant.classList.contains("dinner");
    let isBf = restaurant.classList.contains("bf");
    let isMr = restaurant.classList.contains("mr");
    let isUs = restaurant.classList.contains("us");

    ///////////veg

    //If both veg and nonveg selected
    if (vegres.checked && nonvegres.checked) {
      if (!isVeg && !isNonVeg) {
        restaurant.style.display = "none";
      }
    }
    //If only veg selected
    else if (vegres.checked) {
      if (!isVeg) {
        restaurant.style.display = "none";
      }
      //veg -> restaurents
      else if (rest.checked) {
        if (!isRest) {
          restaurant.style.display = "none";
        }
        //veg-> restaurents - > breakfast & lunch
        else if (breakfast.checked && lunch.checked) {
          if (!isBreakfast && !isLunch) {
            restaurant.style.display = "none";
          }
          //veg-> restaurents - > breakfast & lunch  -> all price range
          else if (bf.checked && mr.checked && us.checked) {
            if (!isBf && !isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > breakfast & lunch  -> bf & mr
          else if (bf.checked && mr.checked) {
            if (!isBf && !isMr) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > breakfast & lunch  -> mr & us
          else if (mr.checked && us.checked) {
            if (!isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > breakfast & lunch  -> bf & us
          else if (bf.checked && us.checked) {
            if (!isBf && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > breakfast & lunch  -> bf
          else if (bf.checked) {
            if (!isBf) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > breakfast & lunch  -> mr
          else if (mr.checked) {
            if (!isMr) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > breakfast & lunch  -> us
          else if (us.checked) {
            if (!isUs) {
              restaurant.style.display = "none";
            }
          }
        }
        //veg-> restaurents - >lunch & dinner
        else if (lunch.checked && dinner.checked) {
          if (!isLunch && !isDinner) {
            restaurant.style.display = "none";
          }
          //veg-> restaurents - >lunch & dinner -> all price range
          else if (bf.checked && mr.checked && us.checked) {
            if (!isBf && !isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >lunch & dinner -> bf & us
          else if (bf.checked && mr.checked) {
            if (!isBf && !isMr) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >lunch & dinner -> mr & us
          else if (mr.checked && us.checked) {
            if (!isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >lunch & dinner -> bf & us
          else if (bf.checked && us.checked) {
            if (!isBf && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >lunch & dinner -> bf
          else if (bf.checked) {
            if (!isBf) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >lunch & dinner -> mr
          else if (mr.checked) {
            if (!isMr) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >lunch & dinner -> us
          else if (us.checked) {
            if (!isUs) {
              restaurant.style.display = "none";
            }
          }
        }
        //veg-> restaurents - >breakfast & dinner
        else if (breakfast.checked && dinner.checked) {
          if (!isBreakfast && !isDinner) {
            restaurant.style.display = "none";
          }
          //veg-> restaurents - >breakfast & dinner -> all price range
          else if (bf.checked && mr.checked && us.checked) {
            if (!isBf && !isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >breakfast & dinner -> bf & mr
          else if (bf.checked && mr.checked) {
            if (!isBf && !isMr) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >breakfast & dinner -> mr & us
          else if (mr.checked && us.checked) {
            if (!isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >breakfast & dinner -> bf & us
          else if (bf.checked && us.checked) {
            if (!isBf && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >breakfast & dinner -> bf
          else if (bf.checked) {
            if (!isBf) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >breakfast & dinner -> mr
          else if (mr.checked) {
            if (!isMr) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >breakfast & dinner -> us
          else if (us.checked) {
            if (!isUs) {
              restaurant.style.display = "none";
            }
          }
        }
        //veg-> restaurents - > breakfast
        else if (breakfast.checked) {
          if (!isBreakfast) {
            restaurant.style.display = "none";
          }
          //veg-> restaurents - > breakfast - > all price range
          else if (bf.checked && mr.checked && us.checked) {
            if (!isBf && !isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > breakfast - > bf & mr
          else if (bf.checked && mr.checked) {
            if (!isBf && !isMr) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > breakfast - > mr & us
          else if (mr.checked && us.checked) {
            if (!isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > breakfast - > bf & us
          else if (bf.checked && us.checked) {
            if (!isBf && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > breakfast - > budget-friendly
          else if (bf.checked) {
            if (!isBf) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > breakfast - > mid-range
          else if (mr.checked) {
            if (!isMr) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > breakfast - > upscale
          else if (us.checked) {
            if (!isUs) {
              restaurant.style.display = "none";
            }
          }
        }
        //veg-> restaurents - >  lunch
        else if (lunch.checked) {
          if (!isLunch) {
            restaurant.style.display = "none";
          }
          //veg-> restaurents - >  lunch -> all price range
          else if (bf.checked && mr.checked && us.checked) {
            if (!isBf && !isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >  lunch -> bf & mr
          else if (bf.checked && mr.checked) {
            if (!isBf && !isMr) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >  lunch -> mr & us
          else if (mr.checked && us.checked) {
            if (!isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >  lunch -> bf & us
          else if (bf.checked && us.checked) {
            if (!isBf && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >  lunch -> bf
          else if (bf.checked) {
            if (!isBf) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >  lunch -> mr
          else if (mr.checked) {
            if (!isMr) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - >  lunch -> us
          else if (us.checked) {
            if (!isUs) {
              restaurant.style.display = "none";
            }
          }
        }
        //veg-> restaurents - > dinner
        else if (dinner.checked) {
          if (!isDinner) {
            restaurant.style.display = "none";
          }
          //veg-> restaurents - > dinner -> all price range
          else if (bf.checked && mr.checked && us.checked) {
            if (!isBf && !isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > dinner -> bf & mr
          else if (bf.checked && mr.checked) {
            if (!isBf && !isMr) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > dinner -> mr & us
          else if (mr.checked && us.checked) {
            if (!isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > dinner -> bf & us
          else if (bf.checked && us.checked) {
            if (!isBf && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > dinner -> bf
          else if (bf.checked) {
            if (!isBf) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > dinner -> mr
          else if (mr.checked) {
            if (!isMr) {
              restaurant.style.display = "none";
            }
          }
          //veg-> restaurents - > dinner -> us
          else if (us.checked) {
            if (!isUs) {
              restaurant.style.display = "none";
            }
          }
        }
      }
    }

    //If only nonveg selected
    else if (nonvegres.checked) {
      if (!isNonVeg) {
        restaurant.style.display = "none";
      }
      //nonveg -> restaurents
      else if (rest.checked) {
        if (!isRest) {
          restaurant.style.display = "none";
        }
        //nonveg-> restaurents - > breakfast & lunch
        else if (breakfast.checked && lunch.checked) {
          if (!isBreakfast && !isLunch) {
            restaurant.style.display = "none";
          }
          //nonveg-> restaurents - > breakfast & lunch  -> all price range
          else if (bf.checked && mr.checked && us.checked) {
            if (!isBf && !isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > breakfast & lunch  -> bf & mr
          else if (bf.checked && mr.checked) {
            if (!isBf && !isMr) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > breakfast & lunch  -> mr & us
          else if (mr.checked && us.checked) {
            if (!isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > breakfast & lunch  -> bf & us
          else if (bf.checked && us.checked) {
            if (!isBf && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > breakfast & lunch  -> bf
          else if (bf.checked) {
            if (!isBf) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > breakfast & lunch  -> mr
          else if (mr.checked) {
            if (!isMr) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > breakfast & lunch  -> us
          else if (us.checked) {
            if (!isUs) {
              restaurant.style.display = "none";
            }
          }
        }
        //nonveg-> restaurents - >lunch & dinner
        else if (lunch.checked && dinner.checked) {
          if (!isLunch && !isDinner) {
            restaurant.style.display = "none";
          }
          //nonveg-> restaurents - >lunch & dinner -> all price range
          else if (bf.checked && mr.checked && us.checked) {
            if (!isBf && !isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >lunch & dinner -> bf & us
          else if (bf.checked && mr.checked) {
            if (!isBf && !isMr) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >lunch & dinner -> mr & us
          else if (mr.checked && us.checked) {
            if (!isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >lunch & dinner -> bf & us
          else if (bf.checked && us.checked) {
            if (!isBf && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >lunch & dinner -> bf
          else if (bf.checked) {
            if (!isBf) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >lunch & dinner -> mr
          else if (mr.checked) {
            if (!isMr) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >lunch & dinner -> us
          else if (us.checked) {
            if (!isUs) {
              restaurant.style.display = "none";
            }
          }
        }
        //nonveg-> restaurents - >breakfast & dinner
        else if (breakfast.checked && dinner.checked) {
          if (!isBreakfast && !isDinner) {
            restaurant.style.display = "none";
          }
          //nonveg-> restaurents - >breakfast & dinner -> all price range
          else if (bf.checked && mr.checked && us.checked) {
            if (!isBf && !isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >breakfast & dinner -> bf & mr
          else if (bf.checked && mr.checked) {
            if (!isBf && !isMr) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >breakfast & dinner -> mr & us
          else if (mr.checked && us.checked) {
            if (!isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >breakfast & dinner -> bf & us
          else if (bf.checked && us.checked) {
            if (!isBf && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >breakfast & dinner -> bf
          else if (bf.checked) {
            if (!isBf) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >breakfast & dinner -> mr
          else if (mr.checked) {
            if (!isMr) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >breakfast & dinner -> us
          else if (us.checked) {
            if (!isUs) {
              restaurant.style.display = "none";
            }
          }
        }
        //nonveg-> restaurents - > breakfast
        else if (breakfast.checked) {
          if (!isBreakfast) {
            restaurant.style.display = "none";
          }
          //nonveg-> restaurents - > breakfast - > all price range
          else if (bf.checked && mr.checked && us.checked) {
            if (!isBf && !isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > breakfast - > bf & mr
          else if (bf.checked && mr.checked) {
            if (!isBf && !isMr) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > breakfast - > mr & us
          else if (mr.checked && us.checked) {
            if (!isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > breakfast - > bf & us
          else if (bf.checked && us.checked) {
            if (!isBf && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > breakfast - > budget-friendly
          else if (bf.checked) {
            if (!isBf) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > breakfast - > mid-range
          else if (mr.checked) {
            if (!isMr) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > breakfast - > upscale
          else if (us.checked) {
            if (!isUs) {
              restaurant.style.display = "none";
            }
          }
        }
        //nonveg-> restaurents - >  lunch
        else if (lunch.checked) {
          if (!isLunch) {
            restaurant.style.display = "none";
          }
          //nonveg-> restaurents - >  lunch -> all price range
          else if (bf.checked && mr.checked && us.checked) {
            if (!isBf && !isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >  lunch -> bf & mr
          else if (bf.checked && mr.checked) {
            if (!isBf && !isMr) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >  lunch -> mr & us
          else if (mr.checked && us.checked) {
            if (!isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >  lunch -> bf & us
          else if (bf.checked && us.checked) {
            if (!isBf && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >  lunch -> bf
          else if (bf.checked) {
            if (!isBf) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >  lunch -> mr
          else if (mr.checked) {
            if (!isMr) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - >  lunch -> us
          else if (us.checked) {
            if (!isUs) {
              restaurant.style.display = "none";
            }
          }
        }
        //nonveg-> restaurents - > dinner
        else if (dinner.checked) {
          if (!isDinner) {
            restaurant.style.display = "none";
          }
          //nonveg-> restaurents - > dinner -> all price range
          else if (bf.checked && mr.checked && us.checked) {
            if (!isBf && !isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > dinner -> bf & mr
          else if (bf.checked && mr.checked) {
            if (!isBf && !isMr) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > dinner -> mr & us
          else if (mr.checked && us.checked) {
            if (!isMr && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > dinner -> bf & us
          else if (bf.checked && us.checked) {
            if (!isBf && !isUs) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > dinner -> bf
          else if (bf.checked) {
            if (!isBf) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > dinner -> mr
          else if (mr.checked) {
            if (!isMr) {
              restaurant.style.display = "none";
            }
          }
          //nonveg-> restaurents - > dinner -> us
          else if (us.checked) {
            if (!isUs) {
              restaurant.style.display = "none";
            }
          }
        }
      }
    }

    //If all type selected
    else if (rest.checked && cafe.checked && dessert.checked) {
      if (!isRest && !isCafe && !isDessert) {
        restaurant.style.display = "none";
      }
      //all type -> all price range
      else if (bf.checked && mr.checked && us.checked) {
        if (!isBf && !isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //all type-> bf & mr
      else if (bf.checked && mr.checked) {
        if (!isBf && !isMr) {
          restaurant.style.display = "none";
        }
      }
      //all type-> mr & us
      else if (mr.checked && us.checked) {
        if (!isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //all type-> bf & us
      else if (bf.checked && us.checked) {
        if (!isBf && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //all type -> bf
      else if (bf.checked) {
        if (!isBf) {
          restaurant.style.display = "none";
        }
      }
      //all type-> mr
      else if (mr.checked) {
        if (!isMr) {
          restaurant.style.display = "none";
        }
      }
      //all type -> us
      else if (us.checked) {
        if (!isUs) {
          restaurant.style.display = "none";
        }
      }
    }
    // If restaurant & cafe selected
    else if (rest.checked && cafe.checked) {
      if (!isRest && !isCafe) {
        restaurant.style.display = "none";
      }
      //restaurant & cafe -> all price range
      else if (bf.checked && mr.checked && us.checked) {
        if (!isBf && !isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //restaurant & cafe -> bf & mr
      else if (bf.checked && mr.checked) {
        if (!isBf && !isMr) {
          restaurant.style.display = "none";
        }
      }
      //restaurant & cafe  -> mr & us
      else if (mr.checked && us.checked) {
        if (!isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //restaurant & cafe -> bf & us
      else if (bf.checked && us.checked) {
        if (!isBf && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //restaurant & cafe  -> bf
      else if (bf.checked) {
        if (!isBf) {
          restaurant.style.display = "none";
        }
      }
      //restaurant & cafe  -> mr
      else if (mr.checked) {
        if (!isMr) {
          restaurant.style.display = "none";
        }
      }
      //restaurant & cafe  -> us
      else if (us.checked) {
        if (!isUs) {
          restaurant.style.display = "none";
        }
      }
    }
    //If restaurant & dessert selected
    else if (rest.checked && dessert.checked) {
      if (!isRest && !isDessert) {
        restaurant.style.display = "none";
      }
      //restaurant & dessert -> all price range
      else if (bf.checked && mr.checked && us.checked) {
        if (!isBf && !isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //restaurant & dessert  -> bf & mr
      else if (bf.checked && mr.checked) {
        if (!isBf && !isMr) {
          restaurant.style.display = "none";
        }
      }
      //restaurant & dessert  -> mr & us
      else if (mr.checked && us.checked) {
        if (!isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //restaurant & dessert  -> bf & us
      else if (bf.checked && us.checked) {
        if (!isBf && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //restaurant & dessert -> bf
      else if (bf.checked) {
        if (!isBf) {
          restaurant.style.display = "none";
        }
      }
      //restaurant & dessert  -> mr
      else if (mr.checked) {
        if (!isMr) {
          restaurant.style.display = "none";
        }
      }
      //restaurant & dessert -> us
      else if (us.checked) {
        if (!isUs) {
          restaurant.style.display = "none";
        }
      }
    }
    //If cafe & dessert selected
    else if (cafe.checked && dessert.checked) {
      if (!isCafe && !isDessert) {
        restaurant.style.display = "none";
      }
      //cafe & dessert -> all price range
      else if (bf.checked && mr.checked && us.checked) {
        if (!isBf && !isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //cafe & dessert-> bf & mr
      else if (bf.checked && mr.checked) {
        if (!isBf && !isMr) {
          restaurant.style.display = "none";
        }
      }
      //cafe & dessert-> mr & us
      else if (mr.checked && us.checked) {
        if (!isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //cafe & dessert-> bf & us
      else if (bf.checked && us.checked) {
        if (!isBf && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //cafe & dessert -> bf
      else if (bf.checked) {
        if (!isBf) {
          restaurant.style.display = "none";
        }
      }
      //cafe & dessert-> mr
      else if (mr.checked) {
        if (!isMr) {
          restaurant.style.display = "none";
        }
      }
      //cafe & dessert-> us
      else if (us.checked) {
        if (!isUs) {
          restaurant.style.display = "none";
        }
      }
    }

    //If restaurents selected
    else if (rest.checked) {
      if (!isRest) {
        restaurant.style.display = "none";
      }
      //restaurents - > all meals
      else if (breakfast.checked && lunch.checked && dinner.checked) {
        if (!isBreakfast && !isLunch && !isDinner) {
          restaurant.style.display = "none";
        }
        //restaurents - > all meals -> all price range
        else if (bf.checked && mr.checked && us.checked) {
          if (!isBf && !isMr && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > all meals  -> bf & mr
        else if (bf.checked && mr.checked) {
          if (!isBf && !isMr) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > all meals  -> mr & us
        else if (mr.checked && us.checked) {
          if (!isMr && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > all meals -> bf & us
        else if (bf.checked && us.checked) {
          if (!isBf && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > all meals -> bf
        else if (bf.checked) {
          if (!isBf) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > all meals -> mr
        else if (mr.checked) {
          if (!isMr) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > all meals -> us
        else if (us.checked) {
          if (!isUs) {
            restaurant.style.display = "none";
          }
        }
      }
      //restaurents - > breakfast & lunch
      else if (breakfast.checked && lunch.checked) {
        if (!isBreakfast && !isLunch) {
          restaurant.style.display = "none";
        }
        //restaurents - > breakfast & lunch  -> all price range
        else if (bf.checked && mr.checked && us.checked) {
          if (!isBf && !isMr && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > breakfast & lunch  -> bf & mr
        else if (bf.checked && mr.checked) {
          if (!isBf && !isMr) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > breakfast & lunch  -> mr & us
        else if (mr.checked && us.checked) {
          if (!isMr && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > breakfast & lunch  -> bf & us
        else if (bf.checked && us.checked) {
          if (!isBf && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > breakfast & lunch  -> bf
        else if (bf.checked) {
          if (!isBf) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > breakfast & lunch  -> mr
        else if (mr.checked) {
          if (!isMr) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > breakfast & lunch  -> us
        else if (us.checked) {
          if (!isUs) {
            restaurant.style.display = "none";
          }
        }
      }
      //restaurents - >lunch & dinner
      else if (lunch.checked && dinner.checked) {
        if (!isLunch && !isDinner) {
          restaurant.style.display = "none";
        }
        //restaurents - >lunch & dinner -> all price range
        else if (bf.checked && mr.checked && us.checked) {
          if (!isBf && !isMr && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >lunch & dinner -> bf & us
        else if (bf.checked && mr.checked) {
          if (!isBf && !isMr) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >lunch & dinner -> mr & us
        else if (mr.checked && us.checked) {
          if (!isMr && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >lunch & dinner -> bf & us
        else if (bf.checked && us.checked) {
          if (!isBf && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >lunch & dinner -> bf
        else if (bf.checked) {
          if (!isBf) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >lunch & dinner -> mr
        else if (mr.checked) {
          if (!isMr) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >lunch & dinner -> us
        else if (us.checked) {
          if (!isUs) {
            restaurant.style.display = "none";
          }
        }
      }
      //restaurents - >breakfast & dinner
      else if (breakfast.checked && dinner.checked) {
        if (!isBreakfast && !isDinner) {
          restaurant.style.display = "none";
        }
        //restaurents - >breakfast & dinner -> all price range
        else if (bf.checked && mr.checked && us.checked) {
          if (!isBf && !isMr && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >breakfast & dinner -> bf & mr
        else if (bf.checked && mr.checked) {
          if (!isBf && !isMr) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >breakfast & dinner -> mr & us
        else if (mr.checked && us.checked) {
          if (!isMr && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >breakfast & dinner -> bf & us
        else if (bf.checked && us.checked) {
          if (!isBf && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >breakfast & dinner -> bf
        else if (bf.checked) {
          if (!isBf) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >breakfast & dinner -> mr
        else if (mr.checked) {
          if (!isMr) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >breakfast & dinner -> us
        else if (us.checked) {
          if (!isUs) {
            restaurant.style.display = "none";
          }
        }
      }
      //restaurents - > breakfast - > all price range
      else if (bf.checked && mr.checked && us.checked) {
        if (!isBf && !isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //restaurents - > breakfast - > bf & mr
      else if (bf.checked && mr.checked) {
        if (!isBf && !isMr) {
          restaurant.style.display = "none";
        }
      }
      //restaurents - > breakfast - > mr & us
      else if (mr.checked && us.checked) {
        if (!isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //restaurents - > breakfast - > bf & us
      else if (bf.checked && us.checked) {
        if (!isBf && !isUs) {
          restaurant.style.display = "none";
        }
      } else if (breakfast.checked) {
        if (!isBreakfast) {
          restaurant.style.display = "none";
        }
        //restaurents - > breakfast - > bf
        else if (bf.checked) {
          if (!isBf) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > breakfast - > mr
        else if (mr.checked) {
          if (!isMr) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > breakfast - > us
        else if (us.checked) {
          if (!isUs) {
            restaurant.style.display = "none";
          }
        }
      }
      //restaurents - >  lunch
      else if (lunch.checked) {
        if (!isLunch) {
          restaurant.style.display = "none";
        }
        //restaurents - >  lunch -> all price range
        else if (bf.checked && mr.checked && us.checked) {
          if (!isBf && !isMr && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >  lunch -> bf & mr
        else if (bf.checked && mr.checked) {
          if (!isBf && !isMr) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >  lunch -> mr & us
        else if (mr.checked && us.checked) {
          if (!isMr && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >  lunch -> bf & us
        else if (bf.checked && us.checked) {
          if (!isBf && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >  lunch -> bf
        else if (bf.checked) {
          if (!isBf) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >  lunch -> mr
        else if (mr.checked) {
          if (!isMr) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - >  lunch -> us
        else if (us.checked) {
          if (!isUs) {
            restaurant.style.display = "none";
          }
        }
      }
      //restaurents - > dinner
      else if (dinner.checked) {
        if (!isDinner) {
          restaurant.style.display = "none";
        }
        //restaurents - > dinner -> all price range
        else if (bf.checked && mr.checked && us.checked) {
          if (!isBf && !isMr && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > dinner -> bf & mr
        else if (bf.checked && mr.checked) {
          if (!isBf && !isMr) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > dinner -> mr & us
        else if (mr.checked && us.checked) {
          if (!isMr && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > dinner -> bf & us
        else if (bf.checked && us.checked) {
          if (!isBf && !isUs) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > dinner -> bf
        else if (bf.checked) {
          if (!isBf) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > dinner -> mr
        else if (mr.checked) {
          if (!isMr) {
            restaurant.style.display = "none";
          }
        }
        //restaurents - > dinner -> us
        else if (us.checked) {
          if (!isUs) {
            restaurant.style.display = "none";
          }
        }
      }
    }
    //If cafe selected
    else if (cafe.checked) {
      if (!isCafe) {
        restaurant.style.display = "none";
      }
      //cafe -> all price range
      else if (bf.checked && mr.checked && us.checked) {
        if (!isBf && !isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //cafe -> bf & mr
      else if (bf.checked && mr.checked) {
        if (!isBf && !isMr) {
          restaurant.style.display = "none";
        }
      }
      //cafe -> mr & us
      else if (mr.checked && us.checked) {
        if (!isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //cafe -> bf & us
      else if (bf.checked && us.checked) {
        if (!isBf && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //cafe -> bf
      else if (bf.checked) {
        if (!isBf) {
          restaurant.style.display = "none";
        }
      }
      //cafe -> mr
      else if (mr.checked) {
        if (!isMr) {
          restaurant.style.display = "none";
        }
      }
      //cafe -> us
      else if (us.checked) {
        if (!isUs) {
          restaurant.style.display = "none";
        }
      }
    }
    //If dessert selected
    else if (dessert.checked) {
      if (!isDessert) {
        restaurant.style.display = "none";
      }
      //dessert -> all price range
      else if (bf.checked && mr.checked && us.checked) {
        if (!isBf && !isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //dessert -> bf & mr
      else if (bf.checked && mr.checked) {
        if (!isBf && !isMr) {
          restaurant.style.display = "none";
        }
      }
      //dessert -> mr & us
      else if (mr.checked && us.checked) {
        if (!isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //dessert -> bf & us
      else if (bf.checked && us.checked) {
        if (!isBf && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //dessert -> bf
      else if (bf.checked) {
        if (!isBf) {
          restaurant.style.display = "none";
        }
      }
      //dessert -> mr
      else if (mr.checked) {
        if (!isMr) {
          restaurant.style.display = "none";
        }
      }
      //dessert -> us
      else if (us.checked) {
        if (!isUs) {
          restaurant.style.display = "none";
        }
      }
    }
    // If all meals selected
    else if (breakfast.checked && lunch.checked && dinner.checked) {
      if (!isBreakfast && !isLunch && !isDinner) {
        restaurant.style.display = "none";
      }
      //all meals -> all price range
      else if (bf.checked && mr.checked && us.checked) {
        if (!isBf && !isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //all meals -> bf & mr
      else if (bf.checked && mr.checked) {
        if (!isBf && !isMr) {
          restaurant.style.display = "none";
        }
      }
      //all meals -> mr & us
      else if (mr.checked && us.checked) {
        if (!isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //all meals -> bf & us
      else if (bf.checked && us.checked) {
        if (!isBf && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //all meals -> bf
      else if (bf.checked) {
        if (!isBf) {
          restaurant.style.display = "none";
        }
      }
      //all meals -> mr
      else if (mr.checked) {
        if (!isMr) {
          restaurant.style.display = "none";
        }
      }
      //all meals -> us
      else if (us.checked) {
        if (!isUs) {
          restaurant.style.display = "none";
        }
      }
    }
    // If breakfast & lunch selected
    else if (breakfast.checked && lunch.checked) {
      if (!isBreakfast && !isLunch) {
        restaurant.style.display = "none";
      }
      //breakfast & lunch -> all price range
      else if (bf.checked && mr.checked && us.checked) {
        if (!isBf && !isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //breakfast & lunch -> bf & mr
      else if (bf.checked && mr.checked) {
        if (!isBf && !isMr) {
          restaurant.style.display = "none";
        }
      }
      //breakfast & lunch -> mr & us
      else if (mr.checked && us.checked) {
        if (!isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //breakfast & lunch -> bf & us
      else if (bf.checked && us.checked) {
        if (!isBf && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //breakfast & lunch -> bf
      else if (bf.checked) {
        if (!isBf) {
          restaurant.style.display = "none";
        }
      }
      //breakfast & lunch -> mr
      else if (mr.checked) {
        if (!isMr) {
          restaurant.style.display = "none";
        }
      }
      //breakfast & lunch -> us
      else if (us.checked) {
        if (!isUs) {
          restaurant.style.display = "none";
        }
      }
    }
    //If lunch & dinner selected
    else if (lunch.checked && dinner.checked) {
      if (!isLunch && !isDinner) {
        restaurant.style.display = "none";
      }
      //lunch & dinner -> all price range
      else if (bf.checked && mr.checked && us.checked) {
        if (!isBf && !isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //lunch & dinner -> bf & mr
      else if (bf.checked && mr.checked) {
        if (!isBf && !isMr) {
          restaurant.style.display = "none";
        }
      }
      //lunch & dinner -> mr & us
      else if (mr.checked && us.checked) {
        if (!isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //lunch & dinner -> bf & us
      else if (bf.checked && us.checked) {
        if (!isBf && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //lunch & dinner -> bf
      else if (bf.checked) {
        if (!isBf) {
          restaurant.style.display = "none";
        }
      }
      //lunch & dinner -> mr
      else if (mr.checked) {
        if (!isMr) {
          restaurant.style.display = "none";
        }
      }
      //lunch & dinner -> us
      else if (us.checked) {
        if (!isUs) {
          restaurant.style.display = "none";
        }
      }
    }
    //breakfast & dinner selected
    else if (breakfast.checked && dinner.checked) {
      if (!isBreakfast && !isDinner) {
        restaurant.style.display = "none";
      }
      //breakfast & dinner -> all price range
      else if (bf.checked && mr.checked && us.checked) {
        if (!isBf && !isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //breakfast & dinner -> bf & mr
      else if (bf.checked && mr.checked) {
        if (!isBf && !isMr) {
          restaurant.style.display = "none";
        }
      }
      //breakfast & dinner -> mr & us
      else if (mr.checked && us.checked) {
        if (!isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //breakfast & dinner -> bf & us
      else if (bf.checked && us.checked) {
        if (!isBf && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //breakfast & dinner -> bf
      else if (bf.checked) {
        if (!isBf) {
          restaurant.style.display = "none";
        }
      }
      //breakfast & dinner -> mr
      else if (mr.checked) {
        if (!isMr) {
          restaurant.style.display = "none";
        }
      }
      //breakfast & dinner -> us
      else if (us.checked) {
        if (!isUs) {
          restaurant.style.display = "none";
        }
      }
    }
    // If breakfast selected
    else if (breakfast.checked) {
      if (!isBreakfast) {
        restaurant.style.display = "none";
      }
      //breakfast -> all price range
      else if (bf.checked && mr.checked && us.checked) {
        if (!isBf && !isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //breakfast -> bf & mr
      else if (bf.checked && mr.checked) {
        if (!isBf && !isMr) {
          restaurant.style.display = "none";
        }
      }
      //breakfast -> mr & us
      else if (mr.checked && us.checked) {
        if (!isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //breakfast -> bf & us
      else if (bf.checked && us.checked) {
        if (!isBf && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //breakfast -> bf
      else if (bf.checked) {
        if (!isBf) {
          restaurant.style.display = "none";
        }
      }
      //breakfast -> mr
      else if (mr.checked) {
        if (!isMr) {
          restaurant.style.display = "none";
        }
      }
      //breakfast -> us
      else if (us.checked) {
        if (!isUs) {
          restaurant.style.display = "none";
        }
      }
    }
    // If lunch selected
    else if (lunch.checked) {
      if (!isLunch) {
        restaurant.style.display = "none";
      }
      //lunch -> all price range
      else if (bf.checked && mr.checked && us.checked) {
        if (!isBf && !isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //lunch -> bf & mr
      else if (bf.checked && mr.checked) {
        if (!isBf && !isMr) {
          restaurant.style.display = "none";
        }
      }
      //lunch -> mr & us
      else if (mr.checked && us.checked) {
        if (!isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //lunch -> bf & us
      else if (bf.checked && us.checked) {
        if (!isBf && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //lunch -> bf
      else if (bf.checked) {
        if (!isBf) {
          restaurant.style.display = "none";
        }
      }
      //lunch -> mr
      else if (mr.checked) {
        if (!isMr) {
          restaurant.style.display = "none";
        }
      }
      //lunch -> us
      else if (us.checked) {
        if (!isUs) {
          restaurant.style.display = "none";
        }
      }
    }
    // If dinner selected
    else if (dinner.checked) {
      if (!isDinner) {
        restaurant.style.display = "none";
      }
      //dinner -> all price range
      else if (bf.checked && mr.checked && us.checked) {
        if (!isBf && !isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //dinner -> bf & mr
      else if (bf.checked && mr.checked) {
        if (!isBf && !isMr) {
          restaurant.style.display = "none";
        }
      }
      //dinner -> mr & us
      else if (mr.checked && us.checked) {
        if (!isMr && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //dinner -> bf & us
      else if (bf.checked && us.checked) {
        if (!isBf && !isUs) {
          restaurant.style.display = "none";
        }
      }
      //dinner -> bf
      else if (bf.checked) {
        if (!isBf) {
          restaurant.style.display = "none";
        }
      }
      //dinner -> mr
      else if (mr.checked) {
        if (!isMr) {
          restaurant.style.display = "none";
        }
      }
      //dinner -> us
      else if (us.checked) {
        if (!isUs) {
          restaurant.style.display = "none";
        }
      }
    } else if (bf.checked && mr.checked && us.checked) {
      if (!isBf && !isMr && !isUs) {
        restaurant.style.display = "none";
      }
    } else if (bf.checked && mr.checked) {
      if (!isBf && !isMr) {
        restaurant.style.display = "none";
      }
    } else if (mr.checked && us.checked) {
      if (!isMr && !isUs) {
        restaurant.style.display = "none";
      }
    } else if (bf.checked && us.checked) {
      if (!isBf && !isUs) {
        restaurant.style.display = "none";
      }
    } else if (bf.checked) {
      if (!isBf) {
        restaurant.style.display = "none";
      }
    } else if (mr.checked) {
      if (!isMr) {
        restaurant.style.display = "none";
      }
    } else if (us.checked) {
      if (!isUs) {
        restaurant.style.display = "none";
      }
    } else {
      restaurant.classList.remove("dummy");
    }
  }
}

// function myFunction() {
//   var x = document.getElementById("snackbar");
//   x.className = "show";
//   setTimeout(function () {
//     x.className = x.className.replace("show", "");
//   }, 3000);
// };

/////////////////////////
// Mobile
/////////////////////////

const headernav = document.querySelector(".main-nav");
const mblmenubtn = document.querySelector(".btn-mobile-nav");

mblmenubtn.addEventListener("click", function () {
  headernav.classList.toggle("nav-open");
});

const mobilefilter = document.querySelector(".mobile-filter-heading");
const mobilefilteroptions = document.querySelector(".filter-whole");

mobilefilter.addEventListener("click", function () {
  mobilefilteroptions.classList.toggle("hidden");
});

/////////////////////
////Smooth scrolling animation

const alllinks = document.querySelectorAll("a:link");

alllinks
  .forEach(function (link) {
    link.addEventListener("click", function (e) {
      // e.preventDefault();
      const href = link.getAttribute("href");

      ////////////scroll back to top
      // if (href === "#") {
      //   window.scrollTo({
      //     top: 0,
      //     behavior: "smooth",
      //   });
      // }

      ////Scroll to others
      // if (href !== "#" && href.startsWith("#")) {
      //   const sectionEl = document.querySelector(href);
      //   sectionEl.scrollIntoView({ behavior: "smooth" });
      // }

      /////Close Mobile nav

      if (link.classList.contains("nav-list-links")) {
        headernav.classList.toggle("nav-open");
      }
    });
  })
  /////////////////////
  ////Contack form

  $("#submit-form")
  .submit((e) => {
    e.preventDefault();
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbyvCeqGX_IkJ0J1Kwwk8O-8Au59aZWxYXFtd4l-o-IFHuH_7VTt00gdiS2l8mb4cbDR/exec",
      data: $("#submit-form").serialize(),
      method: "post",
      success: function (response) {
        // alert("Thank you")

        window.location.reload();
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error");
      },
    });
  });
