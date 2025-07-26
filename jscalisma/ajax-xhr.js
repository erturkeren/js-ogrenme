/// AJAX AND XHR OBJECT // Serverde bulunan bir dosyaya ulaşma

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else if (xhr.status === 404) {
      console.log("kaynak yok ");
    }
  }
};

xhr.onprogress = function () {
  console.log("on progress");
};
xhr.open("GET", "msg.txt", true); // True async olur False sync
xhr.send();

console.log("Selam"); /// En başta gelir bloklanmaz Asycn sayesinde
