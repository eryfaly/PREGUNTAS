function iniciarCronometro() {
    var tiempoRestante = 30;
    var tiempoSpan = document.getElementById('tiempo');
    var submitButton = document.getElementById('submitButton');
  
    var interval = setInterval(function() {
      tiempoRestante--;
      tiempoSpan.textContent = tiempoRestante;
  
      if (tiempoRestante <= 0) {
        clearInterval(interval);
        alert('¡Se ha acabado el tiempo!');
        submitButton.disabled = true; 
        document.getElementById('Cuestionario').submit();
      }
    }, 1000);
  
    submitButton.addEventListener('click', function() {
      clearInterval(interval);
      procesarRespuestas(); 
      document.getElementById('Cuestionario').submit();
    });
  
    document.getElementById('resetButton').addEventListener('click', function() {
      clearInterval(interval);
      tiempoRestante = 30;
      tiempoSpan.textContent = tiempoRestante;
      submitButton.disabled = false; 
    });
  }
  
  function procesarRespuestas() {
    
  }
  
  window.onload = iniciarCronometro;
  


  function procesarRespuestas() {
    var respuestas = {
      pregunta1: document.getElementById('pregunta1').value,
      pregunta2: document.getElementById('pregunta2').value,
      pregunta3: document.getElementById('pregunta3').value,
      pregunta4: document.getElementById('pregunta4').value,
      pregunta5: document.getElementById('pregunta5').value
    };
  
    var resultado = "Respuestas:\n\n";
    var algunaRespuestaInvalida = false;
  
    for (var pregunta in respuestas) {
      var respuesta = respuestas[pregunta];
  
      if (respuesta.length < 5) {
        algunaRespuestaInvalida = true;
        resultado += pregunta + ": Respuesta inválida (debe tener al menos 5 caracteres)\n";
      } else {
        resultado += pregunta + ": " + respuesta + "\n";
      }
    }
  
    if (algunaRespuestaInvalida) {
      alert("¡Algunas respuestas son inválidas! Deben tener al menos 5 caracteres.");
    } else {
      alert(resultado);
    }
    disabled = true;
  }





  window.onload = iniciarCronometro;
    
