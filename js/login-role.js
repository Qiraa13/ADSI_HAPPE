const roleButtons = document.querySelectorAll('.role-button');

roleButtons.forEach(button => {
  button.addEventListener('click', () => {
    roleButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const selectedRole = button.getAttribute('data-role');
    console.log(`Peran yang dipilih: ${selectedRole}`);
    
    // Redirect jika mau langsung arahkan ke halaman lain
    // window.location.href = `${selectedRole}-login.html`;
  });
});
