const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  });
}

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function(drivers) {
  let newDriversArray = drivers.slice(0).sort(function(d1, d2) {
    return d1.revenue - d2.revenue;
  })
  return newDriversArray
}

const driversByName = function(drivers) {
  let newDriversArray = drivers.slice(0).sort(function(d1,d2) {
    return d1.name.localeCompare(d2.name)
  })
  return newDriversArray
}

const totalRevenue = function(drivers) {
  return drivers.reduce(function(acc, driver) {
    console.log(tyeOf(driver.revenue))
    return acc + driver.revenue
    
  })
}
  