document.querySelectorAll(".band").forEach(band => {
    band.addEventListener("click", () => {
      alert(`${band.dataset.season} のバンドがクリックされました！`);
    });
  });