document.addEventListener("DOMContentLoaded", () => {
  // Hamburger + drawer
  const ham = document.querySelector(".hamburger");
  const drawer = document.querySelector(".drawer");
  ham.addEventListener("click", () => {
    const open = drawer.classList.toggle("open");
    ham.setAttribute("aria-expanded", open ? "true" : "false");
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
  });

  // Rotator (fade in/out)
  const rotItems = Array.from(document.querySelectorAll(".rot-item"));
  let rIndex = 0;
  function showRot() {
    rotItems.forEach((el,i)=> el.classList.toggle("show", i===rIndex));
    rIndex = (rIndex + 1) % rotItems.length;
  }
  if(rotItems.length) {
    showRot();
    setInterval(showRot, 4200); // change every 4.2s
  }

  // Projects search (client-side)
  const search = document.getElementById("projectSearch");
  const list = document.getElementById("projectsList");
  if(search && list){
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      Array.from(list.children).forEach(li => {
        const tags = (li.dataset.tags || "") + " " + (li.textContent || "");
        li.style.display = tags.toLowerCase().includes(q) ? "" : "none";
      });
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });
});
