// We are going to take an ice cream order and make one using call backs and promises.
/* ====== CALL BACKS ======= */

let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apples"],
  liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Peanuts"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);

    call_production();
  }, 2000);
  //call_production();
};
let production = () => {
  setTimeout(() => {
    console.log("Production has started");

    setTimeout(() => {
      console.log("The fruit has been chopped");

      setTimeout(() => {
        console.log(` ${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log("The machine has started");

          setTimeout(() => {
            console.log(`ice cream was placed on a ${stocks.holder[0]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added as toppings`);

              setTimeout(() => {
                console.log("serve ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 1000);
};

order(0, production);

/* ====== PROMISES ======= */

let stocks1 = {
  Fruits1: ["Strawberry", "Grapes", "Banana", "Apples"],
  liquid1: ["Water", "Ice"],
  holder1: ["Cone", "Cup", "Stick"],
  toppings1: ["Chocolate", "Peanuts"],
};

let is_shop_open = true;

let order1 = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

order1(2000, () => console.log(`${stocks1.Fruits1[0]} was selected`))
  .then(() => {
    return order1(1000, () => console.log("Production has started"));
  })

  .then(() => {
    return order1(2000, () => console.log("The fruit was chopped"));
  })

  .then(() => {
    return order1(1000, () =>
      console.log(
        ` ${stocks1.liquid1[0]} and ${stocks1.liquid1[1]} was selected`
      )
    );
  })

  .then(() => {
    return order1(1000, () => console.log("Start the machine"));
  })

  .then(() => {
    return order1(2000, () => {
      console.log(`Ice cream placed on ${stocks1.holder1[0]}`);
    });
  })

  .then(() => {
    return order1(3000, () => {
      console.log(`${stocks1.toppings1[0]} was selected`);
    });
  })

  .then(() => {
    return order1(1000, () => console.log("Ice cream was served"));
  })

  .catch(() => {
    console.log("Customer left"); // this is for when (is_shop_open = false;) this will also activate the else function declared earlier
  })

  .finally(() => {
    console.log("Day ended, shop is closed");
  });
