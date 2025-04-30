// Simples script para demonstrar interação
document.addEventListener('DOMContentLoaded', function () {
  // Adicionar efeito de hover nos cards de produto
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });

  // Simular notificação
  const notificationBtn = document.querySelector('button:nth-of-type(1)');
  notificationBtn.addEventListener('click', function () {
    alert('Você tem 3 notificações não lidas');
  });

  // Botão de ajuda
  const helpBtn = document.querySelector('button:nth-of-type(2)');
  helpBtn.addEventListener('click', function () {
    alert('Central de Ajuda - Entre em contato com nosso suporte');
  });
});
