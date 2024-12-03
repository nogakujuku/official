const targets_fade = document.getElementsByClassName("fade");
for (let i = targets_fade.length; i--; ) {
  let observer = new IntersectionObserver((entries, observer) => {
    for (let j = entries.length; j--; ) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add("active");
      } else {
        entries[j].target.classList.remove("active");
      }
    }
  });
  observer.observe(targets_fade[i]);
}

const targets_faderight = document.getElementsByClassName("fade-right");
for (let i = targets_faderight.length; i--; ) {
  let observer = new IntersectionObserver((entries, observer) => {
    for (let j = entries.length; j--; ) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add("active");
      } else {
        entries[j].target.classList.remove("active");
      }
    }
  });
  observer.observe(targets_faderight[i]);
}