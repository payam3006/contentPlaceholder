const q = console.log;

const load = () => {
  document.getElementById("img").innerHTML =
    '<img src="Astronaut-America-HD.jpg" alt="">';
  document.getElementById("title").innerText = "Lorem ipsum dolor sit amet";
  document.getElementById(
    "content"
  ).innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt in ullam ex, odit exercitationem nisi`;
  document.getElementById(
    "personImg"
  ).innerHTML = `<img src="Untitled-1 copy copy.JPG" alt="" class="personImg">`;
  document.getElementById("personName").innerText = "payam mohajerin";
  document.getElementById("date").innerText = "22 october 2024";
};

setTimeout(load, 2500);
