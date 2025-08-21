document.getElementById("confirmForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const qtd = document.getElementById("qtd").value.trim();
  const mensagem = document.getElementById("mensagem");

  if (nome === "" || qtd === "" || qtd <= 0) {
    mensagem.textContent = "⚠️ Por favor, preencha seu nome e a quantidade de pessoas!";
    mensagem.className = "mt-5 text-center text-red-600 font-bold";
    mensagem.classList.remove("hidden");
    return;
  }

  mensagem.textContent = `🎉 Obrigado, ${nome}! Presença confirmada para ${qtd} pessoa(s).`;
  mensagem.className = "mt-5 text-center text-green-600 font-bold";
  mensagem.classList.remove("hidden");

  // Criar mensagem para WhatsApp
  const texto = `Olá!. Estou confirmando presença no aniversário da Liz Vitória 🎉🥳`;
  const url = `https://wa.me/5511978253599?text=${encodeURIComponent(texto)}`;

  // Redireciona diretamente para o WhatsApp
  window.location.href = url;

  // opcional: salvar no localStorage
  let convidados = JSON.parse(localStorage.getItem("convidados")) || [];
  convidados.push({ nome, qtd });
  localStorage.setItem("convidados", JSON.stringify(convidados));

  // resetar formulário
  document.getElementById("confirmForm").reset();
});
