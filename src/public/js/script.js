document.getElementById('cadastroForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    
    const data = { email, nome, endereco };
    
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        const resData = await response.json();
        alert(resData.message);
      } else {
        const errorData = await response.json();
        alert('Erro: ' + errorData.error);
      }
    } catch (error) {
      alert('Erro de conexão');
    }
  });
  