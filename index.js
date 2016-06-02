/*
    * LOVELY THINGS
    */

              


var options = {
  valueNames: [ 'name', 'description', 'category' ]
};

var featureList = new List('externship-sites', options);

$('#filter-breakfast').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "breakfast") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-lunch').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "lunch") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-dinner').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "dinner") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-affordable').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "affordable") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-luxury').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "luxury") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-coffee').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "coffee") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-beverages').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "beverages") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-rooftop').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "rooftop") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-hotels').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "hotels") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-street').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "street") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-none').click(function() {
  featureList.filter();
  return false;
});

if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }