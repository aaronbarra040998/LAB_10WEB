import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  isFormValid: boolean = false;

  onSubmit() {
    // Lógica para enviar el formulario
  }

  onInputChange() {
    // Verificar la validación de los campos y actualizar isFormValid
    this.isFormValid = this.nombre.trim() !== '' && this.isValidEmail(this.email);
  }

  private isValidEmail(email: string): boolean {
    // Realizar una validación básica del formato del correo electrónico
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailPattern.test(email);
  }

  onEnviarClick(event: Event) {
    if (!this.isFormValid) {
      event.preventDefault();
      alert('Por favor, complete correctamente todos los campos antes de enviar.');
    } else {
      const resultado = `
        Nombre: ${this.nombre}
        Email: ${this.email}
      `;
  
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(resultado);
      } else {
        alert('No se pudo abrir una nueva ventana emergente. Verifica la configuración de tu navegador.');
      }
    }
  }
}  
