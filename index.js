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
  const newDriverArray = drivers.slice(0)
  newDriverArray.sort(function(d1, d2) {
    return d1.revenue - d2.revenue;
  })
  return newDriverArray
}