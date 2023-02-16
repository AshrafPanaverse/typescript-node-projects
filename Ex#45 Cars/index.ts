function makeCar(manufacturer: string, model: string, options: {[key: string]: any}): {[key: string]: any} {
    const car: {[key: string]: any} = {
      manufacturer: manufacturer.charAt(0).toUpperCase() + manufacturer.slice(1),
      model: model.charAt(0).toUpperCase() + model.slice(1)
    };
    
    
    for (const [option, value] of Object.entries(options)) {
      car[option] = value;
    }
  
    return car;
  }
  
  const blackCar = makeCar('honda', 'outback', {color: 'black', tow_package: true});
  console.log(blackCar);
  
  const pinkCar = makeCar('suzuki', 'accord', {year: 1998, color: 'pink', headlights: 'popup'});
  console.log(pinkCar);
  